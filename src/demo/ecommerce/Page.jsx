import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  ChevronRight,
  Headphones,
  Heart,
  Home,
  Laptop,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Truck,
  Watch,
  Zap,
} from "lucide-react";
import {
  Account,
  Action,
  Bag,
  DemoShell,
  Empty,
  Modal,
  SearchBox,
  SectionTitle,
} from "../shared";
import { match, money, photo, useBag, useSaved } from "../utils";
import "./theme.css";
import "./page.css";

const products = [
  {
    id: "e1",
    name: "Aura One · Auriculares inalámbricos",
    category: "Tecnología",
    price: 89,
    old: 129,
    rating: "4,9",
    reviews: 248,
    image: "headphones",
    tag: "El favorito de todos",
    stock: "Disponible",
    shipping: "Envío gratis · Llega mañana",
    description:
      "Tu música, sin distracciones. Sonido envolvente, cancelación de ruido y hasta 40 horas de batería. Incluye estuche de viaje y cable de carga.",
  },
  {
    id: "e2",
    name: "Forma · Lámpara de escritorio",
    category: "Hogar",
    price: 48,
    old: 65,
    rating: "4,8",
    reviews: 126,
    image: "lamp",
    tag: "−26%",
    stock: "Últimas 5 unidades",
    shipping: "Envío gratis · Llega en 2 días",
    description:
      "Luz cálida para tus buenas ideas. Lámpara de escritorio con intensidad regulable y una base compacta que cabe en cualquier rincón.",
  },
  {
    id: "e3",
    name: "Tempo S · Reloj de todos los días",
    category: "Accesorios",
    price: 72,
    old: 95,
    rating: "4,7",
    reviews: 183,
    image: "watch",
    tag: "−24%",
    stock: "Disponible",
    shipping: "Envío $3 · Llega en 2 días",
    description:
      "Diseño ligero y líneas limpias. Correa intercambiable, cristal resistente y movimiento de cuarzo preciso para acompañarte todos los días.",
  },
  {
    id: "e4",
    name: "Pixel M1 · Cámara digital",
    category: "Electrónica",
    price: 349,
    old: 399,
    rating: "4,9",
    reviews: 92,
    image: "camera",
    tag: "Para tu próxima aventura",
    stock: "Disponible",
    shipping: "Envío gratis · Llega mañana",
    description:
      "Encuentra otra forma de mirar. Cámara compacta de 24 MP con enfoque automático, grabación de video y objetivo versátil incluido.",
  },
  {
    id: "e5",
    name: "Nómada · Mochila urbana",
    category: "Accesorios",
    price: 54,
    rating: "4,8",
    reviews: 307,
    image: "bag",
    tag: "Más vendido",
    stock: "Disponible",
    shipping: "Envío gratis · Llega en 3 días",
    description:
      "Todo tiene su lugar. Mochila de 20 litros con compartimento acolchado para portátil, bolsillos interiores y tejido resistente al agua.",
  },
  {
    id: "e6",
    name: "Pulse Mini · Altavoz portátil",
    category: "Electrónica",
    price: 39,
    old: 59,
    rating: "4,6",
    reviews: 164,
    image: "speaker",
    tag: "−34%",
    stock: "Agotado",
    shipping: "Reposición estimada en 7 días",
    description:
      "Pequeño por fuera, grande en sonido. Altavoz con conexión inalámbrica, autonomía de 12 horas y protección contra salpicaduras.",
  },
];
const categories = [
  ["Todo", Box],
  ["Tecnología", Laptop],
  ["Hogar", Home],
  ["Accesorios", Watch],
  ["Electrónica", Headphones],
];
export default function EcommercePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todo");
  const [offers, setOffers] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [selected, setSelected] = useState(null);
  const [added, setAdded] = useState(null);
  const [favorites, setFavorites] = useSaved("demo-ecommerce-favorites", []);
  const bag = useBag("ecommerce");
  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(null), 3500);
    return () => clearTimeout(timer);
  }, [added, bag.count]);
  const filtered = products.filter(
    (p) =>
      match(query, p.name, p.category) &&
      (category === "Todo" || p.category === category) &&
      (!offers || p.old),
  );
  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  if (sort === "rating")
    filtered.sort(
      (a, b) =>
        parseFloat(b.rating.replace(",", ".")) -
        parseFloat(a.rating.replace(",", ".")),
    );
  const searching =
    query || category !== "Todo" || offers || sort !== "recommended";
  const reset = () => {
    setQuery("");
    setCategory("Todo");
    setOffers(false);
    setSort("recommended");
  };
  const toggle = (id) =>
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  const add = (p) => {
    bag.add(p);
    setAdded(p.id);
  };
  const card = (p) => (
    <article className="shop-product" key={p.id}>
      <div className="shop-product-image">
        <button
          className="shop-product-open"
          onClick={() => setSelected(p)}
          aria-label={`Ver ${p.name}`}
        >
          <img src={photo(p.image)} alt={p.name} loading="lazy" />
        </button>
        <span className="shop-tag">{p.tag}</span>
        <button
          className="shop-heart"
          aria-label={`Guardar ${p.name}`}
          aria-pressed={favorites.includes(p.id)}
          onClick={() => toggle(p.id)}
        >
          <Heart
            size={18}
            fill={favorites.includes(p.id) ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="shop-product-body">
        <p className="shop-category">{p.category}</p>
        <button className="shop-product-title" onClick={() => setSelected(p)}>
          <h3>{p.name}</h3>
        </button>
        <p className="shop-rating">
          <Star size={13} fill="currentColor" /> {p.rating}{" "}
          <span>({p.reviews} reseñas)</span>
        </p>
        <div className="shop-price">
          <strong>{money(p.price)}</strong>
          {p.old && <del>{money(p.old)}</del>}
        </div>
        <p className="shop-stock">{p.stock}</p>
        <div className="shop-product-bottom">
          <span>
            <Truck size={14} />
            {p.shipping}
          </span>
          <button
            className="shop-add"
            disabled={p.stock === "Agotado"}
            aria-label={`Añadir ${p.name} al carrito`}
            onClick={() => add(p)}
          >
            {added === p.id ? <Check size={18} /> : <ShoppingBag size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
  return (
    <DemoShell type="ecommerce" title="objeto — Encuentra tu próximo favorito">
      <header className="shop-header">
        <div className="shop-header-main">
          <a href="/demo/ecommerce" className="shop-logo">
            objeto<span>®</span>
          </a>
          <SearchBox
            query={query}
            setQuery={setQuery}
            placeholder="Busca eso que tienes en mente"
          />
          <div className="shop-header-actions">
            <Account type="ecommerce" />
            <Bag type="ecommerce" bag={bag} />
          </div>
        </div>
        <div className="shop-nav">
          <nav aria-label="Categorías de productos">
            {categories.map(([label]) => (
              <button
                key={label}
                onClick={() => {
                  setCategory(label);
                  setOffers(false);
                }}
                aria-pressed={category === label && !offers}
              >
                {label === "Todo" ? "Descubrir" : label}
              </button>
            ))}
            <button
              className="shop-offers-link"
              aria-pressed={offers}
              onClick={() => {
                setCategory("Todo");
                setOffers((v) => !v);
              }}
            >
              <Zap size={13} /> Ofertas
            </button>
          </nav>
          <span>
            <Truck size={14} /> Envíos a todo el país
          </span>
        </div>
      </header>
      <main id="demo-main">
        <section className="shop-hero">
          <div className="shop-hero-copy">
            <p className="demo-eyebrow">COSAS QUE HACEN TU DÍA</p>
            <h1>
              Pequeños hallazgos.
              <br />
              Grandes favoritos.
            </h1>
            <p>
              Diseño que te gusta. Precios que también.
              <br />
              Descubre algo bueno para tu día a día.
            </p>
            <Action
              onClick={() =>
                document
                  .getElementById("shop-discover")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explorar la colección <ArrowRight size={17} />
            </Action>
            <div className="shop-hero-foot">
              <span>01 — 03</span>
              <span>La selección de septiembre</span>
            </div>
          </div>
          <div className="shop-hero-photo">
            <img
              src={photo("headphones")}
              alt="Auriculares Aura One sobre un fondo amarillo cálido"
              fetchPriority="high"
            />
            <div className="shop-hero-caption">
              <div>
                <span>ESCUCHA A TU MANERA</span>
                <strong>Aura One</strong>
              </div>
              <button
                aria-label="Descubrir Aura One"
                onClick={() => setSelected(products[0])}
              >
                <ArrowUpRight size={23} />
              </button>
            </div>
          </div>
        </section>
        <div className="shop-benefits">
          <span>
            <Truck /> Envío gratis desde $45
          </span>
          <span>
            <ShieldCheck /> Compra con tranquilidad
          </span>
          <span>
            <Box /> 30 días para devoluciones
          </span>
        </div>
        <div className="shop-content" id="shop-discover">
          <section className="shop-discover">
            <SectionTitle
              eyebrow="TU PRÓXIMO DESCUBRIMIENTO"
              title="Hay algo para ti."
              subtitle="Lo que necesitas. Y lo que no sabías que querías."
            />
            <div className="shop-filters">
              {categories.map(([label, Icon]) => (
                <button
                  key={label}
                  className={category === label ? "active" : ""}
                  aria-pressed={category === label}
                  onClick={() => setCategory(label)}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
              <label className="shop-sort">
                <SlidersHorizontal size={15} />
                <span className="sr-only">Ordenar productos</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="recommended">Recomendados</option>
                  <option value="price">Menor precio</option>
                  <option value="rating">Mejor valoración</option>
                </select>
              </label>
            </div>
            <SectionTitle
              title={
                searching
                  ? `Tu selección (${filtered.length})`
                  : "Favoritos por una razón."
              }
            >
              <button
                className="shop-text-link"
                onClick={() => {
                  setOffers((v) => !v);
                  setCategory("Todo");
                }}
              >
                {offers ? "Quitar filtro de ofertas" : "Ver las ofertas"}{" "}
                <ChevronRight size={16} />
              </button>
            </SectionTitle>
            {!filtered.length ? (
              <Empty onReset={reset} />
            ) : (
              <div className="shop-grid">
                {(searching ? filtered : products.slice(0, 3)).map(card)}
              </div>
            )}
          </section>
          {!searching && (
            <>
              <section className="shop-editorial">
                <div>
                  <p className="demo-eyebrow">UN RINCÓN MUY TUYO</p>
                  <h2>
                    Tu casa.
                    <br />
                    Un poco más tú.
                  </h2>
                  <p>Detalles que transforman los espacios de siempre.</p>
                  <Action
                    secondary
                    onClick={() => {
                      setCategory("Hogar");
                      document
                        .getElementById("shop-discover")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Descubrir hogar <ArrowRight size={16} />
                  </Action>
                </div>
                <img
                  src={photo("lamp")}
                  alt="Lámpara de diseño para dar calidez al escritorio"
                  loading="lazy"
                />
              </section>
              <section className="shop-recommendations">
                <SectionTitle
                  eyebrow="BIEN ELEGIDO, PARA TI"
                  title="Creemos que te van a gustar."
                  subtitle="Una selección para acompañar tus planes."
                />
                <div className="shop-grid">{products.slice(3).map(card)}</div>
              </section>
            </>
          )}
        </div>
      </main>
      <div className="shop-notice" role="status" aria-live="polite">
        {added && (
          <>
            <Check size={15} /> Añadido al carrito · {bag.count}{" "}
            {bag.count === 1 ? "artículo" : "artículos"}
          </>
        )}
      </div>
      <Modal
        type="ecommerce"
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
        title={selected?.name}
        description={selected?.description}
      >
        {selected && (
          <>
            <img
              className="shop-detail-image"
              src={photo(selected.image)}
              alt={selected.name}
            />
            <div className="shop-price">
              <strong>{money(selected.price)}</strong>
              {selected.old && <del>{money(selected.old)}</del>}
            </div>
            <p className="demo-muted">
              ★ {selected.rating} · {selected.reviews} reseñas ·{" "}
              {selected.stock}
            </p>
            <p className="demo-muted">{selected.shipping}</p>
            <Action
              disabled={selected.stock === "Agotado"}
              onClick={() => add(selected)}
            >
              {selected.stock === "Agotado"
                ? "Temporalmente agotado"
                : added === selected.id
                  ? "Añadir otro al carrito"
                  : "Añadir al carrito"}
              <ShoppingBag size={17} />
            </Action>
          </>
        )}
      </Modal>
    </DemoShell>
  );
}
