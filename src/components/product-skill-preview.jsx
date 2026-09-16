import { useState } from "react";
import {
  ArrowRight,
  Search,
  Play,
  ShoppingBag,
  Check,
  Plus,
  Heart,
  Star,
  MoreHorizontal,
  ChevronRight,
  Pause,
  SkipForward,
  Volume2,
  Maximize2,
  Send,
  Paperclip,
  Phone,
  Video,
  Mic,
  MapPin,
  CreditCard,
  ShieldCheck,
  User,
  Bell,
  Utensils,
  BookOpen,
  Users,
  Newspaper,
  Music,
  Car,
  Wallet,
  LayoutGrid,
  MessageCircle,
  Activity,
  Image,
  BedDouble,
  Plane,
  CheckCircle2,
  Lock,
} from "lucide-react";
import "./product-skill-preview.css";

const icons = {
  play: Play,
  film: Play,
  bag: ShoppingBag,
  food: Utensils,
  book: BookOpen,
  users: Users,
  news: Newspaper,
  music: Music,
  car: Car,
  wallet: Wallet,
  layout: LayoutGrid,
  message: MessageCircle,
  heart: Heart,
  activity: Activity,
  image: Image,
  stay: BedDouble,
  plane: Plane,
};
function Icon({ name, ...props }) {
  const Component = icons[name] ?? LayoutGrid;
  return <Component size={16} strokeWidth={1.5} {...props} />;
}
function Lines({ count = 2 }) {
  return (
    <div className="wf-lines" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
function Art({ kind = "image", className = "" }) {
  return (
    <div className={`wf-art wf-art--${kind} ${className}`} aria-hidden="true">
      <Icon name={kind} />
      <span />
    </div>
  );
}
function Action({ children, secondary = false, icon = true }) {
  return (
    <span className={`wf-action ${secondary ? "wf-action--secondary" : ""}`}>
      {children}
      {icon && <ArrowRight size={12} />}
    </span>
  );
}
function Field({ children, icon = false }) {
  return (
    <div className="wf-field">
      {icon && <Search size={13} />}
      <span>{children}</span>
    </div>
  );
}
function Avatar({ small = false }) {
  return (
    <span className={`wf-avatar ${small ? "wf-avatar--small" : ""}`}>
      <User size={small ? 11 : 16} />
    </span>
  );
}
function Progress({ value = 65 }) {
  return (
    <div className="wf-progress">
      <i style={{ width: `${value}%` }} />
    </div>
  );
}
function Chips({ items }) {
  return (
    <div className="wf-chips">
      {items.map((item, i) => (
        <span key={item} data-active={i === 0}>
          {item}
        </span>
      ))}
    </div>
  );
}
function Card({ art, index, price, progress, detail, seller }) {
  return (
    <div className="wf-card">
      <Art kind={art} />
      <div className="wf-card-content">
        <Lines count={1} />
        {detail && <small>{detail}</small>}
        {price && (
          <div className="wf-between">
            <b>${[89, 64, 120, 48, 95, 72][index % 6]}</b>
            <span className="wf-icon-button">
              <Plus size={12} />
            </span>
          </div>
        )}
        {seller && (
          <div className="wf-inline">
            <Avatar small />
            <small>
              4,9 <Star size={9} />
            </small>
          </div>
        )}
        {progress && <Progress value={72 - index * 13} />}
      </div>
    </div>
  );
}
function ListRows({ count = 3, art, action, numbered = false }) {
  return (
    <div className="wf-rows">
      {Array.from({ length: count }, (_, i) => (
        <div className="wf-row" key={i}>
          {numbered ? (
            <small>{String(i + 1).padStart(2, "0")}</small>
          ) : art ? (
            <Art kind={art} />
          ) : (
            <Avatar />
          )}
          <div className="wf-grow">
            <Lines />
            {art && (
              <small>
                {i + 1} · {24 + i * 3} min
              </small>
            )}
          </div>
          {action ? (
            <span className="wf-tag">{action}</span>
          ) : (
            <MoreHorizontal size={13} />
          )}
        </div>
      ))}
    </div>
  );
}
function Payment({ node }) {
  return (
    <div className="wf-stack">
      <div className="wf-inline">
        <CreditCard size={17} />
        <span className="wf-tag">Tarjeta</span>
        <span className="wf-tag">Wallet</span>
      </div>
      <Field>Número de tarjeta</Field>
      <div className="wf-two">
        <Field>MM / AA</Field>
        <Field>CVC</Field>
      </div>
      <Action>{node.action}</Action>
      <small className="wf-inline">
        <Lock size={10} /> Pago seguro
      </small>
    </div>
  );
}

const renderers = {
  hero: ({ node }) => (
    <div className="wf-hero">
      <Art kind={node.art} />
      <div className="wf-hero-copy">
        <small>{node.tag}</small>
        <h4>{node.title}</h4>
        <Lines />
        <div className="wf-inline">
          <Action>
            <Play size={12} />
            {node.action}
          </Action>
          {node.secondary && (
            <Action secondary>
              <Plus size={12} />
              {node.secondary}
            </Action>
          )}
        </div>
      </div>
      <div className="wf-dots">
        <i />
        <i />
        <i />
      </div>
    </div>
  ),
  banner: ({ node }) => (
    <div className="wf-banner">
      <div>
        <h4>{node.title}</h4>
        {node.detail && <small>{node.detail}</small>}
        <Lines count={1} />
        {node.action && <Action>{node.action}</Action>}
      </div>
      <Art kind={node.art} />
    </div>
  ),
  rail: ({ node }) => (
    <div className="wf-rail" style={{ "--rail-count": node.count ?? 4 }}>
      {Array.from({ length: node.count ?? 4 }, (_, i) => (
        <Card key={i} {...node} index={i} />
      ))}
    </div>
  ),
  grid: ({ node }) => (
    <div className="wf-grid">
      {Array.from({ length: node.count ?? 6 }, (_, i) => (
        <Card key={i} {...node} index={i} />
      ))}
    </div>
  ),
  search: ({ node }) => <Field icon>{node.title}</Field>,
  chips: ({ node }) => <Chips items={node.items} />,
  menu: ({ node }) => (
    <div className="wf-menu">
      {node.items.map((item, i) => (
        <div key={item} data-active={i === 0}>
          <LayoutGrid size={12} />
          <span>{item}</span>
          {i === 0 && <i />}
        </div>
      ))}
    </div>
  ),
  filters: ({ node }) => (
    <div className="wf-filters">
      {node.items.map((item, i) => (
        <div key={item}>
          <div className="wf-between">
            <b>{item}</b>
            <Plus size={11} />
          </div>
          {i < 2 && (
            <>
              <div className="wf-filter-line">
                <span />
                <Lines count={1} />
              </div>
              <div className="wf-filter-line">
                <span />
                <Lines count={1} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  ),
  detail: ({ node }) => (
    <div className="wf-detail">
      <div>
        <Art kind={node.art} />
        <div className="wf-thumbs">
          {[0, 1, 2].map((i) => (
            <Art key={i} kind={node.art} />
          ))}
        </div>
      </div>
      <div className="wf-stack">
        <small>COLECCIÓN ESENCIAL</small>
        <h4>{node.title}</h4>
        <div className="wf-inline">
          <Star size={12} />
          <small>4,8 · 128 reseñas</small>
        </div>
        <strong className="wf-price">{node.price}</strong>
        <Lines count={3} />
        <small>Color</small>
        <div className="wf-swatches">
          <i />
          <i />
          <i />
        </div>
        <small>Talla</small>
        <Chips items={node.options} />
        <Action>{node.action}</Action>
        <small className="wf-inline">
          <ShieldCheck size={12} /> Envío y devoluciones
        </small>
      </div>
    </div>
  ),
  steps: ({ node }) => (
    <div className="wf-steps">
      {node.items.map((item, i) => (
        <div key={item}>
          <span>{i === 0 ? <Check size={10} /> : i + 1}</span>
          <small>{item}</small>
          {i < node.items.length - 1 && <i />}
        </div>
      ))}
    </div>
  ),
  express: ({ node }) => (
    <div className="wf-express">
      <Action>
        <Wallet size={13} />
        {node.action}
      </Action>
      <div className="wf-divider">
        <span>o continúa como invitado</span>
      </div>
    </div>
  ),
  form: ({ node }) => (
    <div className="wf-form">
      {node.fields.map((field, i) => (
        <div className={i === 0 ? "wf-full" : ""} key={field}>
          <small>{field}</small>
          <Field>
            {["Email", "Dirección", "Nombre"].includes(field) ? "···" : "—"}
          </Field>
        </div>
      ))}
    </div>
  ),
  payment: Payment,
  cart: ({ node }) => (
    <div className="wf-stack">
      {Array.from({ length: node.count ?? 2 }, (_, i) => (
        <div className="wf-cart-item" key={i}>
          <Art kind={node.art} />
          <div className="wf-grow">
            <Lines />
            <div className="wf-between">
              <span className="wf-quantity">−　1　+</span>
              <b>${i ? 39 : 89}</b>
            </div>
          </div>
        </div>
      ))}
      <div className="wf-rule" />
      <div className="wf-between">
        <small>Envío</small>
        <small>Incluido</small>
      </div>
      <div className="wf-between">
        <b>Total</b>
        <strong>{node.total}</strong>
      </div>
    </div>
  ),
  trust: ({ node }) => (
    <div className="wf-trust">
      <ShieldCheck size={17} />
      <small>{node.title}</small>
    </div>
  ),
  action: ({ node }) => <Action>{node.title}</Action>,
  player: ({ node }) => (
    <div className="wf-player">
      <Art kind={node.art} />
      <span className="wf-play">
        <Play size={28} />
      </span>
      <div className="wf-player-controls">
        <Progress value={62} />
        <div className="wf-between">
          <div className="wf-inline">
            <Pause size={13} />
            <SkipForward size={13} />
            <Volume2 size={13} />
            <small>24:18 / 42:00</small>
          </div>
          <Maximize2 size={12} />
        </div>
      </div>
    </div>
  ),
  next: ({ node }) => (
    <div className="wf-next">
      <Art kind={node.art} />
      <div className="wf-grow">
        <small>A CONTINUACIÓN</small>
        <b>{node.title}</b>
        <Lines count={1} />
      </div>
      <Action>{node.action}</Action>
    </div>
  ),
  episodes: ({ node }) => <ListRows count={node.count} art={node.art} />,
  location: ({ node }) => (
    <div className="wf-location">
      <MapPin size={19} />
      <div className="wf-grow">
        <b>{node.title}</b>
        <small>{node.detail}</small>
      </div>
      <ChevronRight size={12} />
    </div>
  ),
  categories: ({ node }) => (
    <div className="wf-categories">
      {node.items.map((item) => (
        <div key={item}>
          <Art kind={node.art} />
          <small>{item}</small>
        </div>
      ))}
    </div>
  ),
  menuItems: ({ node }) => (
    <div className="wf-menu-items">
      {Array.from({ length: node.count }, (_, i) => (
        <div className="wf-menu-item" key={i}>
          <div className="wf-grow">
            <Lines />
            <b>${[12, 9, 16, 8][i]}</b>
          </div>
          <Art kind={node.art} />
          <span className="wf-icon-button">
            <Plus size={12} />
          </span>
        </div>
      ))}
    </div>
  ),
  map: ({ node }) => (
    <div className="wf-map">
      <svg viewBox="0 0 420 330" aria-hidden="true">
        <path
          className="wf-map-water"
          d="M310 -20 C210 100 440 200 290 350 L450 350 L450 -20Z"
        />
        <g className="wf-map-streets">
          <path d="M-20 85L440 45M-20 190L430 150M-20 280L440 250M70 -20L125 350M180 -20L225 350M290 -20L340 350" />
          <path d="M-10 30L400 340M-40 340L430 -20" />
        </g>
        {node.route && (
          <path className="wf-map-route" d="M90 240L195 230L176 102L287 90" />
        )}
        <circle cx="90" cy="240" r="9" className="wf-map-dot" />
        <circle cx="287" cy="90" r="9" className="wf-map-dot" />
        {node.pins && (
          <>
            <circle cx="220" cy="180" r="8" className="wf-map-dot" />
            <circle cx="110" cy="90" r="8" className="wf-map-dot" />
          </>
        )}
      </svg>
      <span className="wf-map-label">
        <MapPin size={11} />
        {node.route ? "12 min" : "$120"}
      </span>
      <div className="wf-map-zoom">
        +<hr />−
      </div>
    </div>
  ),
  profile: ({ node }) => (
    <div className="wf-profile">
      <Avatar />
      <div className="wf-grow">
        <b>{node.title}</b>
        <small>{node.detail ?? "Perfil verificado"}</small>
      </div>
      {node.action && (
        <Action secondary icon={false}>
          {node.action}
        </Action>
      )}
    </div>
  ),
  timeline: ({ node }) => (
    <div className="wf-timeline">
      {node.items.map((item, i) => (
        <div key={item} data-done={i < 2}>
          <span>{i < 2 ? <Check size={10} /> : i + 1}</span>
          <small>{item}</small>
        </div>
      ))}
    </div>
  ),
  balance: ({ node }) => (
    <div className="wf-balance">
      <small>{node.title}</small>
      <strong>{node.value}</strong>
      <div className="wf-inline">
        <Action>{node.action}</Action>
        <Action secondary>Ver cuenta</Action>
      </div>
    </div>
  ),
  metrics: ({ node }) => (
    <div className="wf-metrics">
      {node.items.map((item) => (
        <div key={item}>
          <small>{item.split("|")[0]}</small>
          <strong>{item.split("|")[1]}</strong>
          <Progress value={70} />
        </div>
      ))}
    </div>
  ),
  chart: () => (
    <div className="wf-chart">
      <div className="wf-chart-axis">
        <small>100</small>
        <small>50</small>
        <small>0</small>
      </div>
      <div className="wf-chart-bars">
        {[35, 48, 32, 65, 54, 72, 57, 83, 68, 92, 75, 88].map((v, i) => (
          <div key={i}>
            <i style={{ height: `${v}%` }} />
            <i style={{ height: `${v * 0.6}%` }} />
          </div>
        ))}
      </div>
      <div className="wf-chart-labels">
        <small>Lun</small>
        <small>Mié</small>
        <small>Vie</small>
        <small>Dom</small>
      </div>
    </div>
  ),
  table: ({ node }) => (
    <div className="wf-table-wrap">
      <table className="wf-table">
        <thead>
          <tr>
            <th>
              <span className="wf-check" />
            </th>
            {node.columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {node.rows.map((r, i) => (
            <tr key={r}>
              <td>
                <span className="wf-check" />
              </td>
              <td>{r}</td>
              {node.columns.slice(1).map((c) => (
                <td key={c}>
                  {c === "Importe" ? (
                    `$${[24, 850, 64, 120, 38][i]}`
                  ) : c === "Estado" ? (
                    <span className="wf-tag">
                      {i % 2 ? "En curso" : "Completado"}
                    </span>
                  ) : (
                    <Lines count={1} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  bankCard: () => (
    <div className="wf-bank-card">
      <div className="wf-between">
        <Wallet size={19} />
        <span>•••</span>
      </div>
      <strong>••••　••••　4821</strong>
      <div className="wf-between">
        <Lines count={1} />
        <CreditCard size={22} />
      </div>
    </div>
  ),
  contacts: ({ node }) => <ListRows count={3} action={node.action} />,
  receipt: ({ node }) => (
    <div className="wf-receipt">
      {node.items.map((item) => (
        <div className="wf-between" key={item}>
          <small>{item.split("|")[0]}</small>
          <b>{item.split("|")[1]}</b>
        </div>
      ))}
      {node.action && <Action>{node.action}</Action>}
    </div>
  ),
  board: ({ node }) => (
    <div className="wf-board">
      {node.items.map((item, i) => (
        <div key={item}>
          <div className="wf-between">
            <b>{item}</b>
            <small>{3 - i}</small>
          </div>
          {Array.from({ length: 3 - i }, (_, j) => (
            <div className="wf-task-card" key={j}>
              <span className="wf-status" />
              <Lines />
              <div className="wf-between">
                <small>18 sep</small>
                <Avatar small />
              </div>
            </div>
          ))}
          <span className="wf-inline">
            <Plus size={11} />
            <small>Añadir tarea</small>
          </span>
        </div>
      ))}
    </div>
  ),
  task: ({ node }) => (
    <div className="wf-task">
      <span className="wf-tag">En curso</span>
      <h4>{node.title}</h4>
      <Lines count={3} />
      <div className="wf-file">
        <Paperclip size={15} />
        <Lines />
      </div>
      <Action>
        <CheckCircle2 size={12} />
        {node.action}
      </Action>
    </div>
  ),
  properties: ({ node }) => (
    <div className="wf-properties">
      {node.items.map((item) => (
        <div key={item}>
          <small>{item.split("|")[0]}</small>
          <span className="wf-tag">{item.split("|")[1]}</span>
        </div>
      ))}
    </div>
  ),
  checklist: ({ node }) => (
    <div className="wf-checklist">
      {node.items.map((item, i) => (
        <div key={item}>
          <span className="wf-check" data-checked={i < 2}>
            {i < 2 && <Check size={9} />}
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  ),
  calendar: ({ node }) => (
    <div
      className={`wf-calendar ${node.compact ? "wf-calendar--compact" : ""}`}
    >
      <div className="wf-calendar-head">
        {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
          <small key={i}>{d}</small>
        ))}
      </div>
      <div className="wf-days">
        {Array.from({ length: node.compact ? 14 : 28 }, (_, i) => (
          <div key={i} data-selected={i === 17}>
            <small>{i + 1}</small>
            {node.events && [2, 5, 9, 12, 17, 23].includes(i) && <i />}
          </div>
        ))}
      </div>
    </div>
  ),
  stories: () => (
    <div className="wf-stories">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i}>
          <Avatar />
          <Lines count={1} />
        </div>
      ))}
    </div>
  ),
  composer: ({ node }) => (
    <div className="wf-composer">
      <div className="wf-inline">
        <Avatar small />
        <Field>{node.title}</Field>
      </div>
      <div className="wf-between">
        <div className="wf-inline">
          <Image size={13} />
          <Paperclip size={13} />
          <Plus size={13} />
        </div>
        <span className="wf-icon-button">
          <Send size={12} />
        </span>
      </div>
    </div>
  ),
  post: ({ node }) => (
    <div className="wf-post">
      <div className="wf-inline">
        <Avatar small />
        <Lines />
        <MoreHorizontal size={13} />
      </div>
      <Lines count={node.compact ? 3 : 2} />
      {!node.compact && <Art kind={node.art} />}
      <div className="wf-between">
        <div className="wf-inline">
          <Heart size={14} />
          <MessageCircle size={14} />
          <Send size={14} />
        </div>
        <small>24</small>
      </div>
    </div>
  ),
  thread: ({ node }) => (
    <div className="wf-thread">
      {Array.from({ length: node.count }, (_, i) => (
        <div className="wf-inline" key={i}>
          <Avatar small />
          <div className="wf-grow">
            <Lines count={2} />
            <small>{i + 1} h · Responder</small>
          </div>
        </div>
      ))}
    </div>
  ),
  upload: ({ node }) => (
    <div className="wf-upload">
      <Icon name={node.art} />
      <Plus size={13} />
      <small>{node.title}</small>
    </div>
  ),
  inbox: ({ node }) => (
    <div className="wf-inbox">
      {node.items.map((item, i) => (
        <div key={item} data-active={i === 0}>
          <Avatar small />
          <div className="wf-grow">
            <b>{item}</b>
            <Lines count={1} />
          </div>
          {i < 2 && <span className="wf-unread">{i + 1}</span>}
        </div>
      ))}
    </div>
  ),
  chat: ({ node }) => (
    <div className="wf-chat">
      <small className="wf-chat-date">Hoy</small>
      {Array.from({ length: node.count }, (_, i) => (
        <div className="wf-chat-message" data-own={i % 3 === 1} key={i}>
          <Lines count={(i % 2) + 1} />
          <small>
            10:{12 + i * 2}　<Check size={9} />
          </small>
        </div>
      ))}
    </div>
  ),
  files: () => (
    <div className="wf-files">
      {[0, 1, 2].map((i) => (
        <div className="wf-file" key={i}>
          <Paperclip size={14} />
          <Lines />
        </div>
      ))}
    </div>
  ),
  call: () => (
    <div className="wf-call">
      <div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <Avatar />
            <Lines count={1} />
          </div>
        ))}
      </div>
      <div className="wf-call-controls">
        <Mic size={15} />
        <Video size={15} />
        <span>
          <Phone size={15} />
        </span>
        <MoreHorizontal size={15} />
      </div>
    </div>
  ),
  article: ({ node }) => (
    <div className={`wf-article ${node.compact ? "wf-article--compact" : ""}`}>
      {!node.compact && (
        <>
          <small>CULTURA · 6 MIN DE LECTURA</small>
          <h4>{node.title}</h4>
          <div className="wf-inline">
            <Avatar small />
            <Lines count={1} />
          </div>
          {node.art && <Art kind={node.art} />}
        </>
      )}
      <Lines count={4} />
      <Lines count={3} />
      {!node.compact && (
        <>
          <blockquote>
            <Lines count={2} />
          </blockquote>
          <Lines count={4} />
        </>
      )}
    </div>
  ),
  quiz: ({ node }) => (
    <div className="wf-quiz">
      <small>PREGUNTA 3 DE 5</small>
      <Progress value={60} />
      <h4>{node.title}</h4>
      <Lines count={2} />
      {node.items.map((item, i) => (
        <div className="wf-quiz-option" key={item}>
          <span data-checked={i === 1} />
          {item}
        </div>
      ))}
      <Action>{node.action}</Action>
    </div>
  ),
  progress: ({ node }) => (
    <div className="wf-stack">
      <div className="wf-between">
        <b>{node.title}</b>
        <small>{node.value}</small>
      </div>
      <Progress value={67} />
    </div>
  ),
  rings: () => (
    <div className="wf-rings">
      <div className="wf-ring">
        <div>
          <Activity size={23} />
          <strong>80%</strong>
        </div>
      </div>
      <div className="wf-stack">
        <b>Tu objetivo, más cerca</b>
        <Lines />
        <div className="wf-inline">
          <span className="wf-tag">35 min</span>
          <span className="wf-tag">6.240 pasos</span>
        </div>
      </div>
    </div>
  ),
  workout: ({ node }) => (
    <div className="wf-workout">
      <Art kind={node.art} />
      <div className="wf-stack">
        <b>{node.title}</b>
        <small>20 min · 4 ejercicios</small>
        <Action>{node.action}</Action>
      </div>
    </div>
  ),
  timer: ({ node }) => (
    <div className="wf-timer">
      <small>{node.title}</small>
      <strong>{node.value}</strong>
      <div className="wf-inline">
        <SkipForward size={16} />
        <Pause size={20} />
        <Volume2 size={16} />
      </div>
    </div>
  ),
  gallery: ({ node }) => (
    <div className="wf-gallery">
      <Art kind={node.art} />
      <Art kind={node.art} />
      <Art kind={node.art} />
    </div>
  ),
  reviews: () => (
    <div className="wf-reviews">
      <div className="wf-inline">
        <Star size={15} />
        <b>4,8</b>
        <small>128 reseñas</small>
      </div>
      <ListRows count={2} />
    </div>
  ),
  headline: ({ node }) => (
    <div className="wf-headline">
      <Art kind={node.art} />
      <small>ACTUALIDAD</small>
      <h4>{node.title}</h4>
      <Lines count={2} />
      <small>Redacción · Hace 2 h</small>
    </div>
  ),
  newsList: ({ node }) => (
    <div className="wf-news-list">
      {Array.from({ length: node.count }, (_, i) => (
        <div key={i}>
          <small>{10 + i}:24</small>
          <div className="wf-grow">
            <Lines count={2} />
            <small>{i + 2} min de lectura</small>
          </div>
          <Art kind="news" />
        </div>
      ))}
    </div>
  ),
  album: ({ node }) => (
    <div className="wf-album">
      <Art kind={node.art} />
      <div className="wf-stack">
        <small>PLAYLIST · 24 CANCIONES</small>
        <h4>{node.title}</h4>
        <Lines count={1} />
        <Action>
          <Play size={11} />
          {node.action}
        </Action>
      </div>
    </div>
  ),
  tracks: ({ node }) => (
    <div className="wf-tracks">
      {Array.from({ length: node.count }, (_, i) => (
        <div key={i}>
          <small>{i + 1}</small>
          <Art kind="music" />
          <div className="wf-grow">
            <Lines />
          </div>
          <Heart size={11} />
          <small>3:4{i}</small>
        </div>
      ))}
    </div>
  ),
  rides: ({ node }) => (
    <div className="wf-rides">
      {node.items.map((item, i) => (
        <div key={item} data-active={i === 0}>
          <Car size={25} />
          <div className="wf-grow">
            <b>{item.split("|")[0]}</b>
            <small>{item.split("|")[1]}</small>
          </div>
          <span className="wf-radio" />
        </div>
      ))}
    </div>
  ),
};
const hiddenTitles = new Set([
  "hero",
  "banner",
  "search",
  "detail",
  "steps",
  "trust",
  "action",
  "player",
  "next",
  "location",
  "profile",
  "balance",
  "bankCard",
  "composer",
  "post",
  "upload",
  "call",
  "article",
  "quiz",
  "progress",
  "rings",
  "workout",
  "timer",
  "headline",
  "album",
]);
function Block({ node }) {
  const Renderer = renderers[node.type];
  if (!Renderer) return null;
  return (
    <section
      className={`wf-block wf-block--${node.type}`}
      data-pattern={node.type}
      aria-label={node.title}
    >
      {!hiddenTitles.has(node.type) && (
        <div className="wf-section-title">
          <h4>{node.title}</h4>
          {["rail", "grid", "tracks"].includes(node.type) && (
            <ChevronRight size={12} />
          )}
        </div>
      )}
      <Renderer node={node} />
    </section>
  );
}
function Canvas({ product, view, miniature = false }) {
  const journey = product.wireframes;
  return (
    <div className="wf-canvas" data-miniature={miniature || undefined}>
      <div className="wf-topnav">
        <span className="wf-brand">
          <Icon name={journey.icon} />
          <i />
        </span>
        <div className="wf-navlinks">
          {journey.nav.map((item, i) => (
            <span key={item} data-active={i === 0}>
              {item}
            </span>
          ))}
        </div>
        <div className="wf-navtools">
          <Search size={13} />
          {journey.icon === "bag" ? (
            <ShoppingBag size={14} />
          ) : (
            <Bell size={13} />
          )}
          <Avatar small />
        </div>
      </div>
      <div className={`wf-layout wf-layout--${view.layout}`}>
        {view.layout === "sidebar" && (
          <aside className="wf-side">
            {view.aside.map((node, i) => (
              <Block key={`${node.type}-${i}`} node={node} />
            ))}
          </aside>
        )}
        <div className="wf-main">
          {view.blocks.map((node, i) => (
            <Block key={`${node.type}-${i}`} node={node} />
          ))}
        </div>
        {view.layout !== "sidebar" && view.aside.length > 0 && (
          <aside className="wf-side">
            {view.aside.map((node, i) => (
              <Block key={`${node.type}-${i}`} node={node} />
            ))}
          </aside>
        )}
      </div>
      {journey.persistent === "audio" && (
        <div className="wf-audio-bar">
          <Art kind="music" />
          <Lines />
          <div className="wf-inline">
            <SkipForward size={12} />
            <Pause size={16} />
            <SkipForward size={12} />
          </div>
          <Progress value={42} />
          <Volume2 size={13} />
        </div>
      )}
    </div>
  );
}
export function ProductSkillPreview({ design }) {
  const product = design.productType;
  const [selected, setSelected] = useState(null);
  const views = product.wireframes.views;
  const active =
    selected?.product === product.id
      ? (views.find((v) => v.id === selected.view) ?? views[0])
      : views[0];
  // The wireframe uses the existing resolved tokens; these aliases only scope
  // the shape-owned card geometry so palette and layout remain independent.
  const style = {
    ...design.css,
    "--wf-card-radius":
      design.content.product.style.borderRadius ?? "var(--card-radius)",
    "--wf-card-padding":
      design.content.product.style.padding ?? "var(--sample-padding)",
  };
  return (
    <article
      className={`product-wireframes ${design.palette.mode}`}
      style={style}
      data-input-border={design.inputs.border}
      aria-label={`Wireframes: ${product.label}`}
    >
      <header className="wf-workspace-heading">
        <div>
          <span>PRODUCT WIREFRAMES</span>
          <h3>{product.label}</h3>
        </div>
        <span className="wf-count">{views.length} vistas</span>
      </header>
      <div
        className="wf-view-tabs"
        role="tablist"
        aria-label="Vistas del producto"
      >
        {views.map((view, i) => (
          <button
            key={view.id}
            type="button"
            role="tab"
            id={`wf-tab-${view.id}`}
            aria-controls="wf-active-view"
            aria-selected={view.id === active.id}
            tabIndex={view.id === active.id ? 0 : -1}
            onClick={() => setSelected({ product: product.id, view: view.id })}
            onKeyDown={(event) => {
              let next;
              if (event.key === "ArrowRight") next = (i + 1) % views.length;
              else if (event.key === "ArrowLeft")
                next = (i - 1 + views.length) % views.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = views.length - 1;
              else return;
              event.preventDefault();
              setSelected({ product: product.id, view: views[next].id });
              event.currentTarget.parentElement.children[next].focus();
            }}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {view.label}
            <ChevronRight size={12} />
          </button>
        ))}
      </div>
      <div
        id="wf-active-view"
        role="tabpanel"
        aria-labelledby={`wf-tab-${active.id}`}
        tabIndex={0}
      >
        <Canvas product={product} view={active} />
      </div>
      <div className="wf-storyboard" aria-label="Todas las vistas">
        {views.map((view, i) => (
          <button
            key={view.id}
            type="button"
            className="wf-thumbnail"
            aria-label={`Ver ${view.label}`}
            aria-pressed={view.id === active.id}
            onClick={() => setSelected({ product: product.id, view: view.id })}
          >
            <div className="wf-thumbnail-art" aria-hidden="true" inert>
              <Canvas product={product} view={view} miniature />
            </div>
            <span>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {view.label}
              <ArrowRight size={12} />
            </span>
          </button>
        ))}
      </div>
    </article>
  );
}
