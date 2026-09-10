import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { routes, photo } from "./utils";
import "./index.css";

export default function DemoIndex() {
  useEffect(() => {
    document.title = "Demos — DESIGN.md Studio";
  }, []);
  return (
    <div className="demo-index">
      <header>
        <a href="/">
          <ArrowLeft size={16} /> DESIGN.md Studio
        </a>
        <span>EXPERIMENTOS DE DISEÑO / 003</span>
      </header>
      <main>
        <p className="demo-index-label">
          <Code2 size={16} /> DEL SISTEMA AL PRODUCTO
        </p>
        <h1>
          Tres productos.
          <br />
          <span>Tres formas de verlos.</span>
        </h1>
        <p className="demo-index-intro">
          Explora cómo un archivo DESIGN.md se convierte en una experiencia.
          Cada demo tiene su propia identidad, contenido e interacciones.
        </p>
        <div className="demo-index-grid">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={`demo-index-card demo-index-${route.theme}`}
            >
              <div className="demo-index-image">
                <img src={photo(route.image)} alt={`Vista de ${route.name}`} />
                <span>{route.number} / DEMO</span>
                <strong>
                  {route.brand}
                  <small>{route.text}</small>
                </strong>
              </div>
              <div className="demo-index-card-body">
                <div>
                  <h2>{route.name}</h2>
                  <p>{route.path}</p>
                </div>
                <ArrowUpRight size={24} />
              </div>
            </a>
          ))}
        </div>
        <p className="demo-index-note">
          Contenido ficticio · Interacciones locales · Adaptadas a móvil y
          escritorio
        </p>
      </main>
      <footer>
        DESIGN.md STUDIO<span>De las reglas a la experiencia.</span>
      </footer>
    </div>
  );
}
