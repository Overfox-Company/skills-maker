import { lazy, Suspense } from "react";

const Studio = lazy(() => import("./App"));
const DemoIndex = lazy(() => import("./demo/Index"));
const Ecommerce = lazy(() => import("./demo/ecommerce/Page"));
const Delivery = lazy(() => import("./demo/delivery/Page"));
const Videos = lazy(() => import("./demo/videos/Page"));
const pages = {
  "/": Studio,
  "/demo": DemoIndex,
  "/demo/ecommerce": Ecommerce,
  "/demo/delivery": Delivery,
  "/demo/videos": Videos,
};

// Normal links preserve browser history, direct URLs and refresh without a router dependency.
export default function Router() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = pages[path];
  if (!Page)
    return (
      <main style={{ padding: 48 }}>
        <h1>Página no encontrada</h1>
        <p>La ruta que buscas no existe.</p>
        <a href="/">Volver al inicio</a> · <a href="/demo">Explorar demos</a>
      </main>
    );
  return (
    <Suspense
      fallback={
        <div role="status" style={{ padding: 32 }}>
          Cargando…
        </div>
      }
    >
      <Page />
    </Suspense>
  );
}
