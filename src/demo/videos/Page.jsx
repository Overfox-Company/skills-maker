import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bookmark,
  Check,
  ChevronRight,
  Clapperboard,
  Film,
  Info,
  Pause,
  Play,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import {
  Account,
  Action,
  DemoShell,
  Empty,
  Modal,
  SearchBox,
  SectionTitle,
} from "../shared";
import { match, photo, useSaved } from "../utils";
import "./theme.css";
import "./page.css";

const films = [
  {
    id: "v1",
    name: "Donde termina el silencio",
    short: "DONDE TERMINA\nEL SILENCIO",
    image: "mountain",
    year: 2026,
    age: "13+",
    length: "1 h 48 min",
    genre: "Aventura",
    type: "Películas",
    label: "ESTRENO EXCLUSIVO",
    description:
      "Una geóloga regresa al pueblo que dejó atrás. Entre montañas que nadie se atreve a cruzar, una señal de radio cambia todo lo que creía saber sobre su padre.",
  },
  {
    id: "v2",
    name: "Órbita cero",
    short: "ÓRBITA\nCERO",
    image: "space",
    year: 2026,
    age: "13+",
    length: "1 temporada",
    genre: "Ciencia ficción",
    type: "Series",
    label: "ORIGINAL PLANO",
    description:
      "Seis desconocidos despiertan en una estación orbital vacía. La Tierra está ahí abajo, pero nadie responde.",
    episode: "T1:E3 · Una señal de casa",
    progress: 42,
  },
  {
    id: "v3",
    name: "La ciudad despierta",
    short: "LA CIUDAD\nDESPIERTA",
    image: "city",
    year: 2025,
    age: "16+",
    length: "2 temporadas",
    genre: "Suspenso",
    type: "Series",
    label: "LA SERIE DEL MOMENTO",
    description:
      "Una fotógrafa nocturna descubre un patrón en las ventanas de la ciudad. Cada luz encendida es una pista.",
    episode: "T2:E1 · Luces al otro lado",
    progress: 68,
  },
  {
    id: "v4",
    name: "Un lugar en el bosque",
    short: "UN LUGAR\nEN EL BOSQUE",
    image: "forest",
    year: 2026,
    age: "7+",
    length: "1 h 32 min",
    genre: "Drama",
    type: "Películas",
    label: "NUEVA PELÍCULA",
    description:
      "Dos hermanos heredan una cabaña y una lista de promesas. Un verano entre árboles les enseñará a volver a empezar.",
    episode: "Quedan 38 min",
    progress: 59,
  },
  {
    id: "v5",
    name: "El último verano azul",
    short: "EL ÚLTIMO\nVERANO AZUL",
    image: "sea",
    year: 2026,
    age: "13+",
    length: "1 h 41 min",
    genre: "Drama",
    type: "Películas",
    label: "ORIGINAL PLANO",
    description:
      "En una isla que pronto quedará vacía, tres amigos se reúnen para vivir un verano que ninguno quiere despedir.",
  },
  {
    id: "v6",
    name: "Las horas invisibles",
    short: "LAS HORAS\nINVISIBLES",
    image: "night",
    year: 2025,
    age: "16+",
    length: "6 episodios",
    genre: "Suspenso",
    type: "Series",
    label: "MINISERIE",
    description:
      "Cada noche, el reloj de Vera salta exactamente once minutos. Alguien al otro lado de la ciudad está viviendo ese tiempo.",
  },
  {
    id: "v7",
    name: "Tierra adentro",
    short: "TIERRA\nADENTRO",
    image: "desert",
    year: 2026,
    age: "TP",
    length: "52 min",
    genre: "Documental",
    type: "Documentales",
    label: "UNA MIRADA DISTINTA",
    description:
      "Un viaje por paisajes extremos y por las historias de quienes han aprendido a llamar hogar al desierto.",
  },
  {
    id: "v8",
    name: "Kilómetro uno",
    short: "KILÓMETRO\nUNO",
    image: "road",
    year: 2026,
    age: "7+",
    length: "1 h 36 min",
    genre: "Aventura",
    type: "Películas",
    label: "RECIÉN LLEGADA",
    description:
      "Una vieja camioneta, un mapa sin destino y una amistad inesperada. A veces perderse es la mejor forma de encontrarse.",
  },
];
const genres = [
  "Todos",
  "Aventura",
  "Ciencia ficción",
  "Drama",
  "Suspenso",
  "Documental",
];
export default function VideosPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("Inicio");
  const [genre, setGenre] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [saved, setSaved] = useSaved("demo-videos-list", []);
  const [watched, setWatched] = useSaved("demo-videos-progress", {});
  useEffect(() => {
    if (!playing || paused || elapsed >= 90) return;
    const timer = setTimeout(() => setElapsed(elapsed + 1), 1000);
    return () => clearTimeout(timer);
  }, [playing, paused, elapsed]);
  const play = (film) => {
    setSelected(null);
    setPlaying(film);
    setElapsed(watched[film.id] >= 90 ? 0 : watched[film.id] || 0);
    setPaused(false);
  };
  const closePlayer = () => {
    if (playing)
      setWatched((current) => ({ ...current, [playing.id]: elapsed }));
    setPlaying(null);
  };
  const toggle = (id) =>
    setSaved((items) =>
      items.includes(id)
        ? items.filter((value) => value !== id)
        : [...items, id],
    );
  const filtered = films.filter(
    (f) =>
      match(query, f.name, f.genre, f.description) &&
      (genre === "Todos" || genre === f.genre) &&
      (tab === "Inicio" ||
        tab === f.type ||
        (tab === "Mi lista" && saved.includes(f.id))),
  );
  const searching = query || genre !== "Todos" || tab !== "Inicio";
  const reset = () => {
    setQuery("");
    setGenre("Todos");
    setTab("Inicio");
  };
  const continueFilms = films.filter(
    (f) => f.progress || watched[f.id] !== undefined,
  );
  const poster = (f) => (
    <article className="stream-poster" key={f.id}>
      <button
        className="stream-poster-image"
        onClick={() => setSelected(f)}
        aria-label={`Ver detalles de ${f.name}`}
      >
        <img src={photo(f.image)} alt={`Paisaje de ${f.name}`} loading="lazy" />
        <span className="stream-original">
          p<span>ORIGINAL</span>
        </span>
        <span className="stream-film-lettering">{f.short}</span>
        <span className="stream-poster-play">
          <Play size={20} fill="currentColor" />
        </span>
      </button>
      <div className="stream-poster-meta">
        <button onClick={() => setSelected(f)}>
          <h3>{f.name}</h3>
        </button>
        <p>
          {f.year} <span>{f.age}</span> {f.genre}
        </p>
      </div>
    </article>
  );
  return (
    <DemoShell type="videos" title="plano — Historias que se quedan contigo">
      <header className="stream-header">
        <a className="stream-logo" href="/demo/videos">
          <span className="stream-mark">
            <Play size={16} fill="currentColor" />
          </span>
          plano<span className="stream-logo-dot">.</span>
        </a>
        <nav aria-label="Tipos de contenido">
          {["Inicio", "Películas", "Series", "Documentales", "Mi lista"].map(
            (label) => (
              <button
                key={label}
                onClick={() => setTab(label)}
                aria-pressed={tab === label}
              >
                {label}
              </button>
            ),
          )}
        </nav>
        <div className="stream-header-tools">
          <SearchBox
            query={query}
            setQuery={setQuery}
            placeholder="Buscar títulos"
          />
          <Account type="videos" />
        </div>
      </header>
      <main id="demo-main" className="stream-main">
        {searching && <h1 className="sr-only">Explorar contenido de Plano</h1>}
        {!searching && (
          <section className="stream-feature">
            <div className="stream-feature-art">
              <img
                src={photo("mountain")}
                alt="Cumbre entre nubes, escenario de Donde termina el silencio"
                fetchPriority="high"
              />
              <div className="stream-feature-caption">
                <span>UNA PRODUCCIÓN ORIGINAL DE PLANO</span>
                <strong>
                  Hay lugares que
                  <br />
                  guardan todas las respuestas.
                </strong>
                <span className="stream-art-credit">
                  UNA PELÍCULA DE ELENA VALLE
                </span>
              </div>
              <span className="stream-feature-count">
                01 <span>/ 04</span>
              </span>
            </div>
            <div className="stream-feature-info">
              <p className="demo-eyebrow">
                <span /> EN EL FOCO
              </p>
              <span className="stream-exclusive">ESTRENO EXCLUSIVO</span>
              <h1>
                Donde termina{" "}
                <br />
                el silencio
              </h1>
              <div className="stream-metadata">
                <span>2026</span>
                <span className="stream-age">13+</span>
                <span>1 h 48 min</span>
                <span>4K</span>
              </div>
              <p>{films[0].description}</p>
              <span className="stream-feature-genre">
                Aventura · Drama · Misterio
              </span>
              <div className="stream-feature-actions">
                <Action onClick={() => play(films[0])}>
                  <Play size={16} fill="currentColor" />
                  Reproducir
                </Action>
                <button
                  className="stream-save"
                  onClick={() => toggle("v1")}
                  aria-label="Guardar Donde termina el silencio"
                  aria-pressed={saved.includes("v1")}
                >
                  {saved.includes("v1") ? (
                    <Check size={19} />
                  ) : (
                    <Plus size={19} />
                  )}
                </button>
              </div>
              <button
                className="stream-info-link"
                onClick={() => setSelected(films[0])}
              >
                <Info size={15} /> Más información <ArrowUpRight size={14} />
              </button>
            </div>
          </section>
        )}
        <nav className="stream-genres" aria-label="Géneros">
          <span>
            <Clapperboard size={16} /> Explora tu próxima historia
          </span>
          <div>
            {genres.map((label) => (
              <button
                key={label}
                aria-pressed={genre === label}
                onClick={() => setGenre(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
        {searching ? (
          <section className="stream-section">
            <SectionTitle
              eyebrow={
                tab === "Mi lista"
                  ? "TUS HISTORIAS, A MANO"
                  : "ENCUENTRA TU PRÓXIMA HISTORIA"
              }
              title={
                tab === "Mi lista"
                  ? "Mi lista"
                  : `${filtered.length} títulos para descubrir`
              }
              subtitle={query ? `Resultados para “${query}”` : undefined}
            />
            {filtered.length ? (
              <div className="stream-poster-grid">{filtered.map(poster)}</div>
            ) : (
              <Empty
                text={
                  tab === "Mi lista" && !query && genre === "Todos"
                    ? "Tu lista está esperando una buena historia."
                    : undefined
                }
                onReset={reset}
              />
            )}
          </section>
        ) : (
          <>
            <section className="stream-section stream-continue">
              <SectionTitle
                title="La historia sigue"
                subtitle="Retoma justo donde lo dejaste."
              >
                <span className="stream-section-note">CONTINÚA VIENDO</span>
              </SectionTitle>
              <div className="stream-continue-grid">
                {continueFilms.map((f) => (
                  <article key={f.id} className="stream-continue-card">
                    <button
                      className="stream-continue-art"
                      onClick={() => play(f)}
                      aria-label={`Continuar ${f.name}`}
                    >
                      <img src={photo(f.image)} alt={f.name} loading="lazy" />
                      <span className="stream-play-circle">
                        <Play size={18} fill="currentColor" />
                      </span>
                    </button>
                    <div
                      className="stream-progress"
                      role="progressbar"
                      aria-label={`Progreso de ${f.name}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={
                        watched[f.id] !== undefined
                          ? Math.round((watched[f.id] / 90) * 100)
                          : f.progress
                      }
                    >
                      <span
                        style={{
                          width: `${watched[f.id] !== undefined ? (watched[f.id] / 90) * 100 : f.progress}%`,
                        }}
                      />
                    </div>
                    <div className="stream-continue-meta">
                      <div>
                        <h3>{f.name}</h3>
                        <p>
                          {watched[f.id] !== undefined
                            ? `Vista previa · ${90 - watched[f.id]} s restantes`
                            : f.episode}
                        </p>
                      </div>
                      <button
                        aria-label={`Más información de ${f.name}`}
                        onClick={() => setSelected(f)}
                      >
                        <Info size={17} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section className="stream-section">
              <SectionTitle
                eyebrow="ELEGIDAS PARA TI"
                title="Tu próxima gran historia"
              >
                <Sparkles size={21} />
              </SectionTitle>
              <div className="stream-poster-grid">
                {[films[4], films[5], films[6], films[7]].map(poster)}
              </div>
            </section>
            <section className="stream-section">
              <SectionTitle
                title="De lo que todos hablan"
                subtitle="Las más vistas esta semana en Plano."
              />
              <div className="stream-ranking">
                {[films[2], films[0], films[1]].map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => setSelected(f)}
                    className="stream-ranked"
                  >
                    <strong>{i + 1}</strong>
                    <img src={photo(f.image)} alt="" loading="lazy" />
                    <span>
                      <small>{f.type}</small>
                      <b>{f.name}</b>
                      <span>
                        {f.genre} · {f.age}
                      </span>
                    </span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </section>
            <section className="stream-section stream-new">
              <SectionTitle
                eyebrow="RECIÉN LLEGADAS"
                title="Hoy hay algo nuevo que ver"
              >
                <span className="stream-section-note">SEPTIEMBRE 2026</span>
              </SectionTitle>
              <div className="stream-release-grid">
                {[films[3], films[6], films[7]].map((f) => (
                  <button
                    key={f.id}
                    className="stream-release"
                    onClick={() => setSelected(f)}
                  >
                    <img src={photo(f.image)} alt={f.name} loading="lazy" />
                    <div>
                      <span>{f.label}</span>
                      <h3>{f.name}</h3>
                      <p>
                        {f.year} · {f.age} · {f.length}
                      </p>
                      <ArrowUpRight size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <div className="stream-bottom">
              <Film size={22} />
              <span>Cada pantalla, una nueva perspectiva.</span>
              <span>PLANO ORIGINALS</span>
            </div>
          </>
        )}
      </main>
      <Modal
        type="videos"
        title={selected?.name}
        description={selected?.description}
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected && (
          <>
            <img
              className="stream-detail-image"
              src={photo(selected.image)}
              alt={selected.name}
            />
            <p className="demo-muted">
              {selected.year} · {selected.age} · {selected.length} ·{" "}
              {selected.genre}
            </p>
            <Action onClick={() => play(selected)}>
              <Play size={17} fill="currentColor" />
              Reproducir vista previa
            </Action>
            <Action secondary onClick={() => toggle(selected.id)}>
              {saved.includes(selected.id) ? (
                <Check size={17} />
              ) : (
                <Bookmark size={17} />
              )}{" "}
              {saved.includes(selected.id)
                ? "Quitar de mi lista"
                : "Añadir a mi lista"}
            </Action>
          </>
        )}
      </Modal>
      <Modal
        type="videos"
        title={playing?.name}
        description="Vista previa de demostración: secuencia visual con imágenes de muestra, sin película ni audio reales."
        open={!!playing}
        onOpenChange={(open) => {
          if (!open) closePlayer();
        }}
      >
        {playing && (
          <>
            <div
              className={`stream-player ${paused || elapsed >= 90 ? "is-paused" : ""}`}
            >
              <img
                src={photo(playing.image)}
                alt={`Vista previa de ${playing.name}`}
              />
              <span>{playing.short}</span>
            </div>
            <label className="stream-timeline">
              <span className="sr-only">Posición de la vista previa</span>
              <input
                type="range"
                min="0"
                max="90"
                value={elapsed}
                onChange={(e) => setElapsed(Number(e.target.value))}
              />
            </label>
            <div className="stream-player-controls">
              <Action
                onClick={() => {
                  if (elapsed >= 90) {
                    setElapsed(0);
                    setPaused(false);
                  } else setPaused((v) => !v);
                }}
              >
                {paused || elapsed >= 90 ? (
                  <Play size={16} />
                ) : (
                  <Pause size={16} />
                )}{" "}
                {elapsed >= 90
                  ? "Volver a ver"
                  : paused
                    ? "Continuar"
                    : "Pausar"}
              </Action>
              <span>
                {Math.floor(elapsed / 60)}:
                {String(elapsed % 60).padStart(2, "0")} / 1:30
              </span>
              <button aria-label="Cerrar reproducción" onClick={closePlayer}>
                <X size={19} />
              </button>
            </div>
          </>
        )}
      </Modal>
    </DemoShell>
  );
}
