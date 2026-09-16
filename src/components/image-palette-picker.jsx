import { useEffect, useMemo, useRef, useState } from "react";
import { ImagePlus, LoaderCircle, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { extractPaletteFromImages } from "../lib/palette-extractor.js";

const MAX_IMAGES = 5;

export function ImagePalettePicker({ onPalette, onClear, notify }) {
  const [files, setFiles] = useState([]);
  const [palette, setPalette] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const callbacks = useRef({ onPalette, onClear, notify });
  const previews = useMemo(
    () => files.map((file) => ({ file, url: URL.createObjectURL(file) })),
    [files],
  );

  useEffect(
    () => () => previews.forEach(({ url }) => URL.revokeObjectURL(url)),
    [previews],
  );

  useEffect(() => {
    callbacks.current = { onPalette, onClear, notify };
  }, [onPalette, onClear, notify]);

  useEffect(() => {
    if (!files.length) return undefined;
    let current = true;
    extractPaletteFromImages(files)
      .then((result) => {
        if (!current) return;
        setPalette(result);
        callbacks.current.onPalette(result);
        callbacks.current.notify?.(
          `Paleta custom creada con ${files.length} ${files.length === 1 ? "imagen" : "imágenes"}.`,
        );
      })
      .catch((cause) => {
        if (!current) return;
        const message = cause instanceof Error ? cause.message : "No se pudo analizar la imagen.";
        setError(message);
        callbacks.current.notify?.(message);
      })
      .finally(() => {
        if (current) setProcessing(false);
      });
    return () => {
      current = false;
    };
  }, [files]);

  function addFiles(event) {
    const candidates = [...event.target.files].filter((file) => file.type.startsWith("image/"));
    event.target.value = "";
    if (!candidates.length) {
      callbacks.current.notify?.("Selecciona archivos de imagen válidos.");
      return;
    }
    const unique = candidates.filter(
      (candidate) =>
        !files.some(
          (file) =>
            file.name === candidate.name &&
            file.size === candidate.size &&
            file.lastModified === candidate.lastModified,
        ),
    );
    const next = [...files, ...unique].slice(0, MAX_IMAGES);
    if (files.length + unique.length > MAX_IMAGES)
      callbacks.current.notify?.("Puedes combinar un máximo de 5 imágenes.");
    setPalette(null);
    setError("");
    setProcessing(true);
    setFiles(next);
  }

  function removeFile(fileToRemove) {
    const next = files.filter((file) => file !== fileToRemove);
    setPalette(null);
    setError("");
    setProcessing(next.length > 0);
    setFiles(next);
    if (!next.length) callbacks.current.onClear?.();
  }

  function clearFiles() {
    setFiles([]);
    setPalette(null);
    setError("");
    setProcessing(false);
    callbacks.current.onClear?.();
  }

  return (
    <div className="image-palette-picker">
      <input
        ref={inputRef}
        className="visually-hidden"
        type="file"
        accept="image/*"
        multiple
        onChange={addFiles}
        aria-label="Seleccionar hasta cinco imágenes para extraer una paleta"
      />
      <Button
        type="button"
        variant="outline"
        className="palette-upload-button"
        onClick={() => inputRef.current?.click()}
        disabled={processing || files.length >= MAX_IMAGES}
        aria-label={
          files.length
            ? `Añadir imágenes; ${files.length} de ${MAX_IMAGES} seleccionadas`
            : "Extraer paleta de hasta cinco imágenes"
        }
        title="Extraer paleta de imágenes"
      >
        {processing ? <LoaderCircle className="palette-spinner" /> : <ImagePlus />}
        <span>{files.length || "+"}</span>
      </Button>

      {(files.length > 0 || error) && (
        <div className="image-palette-result" aria-live="polite">
          <div className="image-palette-summary">
            <div className="image-thumbnails" aria-label="Imágenes seleccionadas">
              {previews.map(({ file, url }) => (
                <span className="image-thumbnail" key={`${file.name}-${file.lastModified}`}>
                  <img src={url} alt="" />
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    aria-label={`Quitar ${file.name}`}
                  >
                    <X />
                  </button>
                </span>
              ))}
            </div>
            <button type="button" className="clear-image-palette" onClick={clearFiles}>
              <Trash2 /> Limpiar
            </button>
          </div>
          {processing && <p>Analizando colores localmente…</p>}
          {error && <p className="image-palette-error">{error}</p>}
          {palette && !processing && (
            <div className="extracted-swatches" aria-label="Paleta extraída">
              {palette.colors.map((color) => (
                <span
                  key={color.hex}
                  style={{ background: color.hex }}
                  title={`${color.hex} · ${color.percentage}%`}
                />
              ))}
            </div>
          )}
          <small>{files.length}/{MAX_IMAGES} · análisis por imagen + media LAB · solo en este dispositivo</small>
        </div>
      )}
    </div>
  );
}
