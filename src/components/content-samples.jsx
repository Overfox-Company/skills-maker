import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HugeiconsIcon } from "@hugeicons/react";
import InformationCircleIcon from "@hugeicons-pro/core-stroke-rounded/InformationCircleIcon";
import Alert02Icon from "@hugeicons-pro/core-stroke-rounded/Alert02Icon";
import CancelCircleIcon from "@hugeicons-pro/core-stroke-rounded/CancelCircleIcon";
import CheckmarkCircle02Icon from "@hugeicons-pro/core-stroke-rounded/CheckmarkCircle02Icon";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function BrandField({ label, id, children, ...props }) {
  return (
    <div className="brand-field">
      <Input id={id} placeholder=" " {...props} />
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
export function ContentSamples({ design, Sample }) {
  const [retried, setRetried] = useState(false);
  const [period, setPeriod] = useState("Semana");
  const [chart, setChart] = useState("area");
  const [cart, setCart] = useState(0);
  const [color, setColor] = useState("Grafito");
  const [done, setDone] = useState([]);
  const data = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
    (day, i) => ({
      day,
      ingresos: [24, 38, 29, 62, 48, 73, 89][i] * (period === "Mes" ? 4 : 1),
    }),
  );
  const Chart = chart === "area" ? AreaChart : BarChart;
  const feedback = [
    [
      "info",
      InformationCircleIcon,
      "Información",
      "Tu prueba incluye todas las funciones durante 14 días.",
    ],
    [
      "warning",
      Alert02Icon,
      "Espacio casi lleno",
      "Has usado el 85% del almacenamiento disponible.",
    ],
    [
      retried ? "success" : "destructive",
      retried ? CheckmarkCircle02Icon : CancelCircleIcon,
      retried ? "Sincronización completada" : "No se pudo sincronizar",
      retried
        ? "Los cambios de ejemplo están guardados."
        : "Tus cambios siguen aquí. Vuelve a intentarlo.",
    ],
  ];
  return (
    <>
      <Sample number="11" title="Mensajes y feedback" tag="Alert">
        <div className="feedback-stack">
          {feedback.map(([kind, icon, title, description], i) => (
            <Alert
              key={i}
              className="brand-alert"
              role={kind === "destructive" ? "alert" : "status"}
              style={{ "--feedback": `var(--${kind})` }}
            >
              <HugeiconsIcon icon={icon} size={20} />
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>
                {description}
                {i === 2 && !retried && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setRetried(true)}
                  >
                    Reintentar
                  </Button>
                )}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </Sample>
      <Sample number="12" title="Estados del formulario" tag="Input states">
        <div
          className="sample-form brand-form"
          data-label={design.inputs.label}
          data-border={design.inputs.border}
        >
          <BrandField
            id="brand-name"
            label="Nombre completo"
            defaultValue="Alex Morgan"
          />
          <BrandField
            id="brand-invalid"
            label="Correo electrónico"
            defaultValue="alex@"
            aria-invalid="true"
            aria-describedby="brand-error"
          />
          <small id="brand-error" className="input-error">
            Introduce un correo electrónico válido.
          </small>
          <BrandField
            id="brand-disabled"
            label="Identificador asignado"
            value="STUDIO-024"
            disabled
          />
          <div className="input-combination">
            <BrandField
              id="brand-search"
              label="Buscar recursos"
              type="search"
            />
            <Button
              onClick={() => document.getElementById("brand-search")?.focus()}
            >
              Buscar
            </Button>
          </div>
          <p className="subtle rule-caption">
            {design.selected.inputs.name} ·{" "}
            {design.inputs.border === "underline"
              ? "Línea inferior"
              : design.inputs.border === "none"
                ? "Sin borde"
                : "Borde completo"}{" "}
            ·{" "}
            {design.inputs.label === "floating"
              ? "Etiqueta flotante"
              : "Etiqueta superior"}
          </p>
        </div>
      </Sample>
      <Sample number="13" title="Analítica de ingresos" tag="Chart">
        <div className="content-toolbar">
          <strong>{period === "Semana" ? "$3.630" : "$14.520"}</strong>
          <div>
            {["Semana", "Mes"].map((p) => (
              <Button
                key={p}
                size="sm"
                variant={period === p ? "secondary" : "ghost"}
                aria-pressed={period === p}
                onClick={() => setPeriod(p)}
              >
                {p}
              </Button>
            ))}
          </div>
        </div>
        <p className="subtle">
          Ingresos de ejemplo · +18,6% respecto al período anterior
        </p>
        <div
          className="chart-container"
          role="img"
          aria-label={`Gráfica de ingresos por día. ${data.map((d) => `${d.day}: ${d.ingresos}`).join(", ")}`}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
            initialDimension={{ width: 300, height: 200 }}
          >
            <Chart
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
            >
              <XAxis
                dataKey="day"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--card-radius)",
                }}
              />
              {chart === "area" ? (
                <Area
                  type="monotone"
                  dataKey="ingresos"
                  stroke="var(--primary)"
                  fill="var(--primary)"
                  fillOpacity={0.14}
                  strokeWidth={2}
                  isAnimationActive={false}
                />
              ) : (
                <Bar
                  dataKey="ingresos"
                  fill="var(--primary)"
                  radius={parseFloat(design.meta.cardRadius) || 0}
                  isAnimationActive={false}
                />
              )}
            </Chart>
          </ResponsiveContainer>
        </div>
        <div className="content-toolbar">
          <span className="subtle">Visualización</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setChart(chart === "area" ? "bar" : "area")}
          >
            {chart === "area" ? "Ver barras" : "Ver área"}
          </Button>
        </div>
      </Sample>
      <Sample number="14" title="Producto de ecommerce" tag="Product card">
        <Card
          className="brand-content product-content"
          style={design.content.product.style}
        >
          <div
            className="product-art"
            style={{
              color:
                color === "Grafito" ? "var(--foreground)" : "var(--primary)",
            }}
          >
            <Badge>Nuevo</Badge>
            <svg
              viewBox="0 0 300 200"
              role="img"
              aria-label={`Auriculares en color ${color}`}
            >
              <path
                d="M78 120V95a72 72 0 0 1 144 0v25"
                fill="none"
                stroke="currentColor"
                strokeWidth="15"
              />
              <path
                d="M91 95a59 59 0 0 1 118 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                opacity=".3"
              />
              <rect
                x="62"
                y="100"
                width="42"
                height="70"
                rx="18"
                fill="currentColor"
              />
              <rect
                x="196"
                y="100"
                width="42"
                height="70"
                rx="18"
                fill="currentColor"
              />
              <path
                d="M80 114v40m140-40v40"
                stroke="var(--card)"
                strokeWidth="4"
                opacity=".4"
              />
            </svg>
          </div>
          <div className="product-details">
            <div className="content-toolbar">
              <strong>Studio Headphones</strong>
              <strong>$129</strong>
            </div>
            <p className="subtle">Sonido envolvente. Diseño esencial.</p>
            <div className="content-toolbar">
              {["Grafito", "Edición color"].map((c) => (
                <Button
                  key={c}
                  size="sm"
                  variant={color === c ? "secondary" : "outline"}
                  aria-pressed={color === c}
                  onClick={() => setColor(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
            <Button className="full-width" onClick={() => setCart(cart + 1)}>
              Añadir al carrito
            </Button>
            <small role="status">
              {cart
                ? `${cart} ${cart === 1 ? "producto añadido" : "productos añadidos"}`
                : "Envío gratuito · 30 días de devolución"}
            </small>
          </div>
        </Card>
      </Sample>
      <Sample number="15" title="Resumen financiero" tag="Finance + Table">
        <Card
          className="brand-content finance-content"
          style={design.content.finance.style}
        >
          <span className="subtle">Balance disponible · USD</span>
          <strong className="balance-value">$24.850,00</strong>
          <Badge variant="secondary">↗ +12,8% este mes</Badge>
          <div className="finance-metrics">
            <div>
              <small>Ingresos</small>
              <strong>$8.420</strong>
            </div>
            <div>
              <small>Gastos</small>
              <strong>$2.180</strong>
            </div>
          </div>
        </Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Movimiento</TableHead>
              <TableHead className="amount-cell">Importe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Factura #024", "+$1.250", "Completado"],
              ["Suscripción", "−$29", "Pagado"],
              ["Transferencia", "+$480", "Pendiente"],
            ].map(([name, amount, state]) => (
              <TableRow key={name}>
                <TableCell>
                  {name}
                  <small className="transaction-state">{state}</small>
                </TableCell>
                <TableCell className="amount-cell">{amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Sample>
      <Sample number="16" title="Lista de trabajo" tag="List + Checkbox">
        <div className="content-toolbar">
          <strong>Preparar lanzamiento</strong>
          <Badge variant="secondary">{done.length}/3</Badge>
        </div>
        <div className="brand-list">
          {[
            "Revisar el sistema de color",
            "Validar los estados del formulario",
            "Publicar la documentación",
          ].map((label, index) => (
            <div
              className="brand-list-row"
              key={label}
              style={design.content.list.style}
            >
              <Checkbox
                id={`content-task-${index}`}
                checked={done.includes(index)}
                onCheckedChange={(checked) =>
                  setDone(
                    checked
                      ? [...done, index]
                      : done.filter((i) => i !== index),
                  )
                }
              />
              <Label
                htmlFor={`content-task-${index}`}
                style={{
                  textDecoration: done.includes(index)
                    ? "line-through"
                    : "none",
                }}
              >
                {label}
                <small>
                  {
                    ["Diseño · Hoy", "Producto · Mañana", "Equipo · Viernes"][
                      index
                    ]
                  }
                </small>
              </Label>
            </div>
          ))}
        </div>
      </Sample>
    </>
  );
}
