const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const srgbToLinear = (value) => {
  const channel = value / 255;
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
};

export function rgbToLab({ r, g, b }) {
  const red = srgbToLinear(r);
  const green = srgbToLinear(g);
  const blue = srgbToLinear(b);
  const x = (red * 0.4124564 + green * 0.3575761 + blue * 0.1804375) / 0.95047;
  const y = red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
  const z = (red * 0.0193339 + green * 0.119192 + blue * 0.9503041) / 1.08883;
  const transform = (value) =>
    value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
  const fx = transform(x);
  const fy = transform(y);
  const fz = transform(z);
  return { l: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

export function deltaE(first, second) {
  return Math.hypot(first.l - second.l, first.a - second.a, first.b - second.b);
}

function rgbToHsl({ r, g, b }) {
  const channels = [r, g, b].map((value) => value / 255);
  const max = Math.max(...channels);
  const min = Math.min(...channels);
  const lightness = (max + min) / 2;
  if (max === min) return { saturation: 0, lightness };
  const range = max - min;
  return {
    saturation:
      range / (lightness > 0.5 ? 2 - max - min : max + min),
    lightness,
  };
}

const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();

function relativeLuminance({ r, g, b }) {
  const [red, green, blue] = [r, g, b].map(srgbToLinear);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first, second) {
  const one = relativeLuminance(first);
  const two = relativeLuminance(second);
  return (Math.max(one, two) + 0.05) / (Math.min(one, two) + 0.05);
}

function normalizePixel(pixel) {
  if (Array.isArray(pixel)) {
    const [r, g, b, a = 255] = pixel;
    return { r, g, b, a };
  }
  return { ...pixel, a: pixel.a ?? 255 };
}

function compactPixels(pixels, alphaThreshold) {
  const histogram = new Map();
  for (const rawPixel of pixels) {
    const pixel = normalizePixel(rawPixel);
    if (pixel.a < alphaThreshold) continue;
    const r = clamp(Math.round(pixel.r), 0, 255);
    const g = clamp(Math.round(pixel.g), 0, 255);
    const b = clamp(Math.round(pixel.b), 0, 255);
    const key = (r << 16) | (g << 8) | b;
    const current = histogram.get(key);
    if (current) current.weight += 1;
    else histogram.set(key, { rgb: { r, g, b }, lab: rgbToLab({ r, g, b }), weight: 1 });
  }
  return [...histogram.values()];
}

function seedCentroids(points, count) {
  const seeds = [
    points.reduce((best, point) => (point.weight > best.weight ? point : best)),
  ];
  while (seeds.length < count) {
    let candidate = null;
    let candidateScore = -1;
    for (const point of points) {
      const distance = Math.min(...seeds.map((seed) => deltaE(point.lab, seed.lab)));
      const score = distance ** 2 * Math.sqrt(point.weight);
      if (score > candidateScore) {
        candidate = point;
        candidateScore = score;
      }
    }
    if (!candidate || seeds.includes(candidate)) break;
    seeds.push(candidate);
  }
  return seeds.map((seed) => ({ ...seed.lab }));
}

function clusterPoints(points, requestedClusters, iterations) {
  const count = Math.min(requestedClusters, points.length);
  let centroids = seedCentroids(points, count);
  let assignments = new Array(points.length).fill(0);
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let changed = false;
    const sums = centroids.map(() => ({ l: 0, a: 0, b: 0, weight: 0 }));
    points.forEach((point, index) => {
      let closest = 0;
      let closestDistance = Infinity;
      centroids.forEach((centroid, centroidIndex) => {
        const distance = deltaE(point.lab, centroid);
        if (distance < closestDistance) {
          closest = centroidIndex;
          closestDistance = distance;
        }
      });
      if (assignments[index] !== closest) changed = true;
      assignments[index] = closest;
      const sum = sums[closest];
      sum.l += point.lab.l * point.weight;
      sum.a += point.lab.a * point.weight;
      sum.b += point.lab.b * point.weight;
      sum.weight += point.weight;
    });
    centroids = centroids.map((centroid, index) => {
      const sum = sums[index];
      return sum.weight
        ? { l: sum.l / sum.weight, a: sum.a / sum.weight, b: sum.b / sum.weight }
        : centroid;
    });
    if (!changed && iteration > 0) break;
  }

  const clusters = centroids.map((lab) => ({
    lab,
    weight: 0,
    r: 0,
    g: 0,
    b: 0,
  }));
  points.forEach((point, index) => {
    const cluster = clusters[assignments[index]];
    cluster.weight += point.weight;
    cluster.r += point.rgb.r * point.weight;
    cluster.g += point.rgb.g * point.weight;
    cluster.b += point.rgb.b * point.weight;
  });
  return clusters
    .filter(({ weight }) => weight > 0)
    .map((cluster) => {
      const rgb = {
        r: Math.round(cluster.r / cluster.weight),
        g: Math.round(cluster.g / cluster.weight),
        b: Math.round(cluster.b / cluster.weight),
      };
      return { rgb, lab: rgbToLab(rgb), weight: cluster.weight };
    });
}

function mergeClusters(clusters, threshold) {
  const merged = clusters.map((cluster) => ({ ...cluster, rgb: { ...cluster.rgb } }));
  while (merged.length > 1) {
    let pair = null;
    let smallestDistance = threshold;
    for (let first = 0; first < merged.length; first += 1) {
      for (let second = first + 1; second < merged.length; second += 1) {
        const distance = deltaE(merged[first].lab, merged[second].lab);
        if (distance < smallestDistance) {
          pair = [first, second];
          smallestDistance = distance;
        }
      }
    }
    if (!pair) break;
    const [firstIndex, secondIndex] = pair;
    const first = merged[firstIndex];
    const second = merged[secondIndex];
    const weight = first.weight + second.weight;
    const rgb = {
      r: Math.round((first.rgb.r * first.weight + second.rgb.r * second.weight) / weight),
      g: Math.round((first.rgb.g * first.weight + second.rgb.g * second.weight) / weight),
      b: Math.round((first.rgb.b * first.weight + second.rgb.b * second.weight) / weight),
    };
    merged[firstIndex] = { rgb, lab: rgbToLab(rgb), weight };
    merged.splice(secondIndex, 1);
  }
  return merged;
}

function enrichClusters(clusters, totalWeight) {
  return clusters.map((cluster) => {
    const hsl = rgbToHsl(cluster.rgb);
    const distances = clusters
      .filter((candidate) => candidate !== cluster)
      .map((candidate) => deltaE(cluster.lab, candidate.lab));
    return {
      ...cluster,
      hex: rgbToHex(cluster.rgb),
      percentage: (cluster.weight / totalWeight) * 100,
      saturation: hsl.saturation * 100,
      lightness: hsl.lightness * 100,
      separation: distances.length ? Math.min(...distances) : 100,
    };
  });
}

function selectUsefulColors(clusters, minimum, maximum) {
  if (clusters.length <= maximum) return [...clusters].sort((a, b) => b.percentage - a.percentage);
  const target = clamp(7, minimum, Math.min(maximum, clusters.length));
  const mostFrequent = clusters.reduce((best, color) =>
    color.percentage > best.percentage ? color : best,
  );
  const selected = [mostFrequent];
  while (selected.length < target) {
    const remaining = clusters.filter((color) => !selected.includes(color));
    if (!remaining.length) break;
    const next = remaining.reduce((best, color) => {
      const distance = Math.min(...selected.map((chosen) => deltaE(color.lab, chosen.lab)));
      const frequency = Math.sqrt(color.percentage / 100);
      const saturation = color.saturation / 100;
      const luminosityRange = Math.abs(color.lightness - 50) / 50;
      const rarityAccent = color.percentage <= 12 && saturation >= 0.35 ? 0.14 : 0;
      const score =
        frequency * 0.3 +
        saturation * 0.2 +
        Math.min(distance / 65, 1) * 0.32 +
        luminosityRange * 0.08 +
        rarityAccent;
      return !best || score > best.score ? { color, score, distance } : best;
    }, null);
    if (!next) break;
    selected.push(next.color);
  }
  return selected.sort((a, b) => b.percentage - a.percentage);
}

function inferRoles(colors) {
  if (!colors.length) return {};
  const background = colors.reduce((best, color) => {
    const neutrality = 1 - color.saturation / 100;
    const edgeLightness = Math.abs(color.lightness - 50) / 50;
    const score = color.percentage / 100 * 0.58 + neutrality * 0.25 + edgeLightness * 0.17;
    return !best || score > best.score ? { color, score } : best;
  }, null).color;
  const otherColors = colors.filter((color) => color !== background);
  const roles = { background: background.hex };

  const text = [...otherColors].sort(
    (a, b) => contrastRatio(b.rgb, background.rgb) - contrastRatio(a.rgb, background.rgb),
  )[0];
  if (text && contrastRatio(text.rgb, background.rgb) >= 3) roles.text = text.hex;

  const surface = otherColors
    .map((color) => ({ color, distance: deltaE(color.lab, background.lab) }))
    .filter(({ distance }) => distance >= 4 && distance <= 28)
    .sort((a, b) => b.color.percentage - a.color.percentage || a.distance - b.distance)[0]?.color;
  if (surface) roles.surface = surface.hex;

  const muted = otherColors
    .filter((color) => color !== text && color.saturation <= 35)
    .map((color) => ({ color, contrast: contrastRatio(color.rgb, background.rgb) }))
    .filter(({ contrast }) => contrast >= 1.5 && contrast < 4.8)
    .sort((a, b) => Math.abs(a.contrast - 2.6) - Math.abs(b.contrast - 2.6))[0]?.color;
  if (muted) roles.muted = muted.hex;

  const chromatic = otherColors.filter((color) => color !== text && color !== surface);
  const ranked = chromatic
    .map((color) => ({
      color,
      score:
        color.saturation / 100 * 0.42 +
        Math.min(deltaE(color.lab, background.lab) / 70, 1) * 0.33 +
        Math.sqrt(color.percentage / 100) * 0.25,
    }))
    .sort((a, b) => b.score - a.score);
  const primary = ranked[0]?.color;
  if (primary && (primary.saturation >= 20 || deltaE(primary.lab, background.lab) >= 25)) {
    roles.primary = primary.hex;
  }

  const secondary = ranked.find(
    ({ color }) => color !== primary && deltaE(color.lab, primary.lab) >= 14,
  )?.color;
  if (secondary) roles.secondary = secondary.hex;

  const accent = chromatic
    .filter((color) => color !== primary && color.saturation >= 28)
    .map((color) => ({
      color,
      score:
        color.saturation / 100 * 0.4 +
        Math.min(deltaE(color.lab, background.lab) / 70, 1) * 0.3 +
        Math.min(primary ? deltaE(color.lab, primary.lab) / 60 : 1, 1) * 0.2 +
        (color.percentage <= 12 ? 0.1 : 0),
    }))
    .sort((a, b) => b.score - a.score)[0]?.color;
  if (accent && (!primary || deltaE(accent.lab, primary.lab) >= 16)) roles.accent = accent.hex;
  return roles;
}

/** Extracts a perceptually spaced product palette from RGBA or RGB pixels. */
export function extractPaletteFromPixels(
  pixels,
  { clusters = 10, minColors = 5, maxColors = 8, alphaThreshold = 32, mergeThreshold = 9 } = {},
) {
  const points = compactPixels(pixels, alphaThreshold);
  if (!points.length) throw new Error("La imagen no contiene píxeles visibles suficientes.");
  const requestedClusters = clamp(clusters, 8, 12);
  const grouped = clusterPoints(points, requestedClusters, 20);
  const merged = mergeClusters(grouped, mergeThreshold);
  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0);
  const useful = selectUsefulColors(enrichClusters(merged, totalWeight), minColors, maxColors);
  const colors = useful.map(({ hex, rgb, percentage, saturation, lightness }) => ({
    hex,
    rgb,
    percentage: Number(percentage.toFixed(2)),
    saturation: Number(saturation.toFixed(2)),
    lightness: Number(lightness.toFixed(2)),
  }));
  return { colors, roles: inferRoles(useful) };
}

function loadImage(file) {
  if (typeof createImageBitmap === "function") return createImageBitmap(file);
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`No se pudo leer ${file.name}.`));
    };
    image.src = url;
  });
}

/** Averages several per-image palettes into one, weighting each image equally. */
export function averagePalettes(
  palettes,
  { minColors = 5, maxColors = 8, mergeThreshold = 9 } = {},
) {
  const contributors = palettes.filter((palette) => palette.colors.length);
  if (!contributors.length)
    throw new Error("Las imágenes no contienen píxeles visibles suficientes.");
  const accumulated = [];
  for (const palette of contributors) {
    const imageTotal =
      palette.colors.reduce((sum, color) => sum + color.percentage, 0) || 1;
    for (const color of palette.colors) {
      // Normalize each image to an equal share so the result is the mean between images.
      accumulated.push({
        rgb: color.rgb,
        lab: rgbToLab(color.rgb),
        weight: color.percentage / imageTotal / contributors.length,
      });
    }
  }
  const merged = mergeClusters(accumulated, mergeThreshold);
  const totalWeight = merged.reduce((sum, cluster) => sum + cluster.weight, 0) || 1;
  const useful = selectUsefulColors(enrichClusters(merged, totalWeight), minColors, maxColors);
  const colors = useful.map(({ hex, rgb, percentage, saturation, lightness }) => ({
    hex,
    rgb,
    percentage: Number(percentage.toFixed(2)),
    saturation: Number(saturation.toFixed(2)),
    lightness: Number(lightness.toFixed(2)),
  }));
  return { colors, roles: inferRoles(useful) };
}

function samplePixelsFromImage(context, image) {
  context.clearRect(0, 0, 100, 100);
  context.drawImage(image, 0, 0, 100, 100);
  const data = context.getImageData(0, 0, 100, 100).data;
  const pixels = [];
  for (let index = 0; index < data.length; index += 4) {
    if (data[index + 3] < 32) continue;
    pixels.push([data[index], data[index + 1], data[index + 2], data[index + 3]]);
  }
  return pixels;
}

/**
 * Decodes up to five browser File objects, analyses each image separately at
 * 100 × 100 and averages the per-image palettes into a single mean palette.
 * The per-image palettes are kept in `images` so the distribution can be tuned.
 */
export async function extractPaletteFromImages(files, options) {
  const images = [...files].slice(0, 5);
  if (!images.length) throw new Error("Selecciona al menos una imagen.");
  const canvas = document.createElement("canvas");
  canvas.width = 100;
  canvas.height = 100;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Canvas no está disponible en este navegador.");
  const perImage = [];
  for (const file of images) {
    const image = await loadImage(file);
    const pixels = samplePixelsFromImage(context, image);
    image.close?.();
    if (pixels.length)
      perImage.push({ name: file.name, ...extractPaletteFromPixels(pixels, options) });
  }
  if (!perImage.length)
    throw new Error("Las imágenes no contienen píxeles visibles suficientes.");
  const combined =
    perImage.length === 1 ? perImage[0] : averagePalettes(perImage, options);
  return { colors: combined.colors, roles: combined.roles, images: perImage };
}

export function paletteToBrand(palette) {
  const colors = Object.fromEntries(
    palette.colors.map((color, index) => [`extracted-${index + 1}`, color.hex]),
  );
  Object.entries(palette.roles).forEach(([role, value]) => {
    const token = role === "background" ? "canvas" : role === "text" ? "ink" : role;
    colors[token] = value;
  });
  colors.primary ??=
    palette.roles.accent ??
    palette.roles.text ??
    palette.colors.find(({ hex }) => hex !== palette.roles.background)?.hex ??
    palette.colors[0]?.hex;
  return {
    id: "custom-image-palette",
    name: "Custom · imágenes",
    sourceUri: "local://image-palette",
    colors,
    extractedPalette: palette,
  };
}
