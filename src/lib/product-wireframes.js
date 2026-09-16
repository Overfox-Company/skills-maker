// Product journeys are data. Each screen composes shared wireframe primitives.
// Labels are UI examples; intent is retained for the exported skill, not shown as prose.
const block = (type, title, props = {}) => ({ type, title, ...props });
const view = (id, label, layout, blocks, aside = []) => ({
  id,
  label,
  layout,
  blocks,
  aside,
});
export const productWireframes = {
  "video-streaming": {
    nav: ["Inicio", "Series", "Películas", "Mi lista"],
    icon: "play",
    views: [
      view("discover", "Descubrir", "wide", [
        block("hero", "Una historia que te atrapa", {
          art: "film",
          action: "Reproducir",
          secondary: "Mi lista",
          tag: "PARA TI",
          intent: "Lead with relevant content and immediate playback.",
        }),
        block("rail", "Continuar viendo", {
          art: "film",
          progress: true,
          count: 4,
        }),
        block("rail", "Porque viste…", { art: "film", count: 5 }),
      ]),
      view(
        "watch",
        "Ver y continuar",
        "split",
        [
          block("player", "Episodio 04", { art: "film" }),
          block("next", "Siguiente episodio", {
            art: "film",
            action: "Continuar",
            intent:
              "Make the next episode easy to discover while keeping playback under user control.",
          }),
          block("rail", "Más como esto", { art: "film", count: 3 }),
        ],
        [block("episodes", "Temporada 1", { count: 5, art: "film" })],
      ),
      view(
        "library",
        "Volver",
        "sidebar",
        [
          block("search", "Buscar en mi lista"),
          block("rail", "Retomar donde lo dejaste", {
            progress: true,
            art: "film",
            count: 3,
          }),
          block("grid", "Guardado para después", { art: "film", count: 6 }),
        ],
        [
          block("menu", "Tu biblioteca", {
            items: ["Mi lista", "Continuar viendo", "Descargas", "Historial"],
          }),
        ],
      ),
    ],
  },
  ecommerce: {
    nav: ["Novedades", "Colecciones", "Favoritos"],
    icon: "bag",
    views: [
      view(
        "catalog",
        "Explorar",
        "sidebar",
        [
          block("search", "Buscar productos"),
          block("banner", "Nueva colección", {
            action: "Ver colección",
            art: "bag",
          }),
          block("grid", "Lo más buscado", {
            art: "bag",
            price: true,
            count: 6,
          }),
        ],
        [
          block("filters", "Filtrar", {
            items: ["Categoría", "Precio", "Color", "Talla", "Disponibilidad"],
          }),
        ],
      ),
      view("product", "Elegir y combinar", "wide", [
        block("detail", "Producto esencial", {
          art: "bag",
          price: "$89",
          action: "Añadir al carrito",
          options: ["S", "M", "L"],
          intent:
            "Keep variants, price and purchase action together; suggest relevant complements.",
        }),
        block("rail", "Completa tu selección", {
          art: "bag",
          price: true,
          count: 4,
        }),
      ]),
      view(
        "checkout",
        "Checkout rápido",
        "split",
        [
          block("steps", "Compra", { items: ["Contacto", "Entrega", "Pago"] }),
          block("express", "Pago rápido", { action: "Pagar en un paso" }),
          block("form", "Entrega", {
            fields: ["Email", "Dirección", "Ciudad", "Código postal"],
          }),
          block("payment", "Pago seguro", {
            action: "Pagar $128",
            intent:
              "Guest checkout, express payment, minimal input and transparent totals.",
          }),
        ],
        [
          block("cart", "Tu pedido", { count: 2, art: "bag", total: "$128" }),
          block("trust", "Envío · Devoluciones · Pago seguro"),
        ],
      ),
    ],
  },
  "delivery-food-ordering": {
    nav: ["Explorar", "Favoritos", "Pedidos"],
    icon: "food",
    views: [
      view("nearby", "Cerca de ti", "wide", [
        block("location", "Entregar en casa", {
          detail: "Ahora · Cambiar dirección",
        }),
        block("search", "Restaurante o plato"),
        block("categories", "¿Qué te apetece?", {
          items: ["Pizza", "Burgers", "Sushi", "Ensaladas"],
          art: "food",
        }),
        block("grid", "A 20–30 minutos", {
          count: 4,
          art: "food",
          detail: "20–30 min · Envío $2",
        }),
      ]),
      view(
        "menu",
        "Elegir tu pedido",
        "split",
        [
          block("banner", "Tu restaurante favorito", {
            art: "food",
            detail: "4,8 ★ · 20–30 min",
          }),
          block("chips", "Menú", { items: ["Populares", "Platos", "Bebidas"] }),
          block("menuItems", "Los favoritos", {
            art: "food",
            count: 4,
            price: true,
          }),
        ],
        [
          block("cart", "Tu pedido", { count: 2, art: "food", total: "$24" }),
          block("action", "Revisar pedido"),
        ],
      ),
      view(
        "tracking",
        "Seguir entrega",
        "split",
        [
          block("map", "Tu pedido está en camino", { route: true }),
          block("profile", "Tu repartidor", {
            detail: "Llega en 12 min",
            action: "Contactar",
          }),
        ],
        [
          block("timeline", "Estado del pedido", {
            items: ["Confirmado", "En preparación", "En camino", "Entregado"],
          }),
          block("cart", "Resumen", { count: 1, art: "food", total: "$24" }),
        ],
      ),
    ],
  },
  "finance-banking": {
    nav: ["Resumen", "Movimientos", "Pagos"],
    icon: "wallet",
    views: [
      view(
        "overview",
        "Tu dinero",
        "split",
        [
          block("balance", "Saldo disponible", {
            value: "$12.480",
            action: "Transferir",
          }),
          block("chart", "Ingresos y gastos"),
          block("table", "Últimos movimientos", {
            columns: ["Movimiento", "Fecha", "Importe"],
            rows: ["Compra · Tarjeta", "Ingreso · Nómina", "Pago · Servicio"],
          }),
        ],
        [
          block("bankCard", "Cuenta principal"),
          block("metrics", "Este mes", {
            items: ["Ingresos|$3.200", "Gastos|$1.840"],
          }),
        ],
      ),
      view(
        "transfer",
        "Transferir",
        "split",
        [
          block("steps", "Transferencia", {
            items: ["Destino", "Importe", "Revisión"],
          }),
          block("contacts", "Destinatarios frecuentes"),
          block("form", "Datos de transferencia", {
            fields: [
              "Destinatario",
              "Cuenta de destino",
              "Importe",
              "Concepto",
            ],
          }),
          block("action", "Revisar transferencia"),
        ],
        [
          block("receipt", "Antes de confirmar", {
            items: [
              "Importe|$250",
              "Comisión|$0",
              "Destino|•• 4821",
              "Total|$250",
            ],
            action: "Confirmar",
          }),
        ],
      ),
      view(
        "activity",
        "Revisar actividad",
        "sidebar",
        [
          block("search", "Buscar movimiento"),
          block("chips", "Periodo", {
            items: ["Este mes", "Ingresos", "Gastos"],
          }),
          block("table", "Movimientos", {
            columns: ["Concepto", "Estado", "Importe"],
            rows: [
              "Compra · Hoy",
              "Transferencia · Ayer",
              "Servicio · 12 sep",
              "Ingreso · 10 sep",
              "Compra · 08 sep",
            ],
          }),
        ],
        [
          block("menu", "Cuentas", {
            items: ["Todas", "Principal", "Ahorro", "Tarjetas"],
          }),
          block("bankCard", "Tarjeta principal"),
        ],
      ),
    ],
  },
  "project-management-productivity": {
    nav: ["Mi trabajo", "Proyectos", "Actividad"],
    icon: "layout",
    views: [
      view(
        "board",
        "Organizar",
        "sidebar",
        [
          block("chips", "Proyecto", {
            items: ["Tablero", "Lista", "Calendario"],
          }),
          block("board", "Lanzamiento", {
            items: ["Pendiente", "En curso", "Completado"],
          }),
        ],
        [
          block("menu", "Espacio de trabajo", {
            items: ["Mi trabajo", "Lanzamiento", "Diseño", "Desarrollo"],
          }),
        ],
      ),
      view(
        "task",
        "Resolver trabajo",
        "split",
        [
          block("task", "Preparar lanzamiento", {
            action: "Marcar completado",
          }),
          block("thread", "Actividad", { count: 3 }),
          block("composer", "Escribir comentario"),
        ],
        [
          block("properties", "Propiedades", {
            items: [
              "Estado|En curso",
              "Responsable|Ana",
              "Fecha|18 sep",
              "Prioridad|Alta",
            ],
          }),
          block("checklist", "Subtareas", {
            items: ["Revisar diseño", "Validar contenido", "Publicar"],
          }),
        ],
      ),
      view("plan", "Planificar", "wide", [
        block("chips", "Equipo", { items: ["Semana", "Mes", "Responsables"] }),
        block("calendar", "Septiembre", { events: true }),
        block("timeline", "Hitos", {
          items: ["Diseño", "Desarrollo", "Revisión", "Lanzamiento"],
        }),
      ]),
    ],
  },
  "social-network-community": {
    nav: ["Inicio", "Explorar", "Comunidades"],
    icon: "users",
    views: [
      view(
        "feed",
        "Descubrir personas",
        "split",
        [
          block("stories", "Tus comunidades"),
          block("composer", "Comparte algo"),
          block("post", "Una nueva perspectiva", { art: "image" }),
          block("post", "Ideas que conectan", { compact: true }),
        ],
        [
          block("contacts", "Personas para seguir", { action: "Seguir" }),
          block("chips", "Temas", {
            items: ["Diseño", "Cultura", "Tecnología"],
          }),
        ],
      ),
      view(
        "conversation",
        "Conversar",
        "split",
        [
          block("post", "Una nueva perspectiva", { art: "image" }),
          block("thread", "Respuestas", { count: 3 }),
          block("composer", "Tu respuesta"),
        ],
        [
          block("profile", "Autora", { action: "Seguir" }),
          block("menu", "Comunidad", {
            items: ["Publicaciones", "Miembros", "Normas"],
          }),
        ],
      ),
      view(
        "publish",
        "Crear y compartir",
        "split",
        [
          block("form", "Nueva publicación", { fields: ["Título"] }),
          block("upload", "Foto o vídeo", { art: "image" }),
          block("composer", "Añade tu historia"),
          block("action", "Publicar"),
        ],
        [
          block("properties", "Visibilidad", {
            items: [
              "Audiencia|Comunidad",
              "Comentarios|Permitidos",
              "Ubicación|Oculta",
            ],
          }),
          block("profile", "Tu perfil"),
        ],
      ),
    ],
  },
  "messaging-communication": {
    nav: ["Chats", "Contactos", "Llamadas"],
    icon: "message",
    views: [
      view(
        "inbox",
        "Conversaciones",
        "sidebar",
        [
          block("profile", "Equipo de diseño", {
            detail: "4 miembros · En línea",
          }),
          block("chat", "Conversación", { count: 5 }),
          block("composer", "Mensaje"),
        ],
        [
          block("search", "Buscar chat"),
          block("inbox", "Mensajes", {
            items: ["Equipo de diseño", "Ana", "Luis", "Proyecto nuevo"],
          }),
        ],
      ),
      view(
        "context",
        "Buscar y retomar",
        "split",
        [
          block("search", "Buscar en la conversación"),
          block("chat", "Resultados", { count: 3 }),
          block("files", "Archivos compartidos"),
        ],
        [
          block("profile", "Equipo de diseño"),
          block("properties", "Conversación", {
            items: ["Notificaciones|Activadas", "Archivos|12", "Enlaces|8"],
          }),
        ],
      ),
      view("call", "Conectar", "wide", [
        block("call", "Llamada de equipo"),
        block("contacts", "Participantes"),
        block("composer", "Enviar un mensaje al grupo"),
      ]),
    ],
  },
  "education-learning": {
    nav: ["Mi aprendizaje", "Cursos", "Guardados"],
    icon: "book",
    views: [
      view("learn", "Continuar aprendiendo", "wide", [
        block("hero", "Tu siguiente lección", {
          art: "book",
          tag: "CURSO EN PROGRESO",
          action: "Continuar",
        }),
        block("rail", "Tus cursos", { art: "book", progress: true, count: 3 }),
        block("rail", "Explora algo nuevo", { art: "book", count: 4 }),
      ]),
      view(
        "lesson",
        "Aprender",
        "split",
        [
          block("player", "Lección 04 · Aplicación práctica", { art: "book" }),
          block("chips", "Material", {
            items: ["Resumen", "Notas", "Recursos"],
          }),
          block("article", "Conceptos clave", { compact: true }),
          block("action", "Siguiente lección"),
        ],
        [
          block("checklist", "Contenido del curso", {
            items: [
              "Introducción",
              "Fundamentos",
              "Ejemplos",
              "Aplicación",
              "Evaluación",
            ],
          }),
        ],
      ),
      view(
        "practice",
        "Practicar y avanzar",
        "split",
        [
          block("quiz", "Ponlo en práctica", {
            items: ["Opción A", "Opción B", "Opción C"],
            action: "Comprobar",
          }),
          block("progress", "Tu progreso", { value: "4 de 6 lecciones" }),
        ],
        [
          block("timeline", "Ruta", {
            items: ["Aprender", "Practicar", "Evaluar", "Completar"],
          }),
          block("metrics", "Esta semana", {
            items: ["Sesiones|4", "Aprendido|80%"],
          }),
        ],
      ),
    ],
  },
  "health-fitness": {
    nav: ["Hoy", "Mi plan", "Progreso"],
    icon: "heart",
    views: [
      view(
        "today",
        "Tu día",
        "split",
        [
          block("rings", "Objetivos de hoy"),
          block("workout", "Entrenamiento de hoy", {
            action: "Comenzar",
            art: "activity",
          }),
          block("metrics", "Registro", {
            items: ["Actividad|35 min", "Descanso|7 h 40"],
          }),
        ],
        [
          block("calendar", "Tu semana", { compact: true }),
          block("checklist", "Hábitos", {
            items: ["Movimiento", "Hidratación", "Descanso"],
          }),
        ],
      ),
      view(
        "session",
        "Entrenar",
        "split",
        [
          block("player", "Sesión guiada", { art: "activity" }),
          block("timer", "Tiempo restante", { value: "00:45" }),
          block("action", "Siguiente ejercicio"),
        ],
        [
          block("checklist", "Tu rutina", {
            items: [
              "Calentamiento",
              "Movimiento 1",
              "Movimiento 2",
              "Recuperación",
            ],
          }),
          block("metrics", "Sesión", {
            items: ["Series|3 / 4", "Duración|20 min"],
          }),
        ],
      ),
      view("progress", "Ver evolución", "wide", [
        block("chips", "Periodo", { items: ["Semana", "Mes", "Año"] }),
        block("chart", "Evolución personal"),
        block("metrics", "Tus logros", {
          items: ["Sesiones|12", "Constancia|4 semanas", "Objetivo|80%"],
        }),
        block("calendar", "Historial de actividad", { events: true }),
      ]),
    ],
  },
  "travel-booking": {
    nav: ["Explorar", "Guardados", "Mis viajes"],
    icon: "plane",
    views: [
      view(
        "search",
        "Encontrar estancia",
        "split",
        [
          block("search", "Destino · Fechas · Viajeros"),
          block("chips", "Preferencias", {
            items: ["Precio", "Servicios", "Cancelación"],
          }),
          block("grid", "Estancias para ti", {
            art: "stay",
            count: 4,
            price: true,
            detail: "4,8 ★ · / noche",
          }),
        ],
        [block("map", "Ubicación de estancias", { pins: true })],
      ),
      view(
        "stay",
        "Evaluar estancia",
        "split",
        [
          block("gallery", "Tu próxima escapada", { art: "stay" }),
          block("categories", "Servicios", {
            items: ["Wifi", "Cocina", "Parking"],
            art: "stay",
          }),
          block("reviews", "Reseñas"),
        ],
        [
          block("receipt", "Reserva", {
            items: [
              "Fechas|18–21 sep",
              "Viajeros|2",
              "Noches|3 × $120",
              "Total|$360",
            ],
            action: "Reservar",
          }),
          block("calendar", "Disponibilidad", { compact: true }),
        ],
      ),
      view(
        "booking",
        "Reservar y viajar",
        "split",
        [
          block("steps", "Tu reserva", {
            items: ["Datos", "Pago", "Confirmación"],
          }),
          block("form", "Datos del viajero", {
            fields: ["Nombre", "Email", "Teléfono"],
          }),
          block("payment", "Pago", { action: "Confirmar reserva" }),
        ],
        [
          block("receipt", "Tu viaje", {
            items: [
              "Llegada|18 sep",
              "Salida|21 sep",
              "Viajeros|2",
              "Total|$360",
            ],
          }),
          block("trust", "Condiciones · Cancelación · Ayuda"),
        ],
      ),
    ],
  },
  marketplace: {
    nav: ["Explorar", "Guardados", "Mensajes"],
    icon: "bag",
    views: [
      view(
        "offers",
        "Comparar ofertas",
        "sidebar",
        [
          block("search", "Producto o servicio"),
          block("grid", "Ofertas cerca de ti", {
            art: "bag",
            count: 6,
            price: true,
            seller: true,
          }),
        ],
        [
          block("filters", "Filtrar", {
            items: ["Categoría", "Ubicación", "Precio", "Estado", "Vendedor"],
          }),
        ],
      ),
      view(
        "seller",
        "Confiar y contactar",
        "split",
        [
          block("gallery", "Una pieza especial", { art: "bag" }),
          block("properties", "Detalles", {
            items: ["Estado|Como nuevo", "Ubicación|Cerca de ti", "Precio|$85"],
          }),
          block("reviews", "Experiencias de compradores"),
        ],
        [
          block("profile", "Vendedor verificado", {
            detail: "4,9 ★ · 32 ventas",
            action: "Contactar",
          }),
          block("action", "Comprar con protección"),
          block("trust", "Pago protegido · Ayuda"),
        ],
      ),
      view(
        "purchase",
        "Acordar y comprar",
        "split",
        [
          block("chat", "Conversación con el vendedor", { count: 3 }),
          block("composer", "Preguntar por el artículo"),
          block("payment", "Pago protegido", { action: "Confirmar compra" }),
        ],
        [
          block("cart", "Artículo acordado", {
            count: 1,
            art: "bag",
            total: "$85",
          }),
          block("timeline", "Compra", {
            items: ["Acuerdo", "Pago", "Entrega", "Valoración"],
          }),
        ],
      ),
    ],
  },
  "saas-dashboard-administration": {
    nav: ["Resumen", "Registros", "Equipo"],
    icon: "layout",
    views: [
      view(
        "overview",
        "Supervisar",
        "sidebar",
        [
          block("metrics", "Visión general", {
            items: ["Activos|1.284", "Pendientes|24", "Incidencias|3"],
          }),
          block("chart", "Actividad"),
          block("table", "Requieren atención", {
            columns: ["Registro", "Estado", "Responsable"],
            rows: ["Solicitud 104", "Solicitud 108", "Solicitud 112"],
          }),
        ],
        [
          block("menu", "Workspace", {
            items: ["Resumen", "Registros", "Informes", "Equipo", "Ajustes"],
          }),
        ],
      ),
      view("records", "Operar", "wide", [
        block("search", "Buscar registros"),
        block("chips", "Filtros", {
          items: ["Todos", "Pendientes", "Asignados a mí"],
        }),
        block("table", "Registros", {
          columns: ["Nombre", "Estado", "Responsable", "Fecha"],
          rows: [
            "Registro 01",
            "Registro 02",
            "Registro 03",
            "Registro 04",
            "Registro 05",
          ],
        }),
        block("action", "Actualizar selección"),
      ]),
      view(
        "manage",
        "Administrar",
        "split",
        [
          block("form", "Configuración del espacio", {
            fields: ["Nombre", "Dominio"],
          }),
          block("table", "Miembros y permisos", {
            columns: ["Persona", "Rol", "Acceso"],
            rows: ["Ana", "Luis", "María"],
          }),
          block("action", "Guardar cambios"),
        ],
        [
          block("properties", "Plan y uso", {
            items: ["Plan|Equipo", "Miembros|8 / 12", "Almacenamiento|64%"],
          }),
          block("checklist", "Permisos", {
            items: ["Ver registros", "Editar", "Administrar"],
          }),
        ],
      ),
    ],
  },
  "news-editorial": {
    nav: ["Actualidad", "Cultura", "Opinión"],
    icon: "news",
    views: [
      view(
        "frontpage",
        "Portada",
        "editorial",
        [
          block("headline", "El contexto detrás de la noticia", {
            art: "news",
          }),
          block("rail", "Más historias", { art: "news", count: 3 }),
        ],
        [block("newsList", "Última hora", { count: 4 })],
      ),
      view(
        "read",
        "Leer con contexto",
        "reading",
        [
          block("article", "Una historia que merece tiempo", { art: "news" }),
          block("rail", "Para entender más", { art: "news", count: 3 }),
        ],
        [
          block("profile", "La autora", { detail: "Redacción · 15 sep" }),
          block("newsList", "En esta historia", { count: 3 }),
        ],
      ),
      view(
        "follow",
        "Seguir temas",
        "sidebar",
        [
          block("search", "Buscar un tema"),
          block("chips", "Tus intereses", {
            items: ["Cultura", "Ciencia", "Tecnología"],
          }),
          block("newsList", "Novedades de tus temas", { count: 5 }),
          block("rail", "Guardado para leer", { art: "news", count: 3 }),
        ],
        [
          block("menu", "Tu lectura", {
            items: ["Mis temas", "Guardados", "Historial", "Autores"],
          }),
        ],
      ),
    ],
  },
  "music-audio": {
    nav: ["Inicio", "Explorar", "Biblioteca"],
    icon: "music",
    persistent: "audio",
    views: [
      view(
        "discover",
        "Descubrir audio",
        "sidebar",
        [
          block("hero", "Tu mezcla de hoy", {
            art: "music",
            tag: "HECHO PARA TI",
            action: "Escuchar",
          }),
          block("rail", "Vuelve a escuchar", { art: "music", count: 4 }),
          block("rail", "Nuevas voces", { art: "music", count: 4 }),
        ],
        [
          block("menu", "Tu biblioteca", {
            items: ["Favoritos", "Playlists", "Artistas", "Podcasts"],
          }),
        ],
      ),
      view(
        "playlist",
        "Escuchar",
        "split",
        [
          block("album", "Una playlist para ti", {
            art: "music",
            action: "Reproducir",
          }),
          block("tracks", "Canciones", { count: 5 }),
        ],
        [block("tracks", "A continuación", { count: 4 })],
      ),
      view(
        "library",
        "Organizar biblioteca",
        "sidebar",
        [
          block("search", "Buscar en biblioteca"),
          block("chips", "Colecciones", {
            items: ["Playlists", "Álbumes", "Artistas"],
          }),
          block("grid", "Tu música", { art: "music", count: 6 }),
        ],
        [
          block("menu", "Biblioteca", {
            items: ["Recientes", "Favoritos", "Descargados", "Crear playlist"],
          }),
        ],
      ),
    ],
  },
  "transportation-ride-hailing": {
    nav: ["Viajar", "Actividad", "Cuenta"],
    icon: "car",
    views: [
      view(
        "route",
        "Definir trayecto",
        "split",
        [block("map", "Tu trayecto", { route: true })],
        [
          block("form", "¿A dónde vamos?", {
            fields: ["Punto de recogida", "Destino"],
          }),
          block("location", "Casa", { detail: "Destino guardado" }),
          block("action", "Ver opciones"),
        ],
      ),
      view(
        "service",
        "Elegir servicio",
        "split",
        [
          block("map", "Ruta estimada", { route: true }),
          block("chips", "Salida", { items: ["Ahora", "Programar"] }),
        ],
        [
          block("rides", "Opciones de viaje", {
            items: [
              "Estándar|4 min · $8",
              "Confort|6 min · $12",
              "XL|8 min · $16",
            ],
          }),
          block("action", "Confirmar recogida"),
        ],
      ),
      view(
        "trip",
        "Seguir tu viaje",
        "split",
        [
          block("map", "Tu conductor está cerca", { route: true }),
          block("timeline", "Tu viaje", {
            items: ["Asignado", "En camino", "A bordo", "Llegada"],
          }),
        ],
        [
          block("profile", "Tu conductor", {
            detail: "ABC 123 · 4,9 ★",
            action: "Contactar",
          }),
          block("metrics", "Llegada", {
            items: ["Recogida|3 min", "Destino|18 min"],
          }),
          block("trust", "Compartir viaje · Seguridad · Ayuda"),
        ],
      ),
    ],
  },
};
