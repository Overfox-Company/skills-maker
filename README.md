# DESIGN.md Studio

Editor de una sola vista para combinar siete secciones de diseño de las 74 marcas de `dataset/` y descargar un `DESIGN.md`. React + Vite, Tailwind CSS y componentes de shadcn/ui sobre Radix.

## Ejecutar

```sh
pnpm install
pnpm dev
```

La grilla de escritorio asigna 4 columnas al sidebar y 8 a la galería. En móvil se apilan. El sidebar permanece oscuro; **la galería usa el modo y los colores originales de la marca seleccionada**.

Los siete selectores son independientes: colores, tipografía, distribución y espaciado, formas, elevación, botones y campos. Las selecciones se guardan únicamente en este navegador. Los formularios, precios e invitaciones de la galería son ejemplos interactivos; no envían datos a servicios externos.

## Dataset y catálogo

```sh
pnpm catalog
```

`scripts/build-catalog.mjs` recorre todos los JSON en una sola pasada y genera:

- `public/data/options.json`: todas las marcas y familias disponibles.
- `src/generated/catalog.json`: catálogo compacto para la vista previa.
- `public/data/brands/*.json`: referencias completas para exportación, sin rutas personales del equipo original.

El catálogo también se regenera antes de `dev` y `build`. Después de añadir marcas, reiniciar el servidor. Si se añaden familias nuevas, ejecutar la descarga de fuentes.

## Fuentes locales

```sh
pnpm fonts:download
```

El script identifica las familias únicas del dataset, consulta los metadatos oficiales de Google Fonts y descarga los pesos, cursivas y subconjuntos disponibles. Cada carpeta `public/fonts/<familia>/` contiene sus archivos, `font.css` y `LICENSE.txt`. `manifest.json` guarda la procedencia y `fonts.css` reúne los `@font-face` con rutas locales.

Actualmente hay **25 familias**. El navegador solo descarga del mismo servidor las fuentes que realmente utiliza. La generación del catálogo y el build no necesitan consultar Google Fonts.

## Exportar

En la aplicación, **Exportar** descarga `DESIGN.md` mediante el navegador. La pestaña `DESIGN.md` permite revisar y copiar el contenido.

Para escribir directamente en la carpeta de salida del proyecto:

```sh
pnpm export:design
# Crea output/DESIGN.md con la selección inicial.

pnpm export:design --colors=spotify --typography=lamborghini --buttons=kraken
```

Se aceptan `--colors`, `--typography`, `--layout`, `--shape`, `--elevation`, `--buttons` y `--inputs`, usando los IDs de `pnpm catalog`. El `DESIGN.md` original de la raíz se conserva intacto.

El Markdown incluye front matter YAML, todos los tokens de color originales, el CSS exacto aplicado, las fuentes, las reglas de composición y las secciones originales seleccionadas. Los archivos binarios de las fuentes no van embebidos: al llevar el diseño a otro proyecto, copiar las carpetas de fuentes indicadas con sus licencias.

### Reglas de composición

- La paleta aporta fondos, superficies, textos, bordes y colores de estado. Todos sus tokens se pueden consultar y copiar en la galería.
- La tipografía se aplica a toda la muestra. Botones y campos aportan su geometría y relleno; tarjetas y contenedores siguen Formas.
- Los tokens estructurados tienen prioridad. Las tablas de radios/espaciado y las guías de componentes se interpretan cuando no hay tokens.
- Si una marca carece de una especificación, se usa un respaldo explícito, documentado en la exportación. No se inventan diferencias entre marcas con valores iguales.
- La galería limita títulos, rellenos y columnas para evitar desbordamientos. Los valores originales permanecen en las referencias; `resolvedCss` documenta la adaptación exacta.

## Verificación

```sh
pnpm test
pnpm lint
pnpm build
```

Las pruebas cubren todas las combinaciones marca/sección (74 × 7), independencia entre selectores, recuperación de preferencias, coincidencia entre exportación y vista previa, y presencia de fuentes/licencias locales. La carpeta `output/playwright/` contiene evidencia local de las comprobaciones de navegador y está excluida de Git.

Referencias técnicas: [shadcn/ui para Vite](https://ui.shadcn.com/docs/installation/vite), [API CSS de Google Fonts](https://developers.google.com/fonts/docs/css2).

Las transiciones del editor usan Framer Motion para interpolar colores, radios y tamaños y animar la redistribución de tarjetas. Se respeta la preferencia de movimiento reducido. El área de trabajo utiliza todo el ancho de la pantalla.

### Galería ampliada

Incluye avisos de información, advertencia, error y éxito; estados de formulario; gráficas Recharts con cambio de período y representación; producto con carrito; balance financiero, movimientos y lista de tareas. Son datos e interacciones locales de demostración.

`src/lib/brand-rules.js` interpreta tokens y guías del catálogo completo para bordes, foco, etiquetas flotantes y estilos específicos de tarjetas. Las reglas interpretadas y sus respaldos se incluyen en la exportación. Las guías narrativas no equivalen a una reproducción exhaustiva de cada sitio original.
