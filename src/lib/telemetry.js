// Cliente de telemetría hacia Overfox (protocolo overfox.telemetry/v1).
const ENDPOINT = import.meta.env.VITE_OVERFOX_TELEMETRY_URL;
const KEY = import.meta.env.VITE_OVERFOX_TELEMETRY_KEY;
const PRODUCT = import.meta.env.VITE_OVERFOX_TELEMETRY_SOURCE || "skills-maker";
const ENVIRONMENT =
  import.meta.env.VITE_OVERFOX_TELEMETRY_ENVIRONMENT ||
  (import.meta.env.PROD ? "production" : "development");

const enabled = () => Boolean(ENDPOINT && KEY);

function uuid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function persistentId(storage, key) {
  try {
    let value = storage.getItem(key);
    if (!value) {
      value = uuid();
      storage.setItem(key, value);
    }
    return value;
  } catch {
    return uuid();
  }
}

const visitorId = () => persistentId(localStorage, "sm_visitor_id");
const sessionId = () => persistentId(sessionStorage, "sm_session_id");
const dayKey = () => new Date().toISOString().slice(0, 10);

async function resolveCountry() {
  try {
    const cached = localStorage.getItem("sm_country");
    if (cached) return cached;
    const res = await fetch("https://ipapi.co/country/", {
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) return null;
    const code = (await res.text()).trim().toUpperCase();
    if (!/^[A-Z]{2}$/.test(code)) return null;
    localStorage.setItem("sm_country", code);
    return code;
  } catch {
    return null;
  }
}

function send(signal) {
  if (!enabled()) return;
  try {
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({ signals: [signal] }),
      keepalive: true,
      mode: "cors",
    }).catch(() => {});
  } catch {
    /* Telemetry is best-effort. */
  }
}

// Envío confiable al cerrar la pestaña: sendBeacon con la clave en query y cuerpo text/plain (evita preflight).
function sendBeacon(signal) {
  if (!enabled()) return;
  try {
    const url = `${ENDPOINT}?key=${encodeURIComponent(KEY)}`;
    const blob = new Blob([JSON.stringify({ signals: [signal] })], { type: "text/plain" });
    if (navigator.sendBeacon && navigator.sendBeacon(url, blob)) return;
    fetch(url, { method: "POST", body: JSON.stringify({ signals: [signal] }), keepalive: true, mode: "cors" }).catch(() => {});
  } catch {
    /* ignore */
  }
}

function signalFor(type, name, category, { value, context, metricKind } = {}) {
  return {
    schema: "overfox.telemetry/v1",
    id: uuid(),
    source: { product: PRODUCT, environment: ENVIRONMENT, platform: "web" },
    signal: { type, name, category, ...(metricKind ? { metricKind } : {}) },
    timestamp: new Date().toISOString(),
    ...(value !== undefined ? { value } : {}),
    actor: { anonymousId: visitorId() },
    session: { id: sessionId() },
    context: context || {},
  };
}

export async function trackVisit() {
  if (!enabled()) return;
  // Una visita por usuario y día: recargar no crea usuarios nuevos.
  const today = dayKey();
  try {
    if (localStorage.getItem("sm_visit_day") === today) return;
    localStorage.setItem("sm_visit_day", today);
  } catch {
    /* ignore */
  }
  const country = await resolveCountry();
  const signal = signalFor("event", "site.visit", "acquisition", {
    context: { path: location.pathname, ...(country ? { country } : {}) },
  });
  // Id determinista: Overfox deduplica visitas repetidas del mismo usuario en el mismo día.
  signal.id = `visit:${visitorId()}:${today}`;
  send(signal);
}

export function trackDesignGenerated(meta = {}) {
  const context = {};
  if (typeof meta.mode === "string") context.mode = meta.mode;
  send(signalFor("event", "design.generated", "product", { context }));
}

// Tiempo de uso: acumula el tiempo en primer plano y lo envía al salir.
export function initUsageTracking() {
  if (!enabled() || typeof document === "undefined") return;
  let activeMs = 0;
  let startedAt = document.visibilityState === "visible" ? Date.now() : null;
  let sent = false;

  const accumulate = () => {
    if (startedAt != null) {
      activeMs += Date.now() - startedAt;
      startedAt = null;
    }
  };

  const flush = () => {
    if (sent) return;
    accumulate();
    const seconds = Math.round(activeMs / 1000);
    if (seconds <= 0) return;
    sent = true;
    sendBeacon(
      signalFor("metric", "session.duration", "engagement", {
        metricKind: "distribution",
        value: { value: seconds, unit: "seconds" },
      }),
    );
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      accumulate();
      flush();
    } else {
      startedAt = Date.now();
    }
  });
  window.addEventListener("pagehide", flush);
}
