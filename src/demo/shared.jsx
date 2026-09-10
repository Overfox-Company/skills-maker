import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { routes, photo, money, useSaved } from "./utils";
import "./shared.css";

export function DemoShell({ type, title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className={`demo demo-${type}`}>
      <a className="demo-skip" href="#demo-main">
        Saltar al contenido
      </a>
      <div className="demo-switcher">
        <a href="/demo">
          <ArrowLeft size={13} /> Demos
        </a>
        <nav aria-label="Navegación entre demos">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              aria-current={route.theme === type ? "page" : undefined}
            >
              {route.name}
            </a>
          ))}
        </nav>
        <a href="/">
          DESIGN.md Studio <ArrowUpRight size={13} />
        </a>
      </div>
      {children}
      <footer className="demo-footer">
        <span>
          Hecho para explorar. Todos los productos y títulos son ficticios.
        </span>
        <a href="/">
          Volver a DESIGN.md Studio <ArrowUpRight size={14} />
        </a>
      </footer>
    </div>
  );
}
export function Action({
  children,
  secondary = false,
  className = "",
  ...props
}) {
  return (
    <Button
      className={`demo-action ${secondary ? "demo-secondary" : ""} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
export function SearchBox({ query, setQuery, placeholder }) {
  return (
    <label className="demo-search">
      <Search size={18} />
      <span className="sr-only">{placeholder}</span>
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
export function Modal({
  type,
  title,
  description,
  open,
  onOpenChange,
  children,
}) {
  const opener = useRef(null);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`demo demo-${type} demo-modal`}
        onOpenAutoFocus={() => {
          opener.current = document.activeElement;
        }}
        onCloseAutoFocus={(event) => {
          if (opener.current?.isConnected) {
            event.preventDefault();
            opener.current.focus({ preventScroll: true });
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
export function Account({ type, name = "Alex" }) {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useSaved(`demo-${type}-profile`, name);
  return (
    <>
      <button
        className="demo-account"
        aria-label="Mi cuenta"
        onClick={() => setOpen(true)}
      >
        <UserRound size={20} />
        <span>{profile}</span>
      </button>
      <Modal
        type={type}
        open={open}
        onOpenChange={setOpen}
        title="Tu espacio"
        description="Personaliza tu perfil de demostración."
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = new FormData(e.currentTarget).get("name").trim();
            if (value) {
              setProfile(value);
              setOpen(false);
            }
          }}
        >
          <label className="demo-field">
            Tu nombre
            <Input
              name="name"
              defaultValue={profile}
              required
              maxLength={24}
              pattern=".*\S.*"
            />
          </label>
          <p className="demo-muted">
            Tus preferencias se guardan en este navegador.
          </p>
          <Action type="submit">
            Guardar perfil <Check size={16} />
          </Action>
        </form>
      </Modal>
    </>
  );
}
export function Bag({ type, bag, label = "Carrito" }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const total = bag.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const change = (id, delta) =>
    bag.setItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  return (
    <>
      <button
        className="demo-bag"
        onClick={() => {
          setDone(false);
          setOpen(true);
        }}
      >
        <ShoppingBag size={19} />
        <span>{label}</span>
        <b>{bag.count}</b>
      </button>
      <Modal
        type={type}
        open={open}
        onOpenChange={setOpen}
        title={done ? "¡Todo listo!" : label}
        description={
          done
            ? "Completaste el recorrido de demostración. No se realizó ningún cobro ni pedido real."
            : "Revisa tus artículos y ajusta las cantidades."
        }
      >
        {done ? (
          <Action onClick={() => setOpen(false)}>Seguir explorando</Action>
        ) : bag.items.length ? (
          <>
            <div className="demo-bag-items">
              {bag.items.map((item) => (
                <div className="demo-bag-row" key={item.id}>
                  <img src={photo(item.image)} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <p>{money(item.price)}</p>
                  </div>
                  <div className="demo-quantity">
                    <button
                      aria-label={`Quitar uno: ${item.name}`}
                      onClick={() => change(item.id, -1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label={`Añadir uno: ${item.name}`}
                      onClick={() => change(item.id, 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="demo-total">
              <span>Subtotal de productos</span>
              <strong>{money(total)}</strong>
            </div>
            <p className="demo-muted">
              Simulación sin pago. El envío y los descuentos no se incluyen en
              el subtotal.
            </p>
            <Action
              onClick={() => {
                bag.setItems([]);
                setDone(true);
              }}
            >
              Completar demo <ArrowUpRight size={17} />
            </Action>
          </>
        ) : (
          <p className="demo-empty">
            Todavía no hay artículos. Encuentra algo que te guste y añádelo
            aquí.
          </p>
        )}
      </Modal>
    </>
  );
}
export function Empty({ onReset, text = "No encontramos resultados." }) {
  return (
    <div className="demo-empty">
      <Search size={28} />
      <h3>{text}</h3>
      <p>Prueba otra búsqueda o cambia los filtros.</p>
      <Action secondary onClick={onReset}>
        Restablecer filtros
      </Action>
    </div>
  );
}
export function SectionTitle({ eyebrow, title, subtitle, children }) {
  return (
    <div className="demo-section-title">
      <div>
        {eyebrow && <p className="demo-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {subtitle && <p className="demo-muted">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
