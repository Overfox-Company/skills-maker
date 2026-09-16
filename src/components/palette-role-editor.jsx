import { useState } from "react";
import { GripVertical } from "lucide-react";

const ROLE_SEGMENTS = [
  { role: "background", label: "Fondo", hint: "Lienzo base" },
  { role: "surface", label: "Superficie", hint: "Tarjetas y paneles" },
  { role: "text", label: "Texto", hint: "Contenido principal" },
  { role: "primary", label: "Primario", hint: "Acción principal" },
  { role: "secondary", label: "Secundario", hint: "Apoyo" },
  { role: "accent", label: "Acento", hint: "Detalles" },
  { role: "muted", label: "Apagado", hint: "Texto sutil" },
];

// Perceptual luminance to keep the hex label legible on top of each swatch.
function contrastInk(hex) {
  const value = hex?.replace("#", "");
  if (!value || value.length < 6) return "#111";
  const [r, g, b] = [0, 2, 4].map((index) => parseInt(value.slice(index, index + 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 >= 140 ? "#111" : "#fff";
}

export function PaletteRoleEditor({ palette, onReassignRole, notify }) {
  const [dragging, setDragging] = useState(null);
  const [over, setOver] = useState(null);
  const roles = palette?.roles ?? {};
  const images = palette?.images ?? [];
  const groups =
    images.length > 1
      ? [
          { key: "mix", label: "Mezcla", colors: palette?.colors ?? [] },
          ...images.map((image, index) => ({
            key: `img-${index}`,
            label: image.name || `Imagen ${index + 1}`,
            colors: image.colors ?? [],
          })),
        ]
      : [
          {
            key: "colors",
            label: images[0]?.name || "Colores analizados",
            colors: palette?.colors ?? [],
          },
        ];

  function reset() {
    setDragging(null);
    setOver(null);
  }

  function handleDrop(role, label) {
    if (dragging && roles[role] !== dragging) {
      onReassignRole(role, dragging);
      notify?.(`${dragging.toUpperCase()} asignado a ${label}`);
    }
    reset();
  }

  return (
    <div className="palette-role-editor">
      <p className="palette-role-hint">
        Arrastra un color de cualquier imagen a un rol para armar tu distribución.
      </p>
      <div className="palette-color-sources">
        {groups.map((group) => (
          <div className="palette-color-group" key={group.key}>
            <div className="palette-color-group-head">
              <strong>{group.label}</strong>
              <span>{group.colors.length} tokens</span>
            </div>
            <div className="palette-color-pool" role="list" aria-label={group.label}>
              {group.colors.map((color, index) => (
                <div
                  key={`${group.key}-${color.hex}-${index}`}
                  role="listitem"
                  className={`palette-color-card${
                    dragging === color.hex ? " is-dragging" : ""
                  }`}
                  draggable
                  onDragStart={() => setDragging(color.hex)}
                  onDragEnd={reset}
                  style={{ background: color.hex, color: contrastInk(color.hex) }}
                  title={`${color.hex} · ${color.percentage}%`}
                >
                  <GripVertical size={13} aria-hidden="true" />
                  <code>{color.hex.toUpperCase()}</code>
                  <span>{Math.round(color.percentage)}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="palette-role-grid">
        {ROLE_SEGMENTS.map(({ role, label, hint }) => {
          const hex = roles[role];
          return (
            <div
              key={role}
              className={`palette-role-slot${over === role ? " is-over" : ""}${
                hex ? "" : " is-empty"
              }`}
              onDragOver={(event) => {
                event.preventDefault();
                setOver(role);
              }}
              onDragLeave={() =>
                setOver((current) => (current === role ? null : current))
              }
              onDrop={(event) => {
                event.preventDefault();
                handleDrop(role, label);
              }}
              aria-label={`${label}: ${hex ?? "sin asignar"}`}
            >
              <div className="palette-role-head">
                <strong>{label}</strong>
                <span>{hint}</span>
              </div>
              {hex ? (
                <div
                  className="palette-role-chip"
                  draggable
                  onDragStart={() => setDragging(hex)}
                  onDragEnd={reset}
                  style={{ background: hex, color: contrastInk(hex) }}
                >
                  <GripVertical size={12} aria-hidden="true" />
                  <code>{hex.toUpperCase()}</code>
                </div>
              ) : (
                <div className="palette-role-empty">Suelta un color</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
