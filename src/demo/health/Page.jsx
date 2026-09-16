import { useState } from "react";
import {
  Activity,
  Apple,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  ClipboardPlus,
  Clock3,
  Dumbbell,
  FileHeart,
  Flame,
  HeartPulse,
  Home,
  LockKeyhole,
  Menu,
  NotebookPen,
  Plus,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  Utensils,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Action, DemoShell, Modal } from "../shared";
import { useSaved } from "../utils";
import "./theme.css";
import "./page.css";

const navItems = [
  { id: "hoy", label: "Hoy", icon: Home },
  { id: "comidas", label: "Comidas", icon: Utensils },
  { id: "actividad", label: "Actividad", icon: Activity },
  { id: "progreso", label: "Progreso", icon: BarChart3 },
  { id: "salud", label: "Salud", icon: FileHeart },
  { id: "planes", label: "Planes", icon: Sparkles },
];

const initialMeals = [
  { id: 1, type: "Desayuno", name: "Avena, banana y almendras", calories: 420, time: "08:10" },
  { id: 2, type: "Almuerzo", name: "Pollo, arroz y vegetales", calories: 610, time: "13:05" },
  { id: 3, type: "Merienda", name: "Yogur con frutos rojos", calories: 210, time: "16:20" },
];

const initialActivities = [
  { id: 1, type: "Caminata rápida", minutes: 38, calories: 214, time: "07:15" },
  { id: 2, type: "Fuerza — tren superior", minutes: 32, calories: 196, time: "18:40" },
];

const initialNotes = [
  { id: 1, title: "Control anual", detail: "Dra. Valeria Rojas · Medicina general", date: "18 sep", kind: "Cita" },
  { id: 2, title: "Recordar: ayuno de 8 horas", detail: "Antes del análisis de sangre", date: "22 sep", kind: "Nota" },
];

const weekBars = [
  { day: "L", value: 72 }, { day: "M", value: 86 }, { day: "X", value: 58 },
  { day: "J", value: 94 }, { day: "V", value: 64 }, { day: "S", value: 44 },
  { day: "D", value: 78 },
];

const calorieTrend = [1680, 1710, 1640, 1760, 1690, 1730, 1660];
const weightTrend = [78.4, 78.1, 77.9, 77.6, 77.4, 77.2, 76.9];

function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="health-section-head">
      <div>
        <p className="health-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}

function MiniBars({ values = weekBars, active = 6 }) {
  return (
    <div className="health-mini-bars" aria-label="Actividad de los últimos siete días">
      {values.map((item, index) => (
        <div className="health-mini-bar" key={`${item.day}-${index}`}>
          <div><span className={index === active ? "is-active" : ""} style={{ height: `${item.value}%` }} /></div>
          <small>{item.day}</small>
        </div>
      ))}
    </div>
  );
}

function Sparkline({ values, label, suffix = "" }) {
  const width = 560;
  const height = 148;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values.map((value, index) => {
    const x = 12 + (index * (width - 24)) / (values.length - 1);
    const y = 12 + ((max - value) * (height - 30)) / Math.max(max - min, 1);
    return `${x},${y}`;
  }).join(" ");
  return (
    <div className="health-sparkline">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
        <line x1="12" y1="126" x2="548" y2="126" />
        <line x1="12" y1="69" x2="548" y2="69" />
        <polyline points={points} />
        {points.split(" ").map((point, index) => {
          const [cx, cy] = point.split(",");
          return <circle key={index} cx={cx} cy={cy} r={index === values.length - 1 ? 5 : 3} />;
        })}
      </svg>
      <div className="health-chart-axis"><span>9 sep</span><span>Hoy</span></div>
      {suffix && <span className="sr-only">Valores en {suffix}</span>}
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, detail, tone = "plain" }) {
  return (
    <article className={`health-metric health-tone-${tone}`}>
      <span className="health-metric-icon"><Icon size={18} /></span>
      <div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div>
    </article>
  );
}

function HealthPage() {
  const [view, setView] = useState("hoy");
  const [mobileNav, setMobileNav] = useState(false);
  const [mealOpen, setMealOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);
  const [goalOpen, setGoalOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [meals, setMeals] = useSaved("demo-health-meals", initialMeals);
  const [activities, setActivities] = useSaved("demo-health-activities", initialActivities);
  const [notes, setNotes] = useSaved("demo-health-notes", initialNotes);
  const [goal, setGoal] = useSaved("demo-health-goal", { objective: "Pérdida gradual", calories: 1950 });
  const [profile, setProfile] = useSaved("demo-health-profile", { name: "Alex", email: "alex@ejemplo.com", units: "Métrico" });
  const consumed = meals.reduce((sum, meal) => sum + Number(meal.calories), 0);
  const burned = activities.reduce((sum, item) => sum + Number(item.calories), 0);
  const remaining = Math.max(goal.calories - consumed, 0);
  const caloriePercent = Math.min((consumed / goal.calories) * 100, 100);
  const notify = (message) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback(""), 3200);
  };
  const go = (id) => {
    setView(id);
    setMobileNav(false);
    document.querySelector("#demo-main")?.scrollTo?.({ top: 0 });
  };
  const addMeal = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = {
      id: Date.now(),
      type: data.get("type"),
      name: data.get("name").trim(),
      calories: Number(data.get("calories")),
      time: "Ahora",
    };
    if (!item.name || item.calories < 1) return;
    setMeals((current) => [...current, item]);
    setMealOpen(false);
    notify(`${item.name} se añadió a ${item.type.toLowerCase()}.`);
  };
  const addActivity = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = {
      id: Date.now(),
      type: data.get("type").trim(),
      minutes: Number(data.get("minutes")),
      calories: Number(data.get("calories")),
      time: "Ahora",
    };
    if (!item.type || item.minutes < 1) return;
    setActivities((current) => [...current, item]);
    setActivityOpen(false);
    notify(`${item.type} quedó registrada.`);
  };
  const viewLabel = navItems.find((item) => item.id === view)?.label;
  const commonAction = (
    <Action onClick={() => view === "actividad" ? setActivityOpen(true) : setMealOpen(true)}>
      <Plus size={17} /> {view === "actividad" ? "Registrar actividad" : "Registrar comida"}
    </Action>
  );

  return (
    <DemoShell type="health" title="Pulso — Salud y progreso en contexto">
      <div className="health-app">
        <aside className={mobileNav ? "health-sidebar is-open" : "health-sidebar"}>
          <div className="health-brand"><HeartPulse size={23} /><span>pulso<b>.</b></span></div>
          <button className="health-close-nav" aria-label="Cerrar menú" onClick={() => setMobileNav(false)}><X size={20} /></button>
          <nav aria-label="Secciones de Pulso">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => go(id)} aria-current={view === id ? "page" : undefined}>
                <Icon size={19} /><span>{label}</span>
                {id === "planes" && <small>PRO</small>}
              </button>
            ))}
          </nav>
          <div className="health-sidebar-bottom">
            <button className="health-profile-link" onClick={() => setProfileOpen(true)}>
              <span className="health-avatar">{profile.name.slice(0, 1).toUpperCase()}</span>
              <span><strong>{profile.name}</strong><small>Ver perfil</small></span>
              <ChevronRight size={16} />
            </button>
            <p><ShieldCheck size={15} /> Tus datos se guardan solo en este navegador.</p>
          </div>
        </aside>

        {mobileNav && <button className="health-nav-backdrop" aria-label="Cerrar menú" onClick={() => setMobileNav(false)} />}

        <main id="demo-main" className="health-main">
          <header className="health-topbar">
            <button className="health-menu" aria-label="Abrir menú" onClick={() => setMobileNav(true)}><Menu size={21} /></button>
            <div><span>{viewLabel}</span><small>Martes, 15 de septiembre</small></div>
            <div className="health-top-actions">
              <span className="health-sync"><span /> Última actualización 08:42</span>
              <button aria-label="Notificaciones"><Bell size={19} /><i /></button>
              <button className="health-avatar" aria-label="Abrir perfil" onClick={() => setProfileOpen(true)}>{profile.name.slice(0, 1).toUpperCase()}</button>
            </div>
          </header>

          <div className="health-content">
            {feedback && <div className="health-feedback" role="status"><Check size={17} />{feedback}</div>}
            {view === "hoy" && (
              <>
                <SectionHeader eyebrow="Resumen diario" title={`Hola, ${profile.name}`} description="Tu día va en buen camino. Aquí tienes lo que importa ahora." action={commonAction} />
                <section className="health-today-grid" aria-label="Estado de hoy">
                  <article className="health-calorie-card">
                    <div className="health-card-kicker"><Target size={16} /> Objetivo de hoy <button onClick={() => setGoalOpen(true)}>Ajustar</button></div>
                    <div className="health-calorie-main">
                      <div className="health-ring" style={{ "--progress": `${caloriePercent * 3.6}deg` }}>
                        <div><strong>{remaining.toLocaleString("es")}</strong><span>kcal restantes</span></div>
                      </div>
                      <div className="health-calorie-copy">
                        <span>{goal.objective}</span>
                        <h2>{consumed.toLocaleString("es")} <small>/ {goal.calories.toLocaleString("es")} kcal</small></h2>
                        <p>Has completado {Math.round(caloriePercent)}% de tu meta diaria.</p>
                        <div className="health-calorie-legend"><span><i />Consumidas</span><span><i />Disponibles</span></div>
                      </div>
                    </div>
                  </article>
                  <div className="health-metric-stack">
                    <MetricCard icon={Flame} label="Actividad" value={`${burned} kcal`} detail={`${activities.reduce((s, a) => s + a.minutes, 0)} min activos`} tone="red" />
                    <MetricCard icon={Scale} label="Peso actual" value="76,9 kg" detail="−0,3 kg esta semana" tone="green" />
                    <MetricCard icon={Activity} label="Pasos" value="7.842" detail="78% de 10.000" tone="blue" />
                  </div>
                </section>

                <section className="health-quick-section">
                  <div className="health-subhead"><div><p className="health-eyebrow">Accesos rápidos</p><h2>¿Qué quieres registrar?</h2></div></div>
                  <div className="health-quick-grid">
                    <button onClick={() => setMealOpen(true)}><span><Apple size={20} /></span><strong>Comida</strong><small>Calorías y macros</small><Plus size={18} /></button>
                    <button onClick={() => setActivityOpen(true)}><span><Dumbbell size={20} /></span><strong>Actividad</strong><small>Tiempo y energía</small><Plus size={18} /></button>
                    <button onClick={() => notify("Peso actualizado a 76,9 kg.")}><span><Scale size={20} /></span><strong>Peso</strong><small>Último: 76,9 kg</small><Plus size={18} /></button>
                    <button onClick={() => setNoteOpen(true)}><span><NotebookPen size={20} /></span><strong>Nota de salud</strong><small>Síntomas o recordatorio</small><Plus size={18} /></button>
                  </div>
                </section>

                <section className="health-dashboard-grid">
                  <article className="health-panel health-meals-panel">
                    <div className="health-panel-head"><div><p className="health-eyebrow">Hoy</p><h2>Comidas</h2></div><button onClick={() => go("comidas")}>Ver todas <ArrowRight size={15} /></button></div>
                    <div className="health-log-list">
                      {meals.slice(-3).map((meal) => <div className="health-log-row" key={meal.id}><span className="health-food-icon"><Utensils size={17} /></span><div><strong>{meal.name}</strong><small>{meal.type} · {meal.time}</small></div><b>{meal.calories} kcal</b></div>)}
                    </div>
                  </article>
                  <article className="health-panel health-week-panel">
                    <div className="health-panel-head"><div><p className="health-eyebrow">Últimos 7 días</p><h2>Constancia</h2></div><span className="health-positive"><ArrowUpRight size={15} /> 12%</span></div>
                    <MiniBars />
                    <p className="health-panel-note">Cumpliste tu meta 5 de 7 días. Los valores son estimaciones basadas en tus registros.</p>
                  </article>
                </section>

                <section className="health-plan-banner">
                  <div className="health-plan-mark"><Sparkles size={24} /></div>
                  <div><p className="health-eyebrow">Pulso Pro</p><h2>Un plan que se adapta a tu ritmo</h2><p>Ideas de alimentación y rutinas semanales según tu objetivo y tus registros.</p></div>
                  <Action onClick={() => setPaywallOpen(true)}>Explorar planes <ArrowRight size={16} /></Action>
                </section>
              </>
            )}

            {view === "comidas" && (
              <>
                <SectionHeader eyebrow="Registro nutricional" title="Comidas" description="Revisa tu ingesta del día y registra alimentos con pocos datos." action={commonAction} />
                <section className="health-food-summary">
                  <article><span>Consumidas</span><strong>{consumed.toLocaleString("es")} kcal</strong><small>de {goal.calories.toLocaleString("es")} kcal</small></article>
                  <article><span>Proteína</span><strong>86 g</strong><small>Meta: 120 g</small><i style={{ width: "72%" }} /></article>
                  <article><span>Carbohidratos</span><strong>142 g</strong><small>Meta: 210 g</small><i style={{ width: "68%" }} /></article>
                  <article><span>Grasas</span><strong>48 g</strong><small>Meta: 65 g</small><i style={{ width: "74%" }} /></article>
                </section>
                <section className="health-panel health-full-panel">
                  <div className="health-panel-head"><div><p className="health-eyebrow">Martes 15</p><h2>Registro del día</h2></div><button onClick={() => setGoalOpen(true)}><Target size={15} /> {goal.objective}</button></div>
                  <div className="health-meal-groups">
                    {["Desayuno", "Almuerzo", "Merienda", "Cena"].map((group) => {
                      const items = meals.filter((meal) => meal.type === group);
                      return <article key={group}><div className="health-meal-title"><div><span><Utensils size={16} /></span><strong>{group}</strong></div><b>{items.reduce((s, i) => s + i.calories, 0)} kcal</b></div>{items.length ? items.map((meal) => <div className="health-food-row" key={meal.id}><span>{meal.time}</span><strong>{meal.name}</strong><b>{meal.calories} kcal</b></div>) : <button className="health-empty-add" onClick={() => setMealOpen(true)}><Plus size={15} /> Registrar {group.toLowerCase()}</button>}</article>;
                    })}
                  </div>
                </section>
              </>
            )}

            {view === "actividad" && (
              <>
                <SectionHeader eyebrow="Movimiento" title="Actividad" description="Tiempo, intensidad y energía estimada en un solo lugar." action={commonAction} />
                <section className="health-activity-hero">
                  <article><div className="health-panel-head"><div><p className="health-eyebrow">Semana actual</p><h2>268 minutos activos</h2></div><span className="health-positive"><ArrowUpRight size={15} /> 18%</span></div><MiniBars values={weekBars.map((item) => ({ ...item, value: Math.max(item.value - 8, 20) }))} /></article>
                  <div className="health-activity-totals"><MetricCard icon={Clock3} label="Tiempo" value="4 h 28 min" detail="Meta: 5 horas" /><MetricCard icon={Flame} label="Energía" value={`${burned} kcal`} detail="Estimación del dispositivo" /><MetricCard icon={Target} label="Sesiones" value={`${activities.length}`} detail="Esta semana" /></div>
                </section>
                <section className="health-panel health-full-panel">
                  <div className="health-panel-head"><div><p className="health-eyebrow">Historial</p><h2>Actividades recientes</h2></div><span className="health-source">Fuente: registro manual</span></div>
                  <div className="health-activity-list">
                    {activities.slice().reverse().map((item) => <article key={item.id}><span><Dumbbell size={19} /></span><div><strong>{item.type}</strong><small>Hoy · {item.time}</small></div><p><b>{item.minutes} min</b><small>{item.calories} kcal estimadas</small></p><button aria-label={`Ver ${item.type}`}><ChevronRight size={18} /></button></article>)}
                  </div>
                </section>
              </>
            )}

            {view === "progreso" && (
              <>
                <SectionHeader eyebrow="Tendencias" title="Tu progreso" description="Compara periodos y entiende qué está cambiando, sin perder el contexto." action={<Action secondary onClick={() => setGoalOpen(true)}><Target size={16} /> Ajustar objetivo</Action>} />
                <section className="health-progress-grid">
                  <article className="health-panel health-chart-panel"><div className="health-panel-head"><div><p className="health-eyebrow">Peso · kg</p><h2>76,9 <small>kg</small></h2></div><span className="health-positive"><TrendingDown size={15} /> −1,5 kg</span></div><Sparkline values={weightTrend} label="El peso baja gradualmente de 78,4 a 76,9 kilogramos" suffix="kg" /><p className="health-panel-note">Periodo: 9–15 sep · Fuente: registros manuales</p></article>
                  <article className="health-panel health-chart-panel"><div className="health-panel-head"><div><p className="health-eyebrow">Ingesta · kcal</p><h2>1.681 <small>promedio</small></h2></div><span className="health-neutral">Objetivo {goal.calories}</span></div><Sparkline values={calorieTrend} label="Ingesta diaria estimada entre 1.640 y 1.760 kilocalorías" suffix="kcal" /><p className="health-panel-note">Periodo: 9–15 sep · Fuente: alimentos registrados</p></article>
                </section>
                <section className="health-goal-card"><div><span className="health-goal-icon"><Target size={23} /></span><div><p className="health-eyebrow">Objetivo actual</p><h2>{goal.objective}</h2><p>Meta diaria: {goal.calories.toLocaleString("es")} kcal · Ritmo orientativo, no clínico.</p></div></div><div className="health-goal-progress"><span><b>76,9 kg</b><small>Actual</small></span><div><i /></div><span><b>74 kg</b><small>Meta</small></span></div><Action secondary onClick={() => setGoalOpen(true)}>Editar meta</Action></section>
              </>
            )}

            {view === "salud" && (
              <>
                <SectionHeader eyebrow="Registros personales" title="Salud" description="Organiza citas, notas y resultados para consultarlos a lo largo del tiempo." action={<Action onClick={() => setNoteOpen(true)}><Plus size={17} /> Añadir registro</Action>} />
                <div className="health-safety-note"><ShieldCheck size={18} /><p><strong>Información personal.</strong> Esta demo no ofrece diagnóstico ni reemplaza la orientación de un profesional de la salud.</p></div>
                <section className="health-health-grid">
                  <article className="health-panel health-calendar-panel"><div className="health-panel-head"><div><p className="health-eyebrow">Calendario</p><h2>Septiembre 2026</h2></div><button aria-label="Siguiente mes"><ChevronRight size={18} /></button></div><div className="health-calendar"><div className="health-calendar-labels">{["L","M","X","J","V","S","D"].map((day) => <span key={day}>{day}</span>)}</div><div className="health-calendar-days">{Array.from({ length: 35 }, (_, index) => { const day = index - 1; return <button key={index} className={`${day === 15 ? "is-today" : ""} ${[18,22].includes(day) ? "has-event" : ""}`} disabled={day < 1 || day > 30}>{day > 0 && day <= 30 ? day : ""}</button>; })}</div></div></article>
                  <article className="health-panel health-records-panel"><div className="health-panel-head"><div><p className="health-eyebrow">Próximos</p><h2>Citas y notas</h2></div></div><div className="health-record-list">{notes.slice().reverse().map((note) => <article key={note.id}><span>{note.date}</span><div><small>{note.kind}</small><strong>{note.title}</strong><p>{note.detail}</p></div></article>)}</div><button className="health-text-action" onClick={() => setNoteOpen(true)}><Plus size={15} /> Añadir nota o cita</button></article>
                </section>
                <section className="health-panel health-labs-panel"><div className="health-panel-head"><div><p className="health-eyebrow">Resultados de exámenes</p><h2>Comparación en el tiempo</h2></div><button onClick={() => notify("En esta demo, la carga de archivos está desactivada.")}><ClipboardPlus size={16} /> Añadir resultado</button></div><div className="health-lab-table" role="table" aria-label="Resultados de exámenes"><div role="row" className="health-lab-head"><span role="columnheader">Indicador</span><span role="columnheader">12 mar</span><span role="columnheader">8 sep</span><span role="columnheader">Rango informado</span><span role="columnheader">Cambio</span></div>{[
                  ["Glucosa", "94 mg/dL", "91 mg/dL", "70–99 mg/dL", "−3"],
                  ["Colesterol total", "192 mg/dL", "181 mg/dL", "< 200 mg/dL", "−11"],
                  ["Hemoglobina", "14,1 g/dL", "14,3 g/dL", "12–16 g/dL", "+0,2"],
                ].map((row) => <div role="row" key={row[0]}>{row.map((cell, i) => <span role="cell" key={cell} data-label={["Indicador","12 mar","8 sep","Rango","Cambio"][i]} className={i === 4 ? "health-positive" : ""}>{cell}</span>)}</div>)}</div><p className="health-panel-note">Fuente: valores cargados manualmente. Los rangos pertenecen al informe de ejemplo y pueden variar según el laboratorio.</p></section>
              </>
            )}

            {view === "planes" && (
              <>
                <SectionHeader eyebrow="Pulso Pro" title="Planes para tu objetivo" description="Convierte tus metas en una semana clara de comidas y movimiento." />
                <section className="health-plan-intro"><div><span><Sparkles size={24} /></span><p className="health-eyebrow">Recomendación general</p><h2>Un plan flexible para perder peso gradualmente</h2><p>Basado en tu objetivo actual y en la constancia de tus registros. Ajusta cada sugerencia a tus preferencias.</p><div><span><Check size={15} /> 7 días de comidas</span><span><Check size={15} /> 4 rutinas progresivas</span><span><Check size={15} /> Lista semanal</span></div></div><Action onClick={() => setPaywallOpen(true)}>Desbloquear plan <ArrowRight size={16} /></Action></section>
                <section className="health-plan-grid">{[
                  ["Alimentación", "Semana equilibrada", "Ideas para 3 comidas y 2 meriendas por día.", Apple],
                  ["Entrenamiento", "Fuerza para empezar", "Cuatro sesiones de 30 minutos, con progresión.", Dumbbell],
                  ["Hábitos", "Constancia sin presión", "Recordatorios y revisiones semanales de tus metas.", HeartPulse],
                ].map(([label, title, copy, Icon]) => <article key={title}><span><Icon size={21} /></span><small>{label}</small><h2>{title}</h2><p>{copy}</p><button onClick={() => setPaywallOpen(true)}><LockKeyhole size={15} /> Vista previa <ChevronRight size={16} /></button></article>)}</section>
                <p className="health-plan-disclaimer">Las recomendaciones son de bienestar general. Si tienes una condición médica o necesidades específicas, consulta a un profesional.</p>
              </>
            )}
          </div>
        </main>

        <nav className="health-mobile-nav" aria-label="Navegación móvil">
          {navItems.slice(0, 5).map(({ id, label, icon: Icon }) => <button key={id} onClick={() => go(id)} aria-current={view === id ? "page" : undefined}><Icon size={19} /><span>{label}</span></button>)}
        </nav>
      </div>

      <Modal type="health" open={mealOpen} onOpenChange={setMealOpen} title="Registrar comida" description="Añade solo lo necesario. Podrás corregir el registro después.">
        <form onSubmit={addMeal}>
          <label className="demo-field">Momento<select name="type" defaultValue="Cena"><option>Desayuno</option><option>Almuerzo</option><option>Merienda</option><option>Cena</option></select></label>
          <label className="demo-field">Comida o plato<Input name="name" placeholder="Ej. Sopa de vegetales" maxLength={60} required /></label>
          <label className="demo-field">Calorías estimadas<Input name="calories" type="number" min="1" max="4000" inputMode="numeric" placeholder="350" required /></label>
          <p className="demo-muted">Una estimación es suficiente para observar tendencias; no se presenta como una medición exacta.</p>
          <Action type="submit">Guardar comida <Check size={16} /></Action>
        </form>
      </Modal>

      <Modal type="health" open={activityOpen} onOpenChange={setActivityOpen} title="Registrar actividad" description="Guarda el tipo de actividad, la duración y una estimación de energía.">
        <form onSubmit={addActivity}>
          <label className="demo-field">Actividad<Input name="type" placeholder="Ej. Bicicleta" maxLength={50} required /></label>
          <div className="health-form-grid"><label className="demo-field">Duración (min)<Input name="minutes" type="number" min="1" max="600" placeholder="30" required /></label><label className="demo-field">Energía (kcal)<Input name="calories" type="number" min="0" max="4000" placeholder="180" required /></label></div>
          <p className="demo-muted">La energía es una estimación y puede variar según la fuente de medición.</p>
          <Action type="submit">Guardar actividad <Check size={16} /></Action>
        </form>
      </Modal>

      <Modal type="health" open={goalOpen} onOpenChange={setGoalOpen} title="Ajustar objetivo" description="La meta orienta el seguimiento diario y puede cambiar cuando cambie tu objetivo.">
        <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); setGoal({ objective: data.get("objective"), calories: Number(data.get("calories")) }); setGoalOpen(false); notify("Tu objetivo diario fue actualizado."); }}>
          <label className="demo-field">Objetivo actual<select name="objective" defaultValue={goal.objective}><option>Pérdida gradual</option><option>Mantener peso</option><option>Ganar fuerza</option></select></label>
          <label className="demo-field">Meta diaria (kcal)<Input name="calories" type="number" min="1200" max="5000" defaultValue={goal.calories} required /></label>
          <p className="demo-muted">Esta meta es personal y orientativa; no sustituye una indicación profesional.</p>
          <Action type="submit">Guardar objetivo <Check size={16} /></Action>
        </form>
      </Modal>

      <Modal type="health" open={noteOpen} onOpenChange={setNoteOpen} title="Añadir registro de salud" description="Organiza una cita o una nota personal para encontrarla después.">
        <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const title = data.get("title").trim(); if (!title) return; setNotes((current) => [...current, { id: Date.now(), kind: data.get("kind"), title, detail: data.get("detail").trim() || "Sin detalles", date: data.get("date") || "Sin fecha" }]); setNoteOpen(false); notify("El registro de salud fue añadido."); }}>
          <label className="demo-field">Tipo<select name="kind"><option>Nota</option><option>Cita</option><option>Examen</option></select></label>
          <label className="demo-field">Título<Input name="title" placeholder="Ej. Control con cardiología" maxLength={70} required /></label>
          <div className="health-form-grid"><label className="demo-field">Fecha<Input name="date" placeholder="24 sep" maxLength={12} /></label><label className="demo-field">Detalle<Input name="detail" placeholder="Lugar o recordatorio" maxLength={80} /></label></div>
          <Action type="submit">Guardar registro <Check size={16} /></Action>
        </form>
      </Modal>

      <Modal type="health" open={profileOpen} onOpenChange={setProfileOpen} title="Tu perfil" description="Tus preferencias se guardan únicamente en este navegador.">
        <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); setProfile({ name: data.get("name").trim(), email: data.get("email").trim(), units: data.get("units") }); setProfileOpen(false); notify("Tu perfil fue actualizado."); }}>
          <div className="health-profile-hero"><span className="health-avatar">{profile.name.slice(0, 1).toUpperCase()}</span><div><strong>{profile.name}</strong><small>Cuenta de demostración</small></div></div>
          <label className="demo-field">Nombre<Input name="name" defaultValue={profile.name} maxLength={24} required /></label>
          <label className="demo-field">Correo<Input name="email" type="email" defaultValue={profile.email} required /></label>
          <label className="demo-field">Unidades<select name="units" defaultValue={profile.units}><option>Métrico</option><option>Imperial</option></select></label>
          <Action type="submit">Guardar perfil <Check size={16} /></Action>
        </form>
      </Modal>

      <Modal type="health" open={paywallOpen} onOpenChange={setPaywallOpen} title="Haz que tu plan avance contigo" description="Pulso Pro reúne alimentación, ejercicio y revisiones semanales en una sola guía.">
        <div className="health-paywall">
          <span className="health-paywall-icon"><Sparkles size={27} /></span>
          <div className="health-paywall-price"><strong>$8</strong><span>USD / mes</span></div>
          <ul><li><Check size={16} /> Plan semanal de alimentación</li><li><Check size={16} /> Rutinas progresivas</li><li><Check size={16} /> Ajustes según tu progreso</li><li><Check size={16} /> Cancela cuando quieras</li></ul>
          <Action onClick={() => { setPaywallOpen(false); notify("Recorrido de pago completado; no se realizó ningún cobro."); }}>Probar Pulso Pro <ArrowRight size={16} /></Action>
          <p>No se realizará ningún cobro. Esta experiencia es solo una demostración.</p>
        </div>
      </Modal>
    </DemoShell>
  );
}

export default HealthPage;
