import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bike,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Croissant,
  Flame,
  Leaf,
  MapPin,
  Pizza,
  Plus,
  ShoppingBasket,
  SlidersHorizontal,
  Soup,
  Star,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";
import { Input } from "@/components/ui/input";
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
import { match, money, photo, useBag } from "../utils";
import "./theme.css";
import "./page.css";

const restaurants = [
  {
    id: "d1",
    name: "Brasa Club",
    type: "Hamburguesas · Americana",
    category: "Hamburguesas",
    rating: "4,9",
    reviews: 324,
    time: "20–30",
    fee: 0,
    distance: "0,8",
    image: "burger",
    promo: "Envío gratis",
    price: 12,
    dish: "Burger de la casa + papas",
    description:
      "Pan brioche, carne a la brasa, queso cheddar, pepinillos y nuestra salsa de la casa. Incluye papas crujientes.",
  },
  {
    id: "d2",
    name: "Masa Madre",
    type: "Pizza · Italiana",
    category: "Pizza",
    rating: "4,8",
    reviews: 216,
    time: "25–35",
    fee: 1.5,
    distance: "1,2",
    image: "pizza",
    promo: "Combo para compartir · $18",
    price: 18,
    dish: "Combo de 2 pizzas margarita",
    description:
      "Dos pizzas personales de masa fermentada por 48 horas, tomate natural, mozzarella y albahaca fresca.",
  },
  {
    id: "d3",
    name: "Verde Limón",
    type: "Bowls · Saludable",
    category: "Saludable",
    rating: "4,9",
    reviews: 189,
    time: "15–25",
    fee: 0,
    distance: "0,6",
    image: "bowl",
    promo: "Envío gratis",
    price: 9.5,
    dish: "Bowl mediterráneo",
    description:
      "Una mezcla fresca de hojas verdes, quinoa, aguacate, tomates y hummus. Aderezo de limón por separado.",
  },
  {
    id: "d4",
    name: "Nori & Co.",
    type: "Sushi · Japonesa",
    category: "Sushi",
    rating: "4,7",
    reviews: 278,
    time: "30–40",
    fee: 2,
    distance: "1,8",
    image: "sushi",
    promo: "Combo 16 piezas · $16",
    price: 16,
    dish: "Selección Nori, 16 piezas",
    description:
      "La combinación favorita del chef: rolls de salmón, aguacate y pepino con salsa de soja y jengibre.",
  },
  {
    id: "d5",
    name: "La Esquina Taquera",
    type: "Tacos · Mexicana",
    category: "Tacos",
    rating: "4,8",
    reviews: 412,
    time: "15–25",
    fee: 1,
    distance: "0,4",
    image: "tacos",
    promo: "3 tacos + bebida · $10",
    price: 10,
    dish: "Trío de tacos al pastor",
    description:
      "Tres tortillas de maíz, pastor marinado, piña asada, cebolla y cilantro. Incluye agua fresca de la casa.",
  },
  {
    id: "d6",
    name: "Miga de Barrio",
    type: "Panadería · Café · Despensa",
    category: "Café y pan",
    rating: "4,9",
    reviews: 145,
    time: "10–20",
    fee: 0,
    distance: "0,3",
    image: "bakery",
    promo: "Envío gratis",
    price: 7,
    dish: "Desayuno de barrio",
    description:
      "Croissant de mantequilla recién horneado y café de origen. Elige comenzar el día con algo bien hecho.",
  },
];
const categories = [
  ["Todo", Utensils],
  ["Hamburguesas", UtensilsCrossed],
  ["Pizza", Pizza],
  ["Saludable", Leaf],
  ["Sushi", Soup],
  ["Tacos", Flame],
  ["Café y pan", Croissant],
  ["Mercado", ShoppingBasket],
];
export default function DeliveryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todo");
  const [free, setFree] = useState(false);
  const [fast, setFast] = useState(false);
  const [selected, setSelected] = useState(null);
  const [locationOpen, setLocationOpen] = useState(false);
  const [address, setAddress] = useState("Av. Miranda, 120");
  const [added, setAdded] = useState(null);
  const bag = useBag("delivery");
  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(null), 3500);
    return () => clearTimeout(timer);
  }, [added, bag.count]);
  const searching = query || category !== "Todo" || free || fast;
  const filtered = restaurants.filter(
    (r) =>
      match(query, r.name, r.type, r.dish) &&
      (category === "Todo" ||
        r.category === category ||
        (category === "Mercado" && r.id === "d6")) &&
      (!free || r.fee === 0) &&
      (!fast || parseInt(r.time) < 25),
  );
  const reset = () => {
    setQuery("");
    setCategory("Todo");
    setFree(false);
    setFast(false);
  };
  const open = (r) => {
    setSelected(r);
    setAdded(null);
  };
  const add = (r) => {
    bag.add({ ...r, name: r.dish });
    setAdded(r.id);
  };
  const card = (r) => (
    <article className="food-card" key={r.id}>
      <button
        className="food-card-image"
        onClick={() => open(r)}
        aria-label={`Ver menú de ${r.name}`}
      >
        <img src={photo(r.image)} alt={r.dish} loading="lazy" />
        <span>{r.promo}</span>
        <b>
          <Clock3 size={13} />
          {r.time} min
        </b>
      </button>
      <div className="food-card-body">
        <div className="food-name">
          <button onClick={() => open(r)}>
            <h3>{r.name}</h3>
          </button>
          <span>
            <Star size={13} fill="currentColor" />
            {r.rating}
          </span>
        </div>
        <p>{r.type}</p>
        <div className="food-meta">
          <span>
            <Bike size={15} />
            {r.fee === 0 ? "Envío gratis" : `Envío ${money(r.fee)}`}
          </span>
          <span>·</span>
          <span>{r.distance} km</span>
          <span className="food-reviews">({r.reviews})</span>
        </div>
      </div>
    </article>
  );
  return (
    <DemoShell type="delivery" title="a punto — Algo rico está cerca">
      <header className="food-header">
        <a className="food-logo" href="/demo/delivery">
          <span>
            <UtensilsCrossed size={23} />
          </span>
          a punto<span className="food-logo-dot">.</span>
        </a>
        <button className="food-location" onClick={() => setLocationOpen(true)}>
          <MapPin size={19} />
          <span>
            <small>ENTREGAR EN</small>
            <strong>{address}</strong>
          </span>
          <ChevronDown size={15} />
        </button>
        <SearchBox
          query={query}
          setQuery={setQuery}
          placeholder="¿Qué se te antoja hoy?"
        />
        <Account type="delivery" />
        <Bag type="delivery" bag={bag} label="Mi pedido" />
      </header>
      <main id="demo-main" className="food-main">
        <div className="food-intro">
          <div>
            <p className="demo-eyebrow">TU BARRIO, A UN PEDIDO</p>
            <h1>Algo rico está cerca.</h1>
            <p>De tus lugares favoritos, directo a tu puerta.</p>
          </div>
          <span className="food-live">
            <span /> Abiertos ahora en tu zona
          </span>
        </div>
        <section className="food-promos" aria-label="Promociones">
          <div className="food-hero">
            <img
              src={photo("burger")}
              alt="Hamburguesa con queso, vegetales y pan brioche"
              fetchPriority="high"
            />
            <div className="food-hero-copy">
              <span className="food-promo-label">TU PRIMER ANTOJO</span>
              <h2>
                Hoy se pide
                <br />
                con ganas.
              </h2>
              <p>
                Brasa Club. Todo el sabor,
                <br />
                con envío gratis.
              </p>
              <Action onClick={() => open(restaurants[0])}>
                Pedir algo bueno <ArrowRight size={17} />
              </Action>
            </div>
          </div>
          <div className="food-side-promo">
            <div>
              <span className="food-promo-label">FRESCO. RICO. Y CERCA.</span>
              <h2>
                Tu pausa
                <br />
                más verde.
              </h2>
              <p>
                Bowls que te hacen bien.
                <br />
                Desde {money(9.5)}.
              </p>
              <button onClick={() => open(restaurants[2])}>
                Descubrir Verde Limón <ArrowUpRight size={17} />
              </button>
            </div>
            <img
              src={photo("bowl")}
              alt="Bowl fresco de vegetales de Verde Limón"
            />
          </div>
        </section>
        <nav
          className="food-categories"
          aria-label="Categorías de comida y servicios"
        >
          {categories.map(([label, Icon]) => (
            <button
              aria-pressed={category === label}
              key={label}
              onClick={() => setCategory(label)}
            >
              <span>
                <Icon size={25} />
              </span>
              {label}
            </button>
          ))}
        </nav>
        <section className="food-recommended">
          <SectionTitle
            title={
              searching
                ? `Encontramos ${filtered.length} lugares`
                : "Buenos lugares. Mejores antojos."
            }
            subtitle={
              searching
                ? "Sabores que van con lo que buscas."
                : "Los recomendados de tu barrio, elegidos para ti."
            }
          >
            <span className="food-editor-pick">
              <Star size={14} /> Nuestra selección
            </span>
          </SectionTitle>
          <div className="food-filters">
            <SlidersHorizontal size={17} />
            <button aria-pressed={free} onClick={() => setFree(!free)}>
              <Bike size={15} />
              Envío gratis
            </button>
            <button aria-pressed={fast} onClick={() => setFast(!fast)}>
              <Clock3 size={15} />
              Hasta 30 min
            </button>
            {searching && (
              <button className="food-reset" onClick={reset}>
                Limpiar filtros
              </button>
            )}
            <span>{filtered.length} lugares disponibles</span>
          </div>
          {filtered.length ? (
            <div className="food-grid">
              {(searching ? filtered : filtered.slice(0, 3)).map(card)}
            </div>
          ) : (
            <Empty onReset={reset} />
          )}
        </section>
        {!searching && (
          <>
            <section className="food-popular">
              <SectionTitle
                eyebrow="ALGO TIENEN QUE TODOS REPITEN"
                title="Los más pedidos de hoy"
              />
              <div className="food-dishes">
                {restaurants.slice(0, 3).map((r, i) => (
                  <article className="food-dish" key={r.id}>
                    <div className="food-dish-image">
                      <img src={photo(r.image)} alt={r.dish} loading="lazy" />
                      <span>0{i + 1}</span>
                    </div>
                    <div>
                      <p>{r.name}</p>
                      <button onClick={() => open(r)}>
                        <h3>{r.dish}</h3>
                      </button>
                      <strong>{money(r.price)}</strong>
                    </div>
                    <button
                      className="food-dish-add"
                      onClick={() => add(r)}
                      aria-label={`Añadir ${r.dish}`}
                    >
                      {added === r.id ? (
                        <Check size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </button>
                  </article>
                ))}
              </div>
            </section>
            <section className="food-near">
              <SectionTitle
                title="A la vuelta de la esquina"
                subtitle="Pequeñas distancias. Grandes descubrimientos."
              >
                <MapPin size={24} />
              </SectionTitle>
              <div className="food-grid">{restaurants.slice(3).map(card)}</div>
            </section>
            <section className="food-banner">
              <Coffee size={42} />
              <div>
                <h2>Hasta los días ocupados merecen una pausa.</h2>
                <p>Café, pan recién hecho y eso que te faltó en la compra.</p>
              </div>
              <Action secondary onClick={() => open(restaurants[5])}>
                Ir a Miga de Barrio <ArrowRight size={16} />
              </Action>
            </section>
          </>
        )}
      </main>
      <div className="food-status" role="status">
        {added && (
          <>
            <Check size={15} /> Añadido a tu pedido · {bag.count} artículos
          </>
        )}
      </div>
      <Modal
        type="delivery"
        open={locationOpen}
        onOpenChange={setLocationOpen}
        title="¿Dónde te lo llevamos?"
        description="Elige una dirección para esta demostración."
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = new FormData(e.currentTarget).get("address").trim();
            if (value) {
              setAddress(value);
              setLocationOpen(false);
            }
          }}
        >
          <label className="demo-field">
            Calle y número
            <Input
              name="address"
              defaultValue={address}
              required
              maxLength={70}
              pattern=".*\S.*"
            />
          </label>
          <p className="demo-muted">
            Los lugares y distancias son de ejemplo; no se consulta tu ubicación
            real.
          </p>
          <Action type="submit">
            Guardar dirección <MapPin size={16} />
          </Action>
        </form>
      </Modal>
      <Modal
        type="delivery"
        open={!!selected}
        onOpenChange={(value) => {
          if (!value) setSelected(null);
        }}
        title={selected?.name}
        description={
          selected
            ? `${selected.type} · ★ ${selected.rating} (${selected.reviews} reseñas) · ${selected.time} min`
            : ""
        }
      >
        {selected && (
          <>
            <img
              className="food-menu-photo"
              src={photo(selected.image)}
              alt={selected.dish}
            />
            <span className="food-menu-promo">{selected.promo}</span>
            <h3>{selected.dish}</h3>
            <p className="demo-muted">{selected.description}</p>
            <p className="demo-muted">
              {selected.fee === 0
                ? "Envío gratis"
                : `Envío ${money(selected.fee)}`}{" "}
              · {selected.distance} km · Abierto ahora
            </p>
            <Action onClick={() => add(selected)}>
              {added === selected.id ? "Añadir otro" : "Añadir al pedido"} ·{" "}
              {money(selected.price)}
              <Plus size={17} />
            </Action>
          </>
        )}
      </Modal>
    </DemoShell>
  );
}
