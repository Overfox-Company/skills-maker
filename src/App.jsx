import { ContentSamples, BrandField } from "./components/content-samples";
import { motion, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import Sun03Icon from "@hugeicons-pro/core-stroke-rounded/Sun03Icon";
import Moon02Icon from "@hugeicons-pro/core-stroke-rounded/Moon02Icon";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  CheckCheck,
  CircleHelp,
  Code2,
  Copy,
  FileCode2,
  Layers3,
  LayoutGrid,
  Maximize2,
  MousePointer2,
  Palette,
  PanelLeft,
  Plus,
  RotateCcw,
  SlidersHorizontal,
  Square,
  TextCursorInput,
  Type,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import catalog from "./generated/catalog.json";
import {
  composeDesign,
  nativePalette,
  defaultSelection,
  sections,
  validSelection,
} from "./lib/design-engine";
const loadExporter = () => import("./lib/export-design");
import "./App.css";

const icons = {
  palette: Palette,
  type: Type,
  layout: LayoutGrid,
  spacing: Maximize2,
  shape: Square,
  layers: Layers3,
  button: MousePointer2,
  inputs: TextCursorInput,
};
function initialSelection() {
  try {
    return validSelection(
      catalog,
      JSON.parse(localStorage.getItem("design-studio-selection")),
    );
  } catch {
    return { ...defaultSelection };
  }
}
function Tip({ label, children }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
function PaletteModeIcon({ mode }) {
  return (
    <span
      className="palette-mode-icon"
      title={mode === "dark" ? "Paleta oscura" : "Paleta clara"}
      data-mode={mode}
    >
      <HugeiconsIcon
        icon={mode === "dark" ? Moon02Icon : Sun03Icon}
        size={14}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </span>
  );
}

function BrandDot({ brand }) {
  return (
    <span
      className="brand-dot"
      style={{ background: nativePalette(brand).primary }}
      aria-hidden="true"
    />
  );
}
function Sample({ number, title, tag, children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      layout={reduceMotion ? false : "position"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`sample ${className}`}
    >
      <div className="sample-label">
        <span>
          <span className="sample-number">{number}</span>
          {title}
        </span>
        <span className="sample-kind">{tag}</span>
      </div>
      <Card className="sample-card">
        <CardContent className="sample-content">{children}</CardContent>
      </Card>
    </motion.section>
  );
}
function Gallery({ design, notify }) {
  const reduceMotion = useReducedMotion();
  // Interpolate shared tokens so nested shadcn components change together.
  // Font family and column count switch discretely; layout handles their reflow.
  const immediate = {};
  const animated = {};
  for (const [key, value] of Object.entries(design.css)) {
    if (
      /font$|columns$|shadow$|padding$/.test(key) ||
      key === "--button-padding" ||
      key === "--input-padding" ||
      String(value).includes("color-mix")
    )
      immediate[key] = value;
    else animated[key] = value;
  }
  const [range, setRange] = useState([64]);
  const [notifications, setNotifications] = useState(true);
  const [isPublic, setIsPublic] = useState(false);
  const [invited, setInvited] = useState(false);
  const [taskComplete, setTaskComplete] = useState(false);
  const [plan, setPlan] = useState("monthly");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [demoName, setDemoName] = useState("Mi próximo proyecto");
  const [projectName, setProjectName] = useState("Mi próximo proyecto");
  const swatches = [
    ["Primario", design.palette.primary, design.palette.sources.primary],
    ["Fondo", design.palette.background, design.palette.sources.background],
    ["Superficie", design.palette.card, design.palette.sources.card],
    ["Borde", design.palette.border, design.palette.sources.border],
    ["Texto", design.palette.foreground, design.palette.sources.foreground],
  ];
  return (
    <motion.div
      initial={false}
      animate={animated}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`gallery ${design.palette.mode}`}
      style={immediate}
      data-columns={design.meta.columns}
    >
      <Sample
        number="01"
        title="Tipografía"
        tag="Type scale"
        className="typography-sample"
      >
        <div className="type-top">
          <span className="giant-type">Aa</span>
          <Badge variant="outline">
            {design.selected.typography.families[0]?.family}
          </Badge>
        </div>
        <h2 className="type-heading">
          Las buenas ideas
          <br />
          toman forma.
        </h2>
        <p className="sample-body">
          Cada detalle cuenta. Construye experiencias que se sientan tan bien
          como se ven.
        </p>
        <div className="type-spec">
          <span>ABCDEFGHIJKLMNÑOPQRSTUVWXYZ</span>
          <span>abcdefghijklmnopqrstuvwxyz · 0123456789</span>
        </div>
      </Sample>
      <Sample number="02" title="Botones y acciones" tag="Button">
        <p className="tiny-label">UNA ACCIÓN, DISTINTAS JERARQUÍAS</p>
        <div className="button-stack">
          <Button onClick={() => notify("Acción primaria activada")}>
            Crear proyecto <Plus />
          </Button>
          <Button
            variant="outline"
            onClick={() => notify("Acción secundaria activada")}
          >
            Ver proyectos <ArrowUpRight />
          </Button>
        </div>
        <div className="button-row">
          <Button
            variant="secondary"
            onClick={() => notify("Cambios guardados")}
          >
            Guardar cambios
          </Button>
          <Button variant="ghost" onClick={() => notify("Acción cancelada")}>
            Cancelar
          </Button>
        </div>
        <Separator />
        <div className="button-row">
          <Tip label="Añadir elemento">
            <Button
              size="icon"
              variant="outline"
              aria-label="Añadir elemento"
              onClick={() => notify("Elemento añadido")}
            >
              <Plus />
            </Button>
          </Tip>
          <Tip label="Notificaciones">
            <Button
              size="icon"
              variant="outline"
              aria-label="Notificaciones de ejemplo"
              onClick={() => notify("No tienes notificaciones nuevas")}
            >
              <Bell />
            </Button>
          </Tip>
          <Button disabled>Deshabilitado</Button>
          <Button
            variant="link"
            onClick={() => notify("Enlace de ejemplo activado")}
          >
            Explorar <ArrowRight />
          </Button>
        </div>
        <div className="component-footnote">
          <MousePointer2 size={13} />
          <span>Prueba los estados hover, foco y activo</span>
        </div>
      </Sample>
      <Sample
        number="03"
        title="Paleta de colores"
        tag="Color tokens"
        className="palette-sample"
      >
        <div className="color-strip">
          {swatches.map(([name, color, token]) => (
            <button
              type="button"
              key={name}
              style={{ background: color }}
              aria-label={`Copiar ${name}: ${color}`}
              title={`${name} (${token}): ${color}`}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(color);
                  notify(`${color} copiado`);
                } catch {
                  notify(`Color: ${color}`);
                }
              }}
            >
              <Copy size={15} />
            </button>
          ))}
        </div>
        <div className="swatch-labels">
          {swatches.map(([name, color, token]) => (
            <div key={name}>
              <span title={`Token original: ${token}`}>{name} · {token}</span>
              <code>{color.toUpperCase()}</code>
            </div>
          ))}
        </div>
        <Accordion type="single" collapsible className="all-colors">
          <AccordionItem value="tokens">
            <AccordionTrigger>
              Todos los colores de {design.selected.colors.name}
              <Badge variant="outline">
                {Object.keys(design.selected.colors.colors).length} tokens
              </Badge>
            </AccordionTrigger>
            <AccordionContent>
              <div className="all-color-grid">
                {Object.entries(design.selected.colors.colors).map(
                  ([name, color]) => (
                    <button
                      type="button"
                      key={name}
                      className="color-token"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(color);
                          notify(`${name}: ${color} copiado`);
                        } catch {
                          notify(`${name}: ${color}`);
                        }
                      }}
                      title={`${name}: ${color}`}
                    >
                      <span style={{ background: color }} />
                      <strong>{name}</strong>
                      <code>{color}</code>
                    </button>
                  ),
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sample>
      <Sample number="04" title="Campos de entrada" tag="Form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInvited(true);
            notify("Invitación de ejemplo preparada");
          }}
          className="sample-form brand-form"
          data-label={design.inputs.label}
          data-border={design.inputs.border}
        >
          <BrandField
            label="Correo electrónico"
            id="preview-email"
            type="email"
            required
            onChange={() => setInvited(false)}
          />
          <div className="field">
            <Label htmlFor="preview-description">
              Descripción <span className="subtle">Opcional</span>
            </Label>
            <Textarea
              id="preview-description"
              placeholder="Una idea que vale la pena construir…"
              rows={2}
            />
          </div>
          <div className="check-row">
            <Checkbox id="preview-terms" required />
            <Label htmlFor="preview-terms">
              Dar acceso al espacio de trabajo
            </Label>
          </div>
          <Button type="submit" className="full-width">
            {invited ? (
              <>
                <Check />
                Invitación preparada
              </>
            ) : (
              <>
                Invitar al equipo
                <ArrowRight />
              </>
            )}
          </Button>
        </form>
      </Sample>
      <Sample number="05" title="Tarjeta de proyecto" tag="Card + Avatar">
        <div className="project-top">
          <span className="project-symbol">
            <Layers3 size={23} />
          </span>
          <Badge variant="secondary">
            <span className="live-dot" />
            En progreso
          </Badge>
        </div>
        <h3 className="project-name">{projectName}</h3>
        <p className="sample-body">
          Un espacio para transformar ideas en algo extraordinario.
        </p>
        <div className="progress-caption">
          <span>Progreso del proyecto</span>
          <strong>{taskComplete ? "100" : "68"}%</strong>
        </div>
        <Progress
          value={taskComplete ? 100 : 68}
          aria-label="Progreso del proyecto"
        />
        <div className="project-bottom">
          <div className="avatar-stack">
            {["AL", "MR", "JD"].map((name) => (
              <Avatar key={name}>
                <AvatarFallback>{name}</AvatarFallback>
              </Avatar>
            ))}
            <span>+2</span>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                Abrir proyecto
                <ArrowUpRight />
              </Button>
            </DialogTrigger>
            <DialogContent
              style={design.css}
              className={`preview-dialog ${design.palette.mode}`}
            >
              <DialogHeader>
                <DialogTitle>Editar proyecto</DialogTitle>
                <DialogDescription>
                  Prueba el estilo del diálogo y sus campos.
                </DialogDescription>
              </DialogHeader>
              <form
                className="sample-form brand-form"
                data-label={design.inputs.label}
                data-border={design.inputs.border}
                onSubmit={(e) => {
                  e.preventDefault();
                  setProjectName(demoName);
                  setDialogOpen(false);
                  notify("Proyecto de ejemplo actualizado");
                }}
              >
                <Label htmlFor="demo-name">Nombre del proyecto</Label>
                <Input
                  id="demo-name"
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  required
                  maxLength={80}
                />
                <Button type="submit">Guardar cambios</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Sample>
      <Sample number="06" title="Controles" tag="Switch + Slider">
        <div className="setting-row">
          <div>
            <Label htmlFor="notifications">Notificaciones</Label>
            <p>Lo importante, a tiempo.</p>
          </div>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>
        <Separator />
        <div className="setting-row">
          <div>
            <Label htmlFor="public-project">Proyecto público</Label>
            <p>Comparte lo que construyes.</p>
          </div>
          <Switch
            id="public-project"
            checked={isPublic}
            onCheckedChange={setIsPublic}
          />
        </div>
        <Separator />
        <div className="slider-area">
          <div className="progress-caption">
            <Label id="intensity-label">Intensidad</Label>
            <code>{range[0]}%</code>
          </div>
          <Slider
            aria-labelledby="intensity-label"
            value={range}
            onValueChange={setRange}
            max={100}
            step={1}
          />
        </div>
        <div className="check-row">
          <Checkbox
            id="complete-task"
            checked={taskComplete}
            onCheckedChange={setTaskComplete}
          />
          <Label htmlFor="complete-task">
            Marcar el proyecto como completado
          </Label>
        </div>
      </Sample>
      <Sample number="07" title="Plan de equipo" tag="Pricing">
        <div className="pricing-title">
          <span className="project-symbol">
            <Zap size={21} />
          </span>
          <Badge variant="outline">Para crear en equipo</Badge>
        </div>
        <div className="price">
          <strong>
            {plan === "monthly" ? "24" : "19"}
            <span>€</span>
          </strong>
          <span>/ persona al mes</span>
        </div>
        <Tabs value={plan} onValueChange={setPlan}>
          <TabsList className="full-width">
            <TabsTrigger value="monthly">Mensual</TabsTrigger>
            <TabsTrigger value="yearly">Anual · −20%</TabsTrigger>
          </TabsList>
        </Tabs>
        <ul className="plan-features">
          {[
            "Proyectos ilimitados",
            "Un espacio compartido",
            "Tu sistema de diseño",
          ].map((text) => (
            <li key={text}>
              <Check size={15} />
              {text}
            </li>
          ))}
        </ul>
        <Button
          className="full-width"
          variant="outline"
          onClick={() =>
            notify(
              `Plan de ejemplo seleccionado: ${plan === "monthly" ? "mensual" : "anual"}`,
            )
          }
        >
          Elegir este plan
          <ArrowRight />
        </Button>
      </Sample>
      <Sample number="08" title="Estados y avisos" tag="Badge + Alert">
        <p className="tiny-label">CADA ESTADO TIENE SU LUGAR</p>
        <div className="badge-row">
          <Badge>
            <span className="live-dot" />
            Publicado
          </Badge>
          <Badge variant="secondary">Borrador</Badge>
          <Badge variant="outline" className="warning-badge">
            En revisión
          </Badge>
        </div>
        <div className="success-notice" role="status">
          <CheckCheck size={19} />
          <div>
            <strong>Todo está sincronizado</strong>
            <p>Tu equipo ya tiene la última versión.</p>
          </div>
        </div>
        <div className="loading-example">
          <Skeleton className="size-9 rounded-full" />
          <div>
            <Skeleton className="h-3 w-28" />
            <Skeleton className="mt-2 h-2 w-40 max-w-full" />
          </div>
        </div>
        <p className="component-footnote">Estado de carga · Skeleton</p>
      </Sample>
      <Sample number="09" title="Contenido desplegable" tag="Accordion">
        <Accordion type="single" collapsible defaultValue="one">
          <AccordionItem value="one">
            <AccordionTrigger>¿Qué incluye mi DESIGN.md?</AccordionTrigger>
            <AccordionContent>
              Los tokens, las fuentes y las reglas de las siete secciones que
              has elegido, listos para usar en tu proyecto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>
              ¿Puedo combinar distintas marcas?
            </AccordionTrigger>
            <AccordionContent>
              Sí. Cada selector es independiente. Los colores y la tipografía se
              aplican a todos los componentes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionTrigger>
              ¿Las fuentes se cargan localmente?
            </AccordionTrigger>
            <AccordionContent>
              Sí. Las familias están en public/fonts con sus licencias. El
              navegador no necesita consultar Google Fonts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sample>
      <Sample number="10" title="Vista de código" tag="Code">
        <div className="code-heading">
          <FileCode2 size={15} />
          <span>theme.css</span>
          <span className="code-dot" />
        </div>
        <pre className="theme-code">
          <span className="code-purple">:root</span> {"{"}
          {"\n"}
          {"  "}
          <span>--primary:</span> <b>{design.palette.primary}</b>;{"\n"}
          {"  "}
          <span>--radius:</span> <b>{design.meta.cardRadius}</b>;{"\n"}
          {"  "}
          <span>--spacing:</span> <b>{design.meta.gap}px</b>;{"\n"}
          {"  "}
          <span>--font:</span>{" "}
          <b>"{design.selected.typography.families[0]?.family}"</b>;{"\n"}
          {"}"}
        </pre>
        <div className="component-footnote">
          <Check size={13} />
          Los mismos valores que exportas
        </div>
      </Sample>
      <ContentSamples design={design} Sample={Sample} />
    </motion.div>
  );
}
function App() {
  const [selection, setSelection] = useState(initialSelection);
  const [activeTab, setActiveTab] = useState("components");
  const [codeResult, setCodeResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [exportError, setExportError] = useState("");
  const [toast, setToast] = useState("");
  const [focusMode, setFocusMode] = useState(false);
  const exportLock = useRef(false);
  const toastTimer = useRef(null);
  const design = useMemo(() => composeDesign(catalog, selection), [selection]);
  const codeLoading = activeTab === "markdown" && codeResult?.design !== design;
  const markdown = codeResult?.design === design ? codeResult.markdown : "";
  const changed = sections.filter(
    (s) => selection[s.key] !== "supabase",
  ).length;
  const fontCount = new Set(
    catalog.flatMap((b) => b.families.map((f) => f.family)),
  ).size;
  function notify(message) {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3600);
  }
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  useEffect(() => {
    try {
      localStorage.setItem(
        "design-studio-selection",
        JSON.stringify(selection),
      );
    } catch {
      /* Preferences are optional. */
    }
  }, [selection]);
  useEffect(() => {
    if (activeTab !== "markdown") return;
    let current = true;
    loadExporter()
      .then(async ({ loadExportSources, generateMarkdown }) => {
        const { sources, fontManifest } = await loadExportSources(design);
        if (current) {
          setCodeResult({
            design,
            markdown: generateMarkdown(design, sources, fontManifest),
          });
          setExportError("");
        }
      })
      .catch((e) => {
        if (current) {
          setExportError(e.message);
          setCodeResult({ design, markdown: "" });
        }
      });
    return () => {
      current = false;
    };
  }, [activeTab, design]);
  async function exportFile() {
    if (exportLock.current) return;
    exportLock.current = true;
    setBusy(true);
    setExportError("");
    try {
      const { loadExportSources, generateMarkdown, downloadMarkdown } =
        await loadExporter();
      const { sources, fontManifest } = await loadExportSources(design);
      const result = generateMarkdown(design, sources, fontManifest);
      downloadMarkdown(result);
      notify("DESIGN.md exportado. Listo para tu próximo proyecto.");
    } catch (e) {
      setExportError(e.message);
    } finally {
      exportLock.current = false;
      setBusy(false);
    }
  }
  return (
    <TooltipProvider delayDuration={250}>
      <div className={`studio ${focusMode ? "focus-mode" : ""}`}>
        <header className="topbar">
          <a className="wordmark" href="/" aria-label="DESIGN.md Studio">
            <span className="logo-mark">
              <PanelLeft size={20} />
            </span>
            <span>
              design<span className="wordmark-extension">.md</span>
            </span>
            <span className="studio-tag">STUDIO</span>
          </a>
          <div className="topbar-right">
            <span className="local-fonts">
              <span className="live-dot" />
              {fontCount} fuentes locales
            </span>
            <Separator orientation="vertical" className="top-divider" />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  <CircleHelp />
                  Cómo funciona
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Un sistema hecho a tu medida</DialogTitle>
                  <DialogDescription>
                    Combina lo mejor de tus referencias en un solo DESIGN.md.
                  </DialogDescription>
                </DialogHeader>
                <ol className="help-list">
                  <li>
                    Elige una marca para cada una de las siete secciones. Puedes
                    escribir el nombre con el selector abierto para encontrarla.
                  </li>
                  <li>
                    Prueba los componentes. Los cambios afectan a la vista
                    previa y al archivo que exportas.
                  </li>
                  <li>
                    Pulsa Exportar. Recibirás un DESIGN.md con tokens, reglas y
                    fuentes seleccionadas.
                  </li>
                </ol>
                <p className="help-note">
                  La vista previa conserva la paleta completa y el modo claro u
                  oscuro de cada marca. El sidebar siempre permanece oscuro.
                  Cuando faltan tokens, el archivo documenta los respaldos
                  utilizados. Las fuentes locales se copian por separado si
                  llevas el diseño a otro proyecto.
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </header>
        <div className="workspace">
          <aside
            className="sidebar dark"
            aria-label="Configuración del sistema de diseño"
          >
            <div className="sidebar-scroll">
              <div className="sidebar-heading">
                <div className="eyebrow">
                  <SlidersHorizontal size={13} /> TU SISTEMA DE DISEÑO
                </div>
                <h1>
                  Mezcla. Prueba.
                  <br />
                  <span>Hazlo tuyo.</span>
                </h1>
                <p>Siete decisiones. Un lenguaje visual.</p>
              </div>
              <div className="selectors-heading">
                <span>Referencias por sección</span>
                <Badge variant="outline">{catalog.length} marcas</Badge>
              </div>
              <div className="selectors">
                {sections.map((section, index) => {
                  const Icon = icons[section.icon];
                  const brand = design.selected[section.key];
                  return (
                    <div className="selector-field" key={section.key}>
                      <div className="selector-label">
                        <Label htmlFor={`select-${section.key}`}>
                          <Icon size={15} />
                          {section.label}
                        </Label>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <Select
                        value={selection[section.key]}
                        onValueChange={(value) => {
                          setSelection((old) => ({
                            ...old,
                            [section.key]: value,
                          }));
                          setExportError("");
                        }}
                      >
                        <SelectTrigger
                          id={`select-${section.key}`}
                          aria-label={section.label}
                          className="brand-select"
                        >
                          <SelectValue>
                            <BrandDot brand={brand} />
                            {brand.name}
                            {section.key === "colors" && (
                              <PaletteModeIcon
                                mode={nativePalette(brand).mode}
                              />
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          align="start"
                          className="brand-options"
                        >
                          {catalog.map((b) => (
                            <SelectItem
                              key={b.id}
                              value={b.id}
                              textValue={b.name}
                            >
                              <BrandDot brand={b} />
                              {b.name}
                              {section.key === "colors" && (
                                <PaletteModeIcon mode={nativePalette(b).mode} />
                              )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  );
                })}
              </div>
              <div className="sidebar-reset">
                <span>
                  {changed
                    ? `${changed} ${changed === 1 ? "sección personalizada" : "secciones personalizadas"}`
                    : "Punto de partida: Supabase"}
                </span>
                <Tip label="Restablecer todas las secciones a Supabase">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelection({ ...defaultSelection });
                      notify("Se restableció el diseño inicial");
                    }}
                    aria-label="Restablecer diseño"
                  >
                    <RotateCcw size={14} />
                    Restablecer
                  </Button>
                </Tip>
              </div>
            </div>
            <div className="sidebar-export">
              <div className="export-file">
                <span className="file-icon">
                  <FileCode2 size={20} />
                </span>
                <div>
                  <strong>Tu próximo DESIGN.md</strong>
                  <span>Una guía lista para construir</span>
                </div>
                <span className="md-pill">.md</span>
              </div>
              {exportError && (
                <p className="export-error" role="alert">
                  {exportError}
                </p>
              )}
              <Button
                className="export-button"
                onClick={exportFile}
                disabled={busy}
              >
                {busy ? "Preparando archivo…" : "Exportar"}
                <ArrowDownToLine size={17} />
              </Button>
              <p>
                <Check size={12} />
                Tus selecciones se guardan en este navegador
              </p>
            </div>
          </aside>
          <main className="preview-main">
            <div className="preview-heading">
              <div>
                <div className="eyebrow">
                  <span className="live-dot" /> VISTA PREVIA EN VIVO
                </div>
                <h2>De referencias a realidad.</h2>
                <p>Tu combinación, aplicada a componentes reales.</p>
              </div>
              <Tip
                label={
                  focusMode ? "Mostrar configuración" : "Ampliar vista previa"
                }
              >
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={
                    focusMode ? "Mostrar configuración" : "Ampliar vista previa"
                  }
                  onClick={() => setFocusMode(!focusMode)}
                >
                  {focusMode ? <PanelLeft /> : <Maximize2 />}
                </Button>
              </Tip>
            </div>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="workspace-tabs"
            >
              <div className="preview-toolbar">
                <TabsList className="view-tabs">
                  <TabsTrigger value="components">
                    <LayoutGrid size={14} />
                    Componentes
                  </TabsTrigger>
                  <TabsTrigger value="markdown">
                    <Code2 size={15} />
                    DESIGN.md
                  </TabsTrigger>
                </TabsList>
                <div className="preview-meta">
                  <PaletteModeIcon mode={design.palette.mode} />
                  {design.palette.mode === "dark" ? "Dark mode" : "Light mode"}
                  <span className="meta-divider">/</span>
                  <span>shadcn/ui</span>
                </div>
              </div>
              <TabsContent value="components" className="gallery-tab">
                <Gallery design={design} notify={notify} />
                <div className="preview-footer">
                  <span>
                    <span className="live-dot" />
                    Todos los componentes comparten tu sistema
                  </span>
                  <span>Diseñado para combinar.</span>
                </div>
              </TabsContent>
              <TabsContent value="markdown" className="markdown-tab">
                <div className="markdown-toolbar">
                  <span>
                    <FileCode2 size={15} />
                    DESIGN.md
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={codeLoading || !!exportError || !markdown}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(markdown);
                        notify("DESIGN.md copiado");
                      } catch {
                        notify(
                          "No se pudo copiar. Usa Exportar para descargarlo.",
                        );
                      }
                    }}
                  >
                    <Copy size={14} />
                    Copiar
                  </Button>
                </div>
                {codeLoading ? (
                  <div className="code-loading">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                    <p>Preparando las siete secciones…</p>
                  </div>
                ) : exportError ? (
                  <p role="alert" className="export-error">
                    {exportError}
                  </p>
                ) : (
                  <pre
                    tabIndex={0}
                    aria-label="Contenido del archivo DESIGN.md"
                  >
                    {markdown}
                  </pre>
                )}
              </TabsContent>
            </Tabs>
          </main>
        </div>
        {toast && (
          <div className="toast" role="status">
            <span>
              <Check size={15} />
            </span>
            {toast}
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={() => setToast("")}
              aria-label="Cerrar notificación"
            >
              <X size={14} />
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
export default App;
