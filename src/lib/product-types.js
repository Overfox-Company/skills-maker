/**
 * @typedef {Object} ProductDefinition
 * @property {string} id
 * @property {string} label
 * @property {string} description
 * @property {string} primaryObjective
 * @property {string[]} uxPriorities
 * @property {string[]} informationHierarchy
 * @property {string[]} navigationPrinciples
 * @property {string[]} interactionPrinciples
 * @property {string[]} contentPrinciples
 * @property {string[]} primaryActions
 * @property {string[]} discoveryPatterns
 * @property {string[]} trustAndSafetyConsiderations
 * @property {string[]} commonPatterns
 * @property {string[]} patternsToAvoid
 */

const freezeDefinition = (definition) =>
  Object.freeze(
    Object.fromEntries(
      Object.entries(definition).map(([key, value]) => [
        key,
        Array.isArray(value) ? Object.freeze(value) : value,
      ]),
    ),
  );

/** @type {readonly ProductDefinition[]} */
export const productTypes = Object.freeze(
  [
    {
      id: "ecommerce",
      label: "E-commerce",
      description: "Descubrimiento, comparación y compra de productos.",
      primaryObjective:
        "Permitir encontrar, evaluar y comprar productos con la menor fricción posible.",
      uxPriorities: [
        "Descubrimiento de productos",
        "Búsqueda, categorías y filtros",
        "Comparación de opciones",
        "Precio, disponibilidad y variantes",
        "Confianza de compra",
        "Carrito y eficiencia del checkout",
      ],
      informationHierarchy: [
        "Producto",
        "Precio",
        "Disponibilidad",
        "Acción de compra",
        "Características principales",
        "Información secundaria",
      ],
      navigationPrinciples: [
        "Mantener búsqueda, categorías y carrito accesibles desde las vistas de descubrimiento.",
        "Conservar filtros, orden y posición cuando el usuario abre un producto y regresa al listado.",
        "Separar con claridad exploración, evaluación del producto, carrito y checkout.",
      ],
      interactionPrinciples: [
        "Permitir elegir variantes y cantidad sin perder precio ni disponibilidad.",
        "Minimizar pasos y entradas repetidas durante el checkout.",
        "Dar feedback inmediato al añadir, quitar o actualizar productos del carrito.",
      ],
      contentPrinciples: [
        "Exponer precio y disponibilidad sin exigir abrir cada producto.",
        "Hacer que imágenes y atributos principales faciliten el escaneo y la comparación.",
        "Mantener información secundaria fuera del camino de la decisión principal.",
      ],
      primaryActions: [
        "Buscar productos",
        "Filtrar y comparar",
        "Seleccionar variantes",
        "Añadir al carrito",
        "Completar la compra",
      ],
      discoveryPatterns: [
        "Búsqueda predictiva",
        "Categorías y colecciones",
        "Filtros facetados",
        "Recomendaciones relacionadas",
        "Historial y productos vistos recientemente",
      ],
      trustAndSafetyConsiderations: [
        "Mostrar costes totales, entrega y condiciones antes de confirmar.",
        "Hacer visibles devoluciones, garantías, reseñas y señales de autenticidad.",
        "No preseleccionar extras de pago ni ocultar cambios de precio.",
      ],
      commonPatterns: [
        "Resultados de producto escaneables",
        "Detalle con compra claramente reconocible",
        "Carrito persistente",
        "Checkout progresivo con resumen",
      ],
      patternsToAvoid: [
        "Ocultar el precio o la disponibilidad hasta fases tardías.",
        "Saturar las tarjetas con información secundaria.",
        "Perder filtros o selección al navegar.",
        "Introducir pasos de checkout que no aportan confianza ni información.",
      ],
    },
    {
      id: "video-streaming",
      label: "Video Streaming",
      description: "Descubrimiento visual, continuidad y reproducción.",
      primaryObjective:
        "Permitir descubrir contenido y comenzar o continuar su reproducción rápidamente.",
      uxPriorities: [
        "Descubrimiento visual",
        "Recomendaciones relevantes",
        "Continuar viendo",
        "Colecciones y biblioteca",
        "Reproducción",
        "Historial y progreso",
      ],
      informationHierarchy: [
        "Artwork o miniatura",
        "Título",
        "Contexto o relevancia",
        "Acción de reproducción",
        "Metadata esencial",
        "Acciones secundarias",
      ],
      navigationPrinciples: [
        "Priorizar recorridos visuales por colecciones sin perder el contexto de exploración.",
        "Dar acceso inmediato al contenido incompleto de usuarios recurrentes.",
        "Mantener biblioteca, búsqueda y perfiles previsibles entre dispositivos.",
      ],
      interactionPrinciples: [
        "Iniciar o reanudar reproducción con mínima fricción.",
        "Conservar progreso y estado al cambiar de dispositivo o salir del reproductor.",
        "Permitir guardar, valorar o consultar detalles sin interrumpir innecesariamente la exploración.",
      ],
      contentPrinciples: [
        "Usar artwork y títulos como señales principales durante la exploración.",
        "Mostrar solo la metadata necesaria para decidir antes de reproducir.",
        "Explicar por qué una recomendación es relevante cuando aporte valor.",
      ],
      primaryActions: [
        "Reproducir",
        "Continuar viendo",
        "Buscar contenido",
        "Guardar en la biblioteca",
        "Explorar una colección",
      ],
      discoveryPatterns: [
        "Filas o colecciones temáticas",
        "Recomendaciones personalizadas",
        "Tendencias y novedades",
        "Búsqueda por título, género o participante",
        "Contenido relacionado al finalizar",
      ],
      trustAndSafetyConsiderations: [
        "Distinguir perfiles, controles parentales y clasificación por edad.",
        "Comunicar disponibilidad regional, expiración y restricciones antes de reproducir.",
        "Ofrecer control claro sobre historial y personalización.",
      ],
      commonPatterns: [
        "Continuar viendo",
        "Colecciones navegables",
        "Detalle de contenido",
        "Reproductor inmersivo con controles contextuales",
      ],
      patternsToAvoid: [
        "Sobrecargar la exploración con metadata extensa.",
        "Ocultar el contenido incompleto dentro del catálogo.",
        "Perder la posición de exploración al consultar detalles.",
        "Forzar pasos promocionales antes de cada reproducción.",
      ],
    },
    {
      id: "delivery-food-ordering",
      label: "Delivery / Food Ordering",
      description: "Exploración local, pedido rápido y seguimiento.",
      primaryObjective:
        "Permitir encontrar qué pedir y completar un pedido rápidamente.",
      uxPriorities: [
        "Ubicación y dirección",
        "Disponibilidad local",
        "Restaurantes, productos y categorías",
        "Tiempo estimado y precio",
        "Carrito",
        "Seguimiento del pedido",
      ],
      informationHierarchy: [
        "Disponibilidad para la ubicación actual",
        "Opción de comida o comercio",
        "Tiempo estimado",
        "Precio y costes",
        "Acción de añadir o pedir",
        "Detalles y personalización",
      ],
      navigationPrinciples: [
        "Mantener ubicación y dirección visibles antes de explorar opciones.",
        "Separar claramente descubrimiento, configuración del pedido, compra y seguimiento.",
        "Conservar el carrito y su comercio asociado durante la navegación.",
      ],
      interactionPrinciples: [
        "Hacer sencilla la personalización de productos y la elección de modificadores.",
        "Actualizar totales, mínimos y tiempo estimado al cambiar el pedido.",
        "Adaptar las acciones principales al estado actual del pedido.",
      ],
      contentPrinciples: [
        "Mostrar disponibilidad real, tiempo y costes antes de invertir en la selección.",
        "Presentar productos de forma escaneable y agruparlos por categorías comprensibles.",
        "Explicar sustituciones, alérgenos y opciones con lenguaje inequívoco.",
      ],
      primaryActions: [
        "Confirmar ubicación",
        "Explorar comercios o platos",
        "Personalizar y añadir",
        "Confirmar pedido",
        "Seguir entrega",
      ],
      discoveryPatterns: [
        "Opciones cercanas y disponibles",
        "Categorías de comida",
        "Búsqueda por comercio o producto",
        "Filtros por tiempo, precio y preferencias",
        "Repetir pedidos anteriores",
      ],
      trustAndSafetyConsiderations: [
        "Mostrar desglose completo de precio, tarifas y propina antes de confirmar.",
        "Mantener visibles restricciones alimentarias y advertencias relevantes.",
        "Proteger dirección, ubicación y contacto durante el seguimiento.",
      ],
      commonPatterns: [
        "Selector de dirección",
        "Menú por categorías",
        "Carrito persistente",
        "Timeline de estado del pedido",
      ],
      patternsToAvoid: [
        "Mostrar opciones que no entregan en la ubicación seleccionada.",
        "Ocultar tarifas hasta el último paso.",
        "Perder personalizaciones al editar el carrito.",
        "Mezclar exploración y seguimiento durante un pedido activo.",
      ],
    },
    {
      id: "finance-banking",
      label: "Finance / Banking",
      description: "Comprensión financiera, supervisión y acciones seguras.",
      primaryObjective:
        "Permitir comprender el estado financiero y ejecutar operaciones con seguridad.",
      uxPriorities: [
        "Balances y disponibilidad",
        "Movimientos y obligaciones",
        "Tendencias financieras",
        "Acciones financieras",
        "Claridad de estado",
        "Seguridad y confirmación",
      ],
      informationHierarchy: [
        "Estado financiero actual",
        "Cifras relevantes y su significado",
        "Cambios o movimientos recientes",
        "Obligaciones y alertas",
        "Acciones disponibles",
        "Detalle histórico",
      ],
      navigationPrinciples: [
        "Separar la visión general de cuentas, movimientos, operaciones y configuración.",
        "Mantener visible la cuenta y el periodo que contextualizan cada cifra.",
        "Ofrecer caminos directos desde una anomalía o alerta hacia su explicación.",
      ],
      interactionPrinciples: [
        "Mostrar importe, destino, comisiones y resultado antes de confirmar una operación crítica.",
        "Requerir confirmación proporcional al riesgo sin añadir fricción arbitraria.",
        "Diferenciar con claridad información, recomendación y acción ejecutable.",
      ],
      contentPrinciples: [
        "Distinguir saldo, disponible, deuda, ingresos y gastos con etiquetas inequívocas.",
        "Acompañar cifras con moneda, periodo y estado.",
        "Usar gráficos solo cuando mejoren la interpretación de una tendencia o comparación.",
      ],
      primaryActions: [
        "Consultar saldos y movimientos",
        "Transferir o pagar",
        "Revisar una alerta",
        "Gestionar métodos y límites",
        "Descargar comprobantes",
      ],
      discoveryPatterns: [
        "Resumen financiero",
        "Actividad reciente",
        "Búsqueda y filtros de movimientos",
        "Alertas accionables",
        "Análisis temporal bajo demanda",
      ],
      trustAndSafetyConsiderations: [
        "Enmascarar datos sensibles y revelar detalle solo cuando sea necesario.",
        "Hacer explícitos destinatario, comisiones, fecha y reversibilidad.",
        "Explicar bloqueos, errores y controles de seguridad con próximos pasos.",
      ],
      commonPatterns: [
        "Resumen de cuentas",
        "Ledger de movimientos",
        "Flujo de operación con revisión final",
        "Recibo o confirmación verificable",
      ],
      patternsToAvoid: [
        "Mezclar saldos de distinta naturaleza sin contexto.",
        "Usar gráficos decorativos o dashboards saturados.",
        "Ejecutar acciones críticas sin revisión del resultado esperado.",
        "Ocultar comisiones, plazos o estados pendientes.",
      ],
    },
    {
      id: "project-management-productivity",
      label: "Project Management / Productivity",
      description: "Organización del trabajo, estado y edición eficiente.",
      primaryObjective:
        "Permitir organizar trabajo, visualizar su estado y actualizar información rápidamente.",
      uxPriorities: [
        "Proyectos y tareas",
        "Estados, responsables y fechas",
        "Filtros y búsqueda",
        "Progreso y dependencias",
        "Edición rápida",
        "Organización de alto volumen",
      ],
      informationHierarchy: [
        "Unidad de trabajo y estado",
        "Responsable y próxima fecha relevante",
        "Prioridad y progreso",
        "Contexto del proyecto",
        "Dependencias y actividad",
        "Metadata secundaria",
      ],
      navigationPrinciples: [
        "Mantener navegación persistente entre espacios, proyectos y vistas de trabajo.",
        "Conservar filtros, agrupaciones y orden al consultar un elemento y regresar.",
        "Ofrecer vistas de lista, tablero, calendario o timeline cuando respondan a tareas distintas.",
      ],
      interactionPrinciples: [
        "Permitir edición en contexto para cambios frecuentes.",
        "Mantener acciones contextuales cerca del elemento sin dominar la información.",
        "Soportar selección y acciones masivas cuando reduzcan trabajo repetitivo.",
      ],
      contentPrinciples: [
        "Favorecer alta densidad legible y escaneo de estados.",
        "Usar nombres, estados y fechas consistentes en todas las vistas.",
        "Priorizar excepciones, bloqueos y próximos vencimientos sobre actividad rutinaria.",
      ],
      primaryActions: [
        "Crear trabajo",
        "Cambiar estado o responsable",
        "Filtrar y buscar",
        "Organizar y priorizar",
        "Revisar progreso",
      ],
      discoveryPatterns: [
        "Búsqueda global",
        "Filtros guardados",
        "Vistas agrupadas",
        "Actividad reciente",
        "Trabajo asignado o próximo",
      ],
      trustAndSafetyConsiderations: [
        "Comunicar alcance y consecuencias de acciones masivas.",
        "Preservar historial, autoría y cambios relevantes.",
        "Evitar pérdida silenciosa durante edición simultánea o cambios de estado.",
      ],
      commonPatterns: [
        "Lista o tabla densa",
        "Tablero por estados",
        "Panel de detalle editable",
        "Filtros persistentes",
      ],
      patternsToAvoid: [
        "Obligar a abrir pantallas separadas para cambios pequeños y repetitivos.",
        "Ocultar filtros activos o el alcance de una vista.",
        "Usar baja densidad para grandes volúmenes de trabajo.",
        "Presentar actividad como sustituto del estado actual.",
      ],
    },
    {
      id: "social-network-community",
      label: "Social Network / Community",
      description: "Contenido, relaciones, interacción y publicación.",
      primaryObjective:
        "Permitir consumir contenido, interactuar con personas o comunidades y publicar.",
      uxPriorities: [
        "Feed y contenido",
        "Identidad del autor",
        "Interacción social",
        "Creación de contenido",
        "Comunidades y relaciones",
        "Notificaciones relevantes",
      ],
      informationHierarchy: [
        "Contenido",
        "Autor y contexto de publicación",
        "Relación o comunidad",
        "Acciones sociales",
        "Conversación asociada",
        "Controles secundarios",
      ],
      navigationPrinciples: [
        "Separar contenido de relaciones existentes, descubrimiento y comunidades.",
        "Mantener accesibles creación, notificaciones y perfil sin competir con el feed.",
        "Preservar el contexto al abrir conversaciones o perfiles desde una publicación.",
      ],
      interactionPrinciples: [
        "Ubicar acciones sociales próximas al contenido al que afectan.",
        "Hacer accesible la creación sin interrumpir el consumo involuntariamente.",
        "Mostrar el resultado y la reversibilidad de reacciones, seguimiento y guardado.",
      ],
      contentPrinciples: [
        "Mantener el contenido como protagonista y la identidad del autor reconocible.",
        "Diferenciar claramente contenido original, compartido, patrocinado y moderado.",
        "Colapsar contexto secundario sin ocultar señales de procedencia o seguridad.",
      ],
      primaryActions: [
        "Consumir contenido",
        "Publicar",
        "Responder o reaccionar",
        "Seguir personas o comunidades",
        "Gestionar notificaciones",
      ],
      discoveryPatterns: [
        "Feed de relaciones",
        "Exploración temática",
        "Comunidades sugeridas",
        "Búsqueda de personas y contenido",
        "Conversaciones relacionadas",
      ],
      trustAndSafetyConsiderations: [
        "Ofrecer reportar, bloquear, silenciar y controlar audiencia cerca del contexto relevante.",
        "Explicar visibilidad, moderación y uso de recomendaciones.",
        "Evitar exponer información privada al publicar o compartir.",
      ],
      commonPatterns: [
        "Feed",
        "Composer",
        "Hilos de conversación",
        "Perfiles y comunidades",
      ],
      patternsToAvoid: [
        "Permitir que controles secundarios dominen cada publicación.",
        "Mezclar contenido patrocinado sin identificación.",
        "Ocultar el alcance de una publicación.",
        "Usar notificaciones indiferenciadas para forzar reentrada.",
      ],
    },
    {
      id: "messaging-communication",
      label: "Messaging / Communication",
      description: "Conversaciones continuas y respuesta con mínima fricción.",
      primaryObjective:
        "Permitir mantener conversaciones con mínima fricción y contexto completo.",
      uxPriorities: [
        "Conversaciones recientes",
        "Mensajes y estados no leídos",
        "Búsqueda",
        "Composer",
        "Multimedia y archivos",
        "Continuidad entre dispositivos",
      ],
      informationHierarchy: [
        "Conversación activa",
        "Mensajes nuevos y menciones",
        "Autor y tiempo",
        "Composer y acción de enviar",
        "Contexto respondido o citado",
        "Acciones secundarias",
      ],
      navigationPrinciples: [
        "Ordenar conversaciones por relevancia reciente y distinguir las no leídas.",
        "Mantener contexto al alternar entre lista, conversación, hilo y búsqueda.",
        "Hacer accesible la creación de una conversación sin desplazar las activas.",
      ],
      interactionPrinciples: [
        "Mantener el composer accesible y reducir los pasos para responder.",
        "Integrar multimedia, reacciones y respuestas sin interferir con la lectura.",
        "Indicar envío, entrega, lectura, edición y error de forma inequívoca.",
      ],
      contentPrinciples: [
        "Conservar agrupación temporal, autoría y relación entre respuestas.",
        "Diferenciar mensajes del sistema, contenido citado y contenido nuevo.",
        "Permitir escanear mensajes no leídos antes de recuperar el historial completo.",
      ],
      primaryActions: [
        "Leer y responder",
        "Iniciar conversación",
        "Buscar mensajes",
        "Compartir archivos o multimedia",
        "Gestionar menciones y no leídos",
      ],
      discoveryPatterns: [
        "Conversaciones recientes",
        "Búsqueda global y dentro de la conversación",
        "Menciones y mensajes guardados",
        "Personas o canales frecuentes",
        "Archivos compartidos",
      ],
      trustAndSafetyConsiderations: [
        "Hacer claros participantes, privacidad y cifrado cuando corresponda.",
        "Permitir bloquear, reportar y controlar invitaciones.",
        "Evitar envíos accidentales de contenido sensible o a destinatarios equivocados.",
      ],
      commonPatterns: [
        "Lista de conversaciones",
        "Timeline de mensajes",
        "Composer persistente",
        "Hilos y respuestas contextuales",
      ],
      patternsToAvoid: [
        "Ocultar mensajes no leídos dentro de actividad general.",
        "Alejar el composer de la conversación activa.",
        "Interrumpir el flujo con acciones secundarias prominentes.",
        "Perder borradores o posición de lectura al cambiar de conversación.",
      ],
    },
    {
      id: "education-learning",
      label: "Education / Learning",
      description: "Progresión, aprendizaje activo y continuidad.",
      primaryObjective:
        "Permitir aprender contenido siguiendo una progresión clara y comprobable.",
      uxPriorities: [
        "Curso, módulo y lección",
        "Progreso",
        "Siguiente acción",
        "Ejercicios y evaluación",
        "Recursos",
        "Continuidad del aprendizaje",
      ],
      informationHierarchy: [
        "Contenido o actividad actual",
        "Objetivo de aprendizaje",
        "Progreso y posición",
        "Siguiente acción",
        "Apoyo y recursos",
        "Información administrativa",
      ],
      navigationPrinciples: [
        "Hacer explícita la relación curso-módulo-lección y la posición actual.",
        "Favorecer navegación secuencial sin impedir volver a contenidos previos.",
        "Mantener accesibles progreso, índice y siguiente paso.",
      ],
      interactionPrinciples: [
        "Separar consumo de contenido, práctica y evaluación.",
        "Guardar progreso y respuestas para permitir continuar sin reconstruir contexto.",
        "Dar feedback específico y accionable tras actividades de aprendizaje.",
      ],
      contentPrinciples: [
        "Reducir distracciones durante el aprendizaje concentrado.",
        "Dividir contenido complejo según objetivos, no por tamaños arbitrarios.",
        "Mantener recursos secundarios disponibles sin competir con la lección.",
      ],
      primaryActions: [
        "Continuar aprendiendo",
        "Completar una actividad",
        "Consultar progreso",
        "Revisar feedback",
        "Acceder a recursos",
      ],
      discoveryPatterns: [
        "Continuar donde se dejó",
        "Rutas o planes de aprendizaje",
        "Catálogo por nivel y objetivo",
        "Recomendaciones basadas en progreso",
        "Búsqueda de recursos",
      ],
      trustAndSafetyConsiderations: [
        "Distinguir progreso, calificación y recomendación.",
        "Explicar criterios de evaluación y consecuencias de los intentos.",
        "Proteger datos de menores y registros académicos cuando corresponda.",
      ],
      commonPatterns: [
        "Índice curricular",
        "Lección enfocada",
        "Indicador de progreso",
        "Evaluación con feedback",
      ],
      patternsToAvoid: [
        "Ocultar qué debe hacerse después.",
        "Mezclar evaluación con contenido sin transición clara.",
        "Usar gamificación que compita con el aprendizaje.",
        "Perder progreso o respuestas al navegar.",
      ],
    },
    {
      id: "health-fitness",
      label: "Health / Fitness",
      description: "Registro, progreso, objetivos y datos sensibles.",
      primaryObjective:
        "Permitir registrar actividad y comprender la evolución respecto a objetivos personales.",
      uxPriorities: [
        "Estado actual",
        "Registro de actividad",
        "Objetivos",
        "Progreso",
        "Tendencias temporales",
        "Actividades y recomendaciones",
      ],
      informationHierarchy: [
        "Estado o actividad actual",
        "Métrica principal con contexto",
        "Progreso hacia el objetivo",
        "Tendencia relevante",
        "Próxima acción",
        "Detalle histórico",
      ],
      navigationPrinciples: [
        "Separar registro, actividad actual, progreso e historial.",
        "Dar acceso rápido a la actividad o registro más frecuente.",
        "Mantener periodo, unidad y fuente visibles al comparar métricas.",
      ],
      interactionPrinciples: [
        "Reducir al mínimo la entrada necesaria para registros frecuentes.",
        "Permitir corregir datos y entender cómo afectan a tendencias y objetivos.",
        "Diferenciar medición, objetivo y recomendación antes de ofrecer acciones.",
      ],
      contentPrinciples: [
        "Presentar métricas principales con unidades y rangos comprensibles.",
        "Priorizar tendencias útiles sobre grandes cantidades de estadísticas.",
        "Evitar lenguaje diagnóstico cuando la información no constituye consejo clínico.",
      ],
      primaryActions: [
        "Registrar actividad o métrica",
        "Iniciar o finalizar actividad",
        "Revisar progreso",
        "Ajustar objetivo",
        "Consultar tendencia",
      ],
      discoveryPatterns: [
        "Resumen diario o semanal",
        "Actividades recientes",
        "Progreso por objetivo",
        "Tendencias significativas",
        "Planes o rutinas relevantes",
      ],
      trustAndSafetyConsiderations: [
        "Tratar salud, ubicación y biometría como información sensible.",
        "Explicar procedencia, precisión y limitaciones de las mediciones.",
        "Distinguir claramente bienestar general, recomendación y consejo profesional.",
      ],
      commonPatterns: [
        "Registro rápido",
        "Resumen de estado",
        "Progreso hacia objetivos",
        "Historial temporal",
      ],
      patternsToAvoid: [
        "Saturar con métricas sin interpretación.",
        "Presentar estimaciones como mediciones exactas.",
        "Usar presión o culpa para impulsar actividad.",
        "Ocultar permisos o uso de datos sensibles.",
      ],
    },
    {
      id: "travel-booking",
      label: "Travel / Booking",
      description: "Búsqueda, comparación y reserva con contexto.",
      primaryObjective:
        "Permitir buscar, comparar y reservar opciones de viaje con confianza.",
      uxPriorities: [
        "Destino, fechas y personas",
        "Búsqueda y resultados",
        "Precio total y disponibilidad",
        "Comparación y filtros",
        "Detalles relevantes",
        "Reserva",
      ],
      informationHierarchy: [
        "Coincidencia con los parámetros de búsqueda",
        "Precio total",
        "Disponibilidad",
        "Atributos comparables",
        "Condiciones de reserva",
        "Detalle secundario",
      ],
      navigationPrinciples: [
        "Mantener claros destino, fechas, viajeros y filtros durante todo el flujo.",
        "Conservar la selección al consultar detalles y comparar opciones.",
        "Separar búsqueda, evaluación, datos de la reserva y confirmación.",
      ],
      interactionPrinciples: [
        "Actualizar resultados y precios al cambiar parámetros sin perder contexto.",
        "Facilitar comparación consistente entre opciones equivalentes.",
        "Mostrar un resumen completo antes de realizar la reserva.",
      ],
      contentPrinciples: [
        "Exponer precio total, impuestos, políticas y restricciones de forma comprensible.",
        "Usar fotografías para apoyar la evaluación sin sustituir datos críticos.",
        "Distinguir disponibilidad confirmada, estimada y limitada.",
      ],
      primaryActions: [
        "Definir búsqueda",
        "Filtrar y comparar",
        "Seleccionar opción",
        "Revisar condiciones",
        "Reservar",
      ],
      discoveryPatterns: [
        "Resultados comparables",
        "Filtros por necesidad del viaje",
        "Mapa cuando aporte contexto geográfico",
        "Fechas flexibles",
        "Opciones guardadas o vistas recientemente",
      ],
      trustAndSafetyConsiderations: [
        "Mostrar coste total y condiciones de cancelación antes de solicitar pago.",
        "Identificar quién presta el servicio y quién gestiona cambios.",
        "Evitar urgencia artificial o disponibilidad engañosa.",
      ],
      commonPatterns: [
        "Formulario de búsqueda persistente",
        "Resultados filtrables",
        "Comparación de opciones",
        "Resumen de reserva",
      ],
      patternsToAvoid: [
        "Ocultar tasas o restricciones hasta el pago.",
        "Perder parámetros al volver desde un detalle.",
        "Comparar precios con inclusiones distintas sin aclararlo.",
        "Forzar decisiones mediante escasez no verificable.",
      ],
    },
    {
      id: "marketplace",
      label: "Marketplace",
      description: "Ofertas, vendedores, reputación y confianza.",
      primaryObjective:
        "Facilitar transacciones confiables entre compradores y diferentes vendedores.",
      uxPriorities: [
        "Producto u oferta",
        "Vendedor y reputación",
        "Precio y disponibilidad",
        "Comparación de ofertas",
        "Confianza y protección",
        "Comunicación entre partes",
      ],
      informationHierarchy: [
        "Producto o servicio",
        "Oferta y precio",
        "Vendedor y reputación",
        "Disponibilidad y condiciones",
        "Protección de la plataforma",
        "Información secundaria",
      ],
      navigationPrinciples: [
        "Diferenciar plataforma, catálogo, oferta y vendedor en cada nivel.",
        "Conservar filtros y criterios cuando se comparan múltiples vendedores.",
        "Mantener accesibles pedidos, mensajes y resolución de incidencias.",
      ],
      interactionPrinciples: [
        "Permitir comparar ofertas equivalentes por precio, condición y vendedor.",
        "Facilitar preguntas o negociación cuando formen parte del modelo.",
        "Explicar quién recibe cada acción y qué protección ofrece la plataforma.",
      ],
      contentPrinciples: [
        "Atribuir con claridad descripciones, valoraciones y condiciones.",
        "Mostrar reputación con contexto suficiente, no como cifra aislada.",
        "Distinguir políticas del vendedor de garantías de la plataforma.",
      ],
      primaryActions: [
        "Buscar y filtrar",
        "Comparar ofertas",
        "Consultar vendedor",
        "Comprar o reservar",
        "Resolver una incidencia",
      ],
      discoveryPatterns: [
        "Catálogo agregado",
        "Filtros por oferta y vendedor",
        "Comparador de vendedores",
        "Reputación y reseñas verificadas",
        "Recomendaciones relacionadas",
      ],
      trustAndSafetyConsiderations: [
        "Hacer visibles identidad, reputación, protección y vías de disputa.",
        "Distinguir reseñas verificadas y posibles conflictos de interés.",
        "No exponer datos personales antes de que la transacción lo requiera.",
      ],
      commonPatterns: [
        "Ficha con múltiples ofertas",
        "Perfil de vendedor",
        "Mensajería comprador-vendedor",
        "Centro de pedidos y disputas",
      ],
      patternsToAvoid: [
        "Ocultar quién vende o responde por la transacción.",
        "Fusionar valoraciones de producto y vendedor.",
        "Ordenar ofertas solo por promoción pagada sin indicarlo.",
        "Sacar la comunicación y protección fuera de la plataforma sin advertencia.",
      ],
    },
    {
      id: "saas-dashboard-administration",
      label: "SaaS Dashboard / Administration",
      description: "Supervisión, datos operativos y administración eficiente.",
      primaryObjective:
        "Permitir supervisar un sistema y ejecutar operaciones eficientemente.",
      uxPriorities: [
        "KPIs y estado",
        "Tablas y detalle operativo",
        "Búsqueda y filtros",
        "Alertas y excepciones",
        "Acciones individuales y masivas",
        "Configuración",
      ],
      informationHierarchy: [
        "Estado general y excepciones",
        "KPIs con contexto",
        "Elementos que requieren acción",
        "Datos operativos",
        "Controles y acciones",
        "Configuración avanzada",
      ],
      navigationPrinciples: [
        "Mantener navegación estable entre dominios funcionales.",
        "Separar monitorización, operación y configuración.",
        "Conservar filtros, columnas y alcance al abrir un detalle y volver.",
      ],
      interactionPrinciples: [
        "Permitir alta densidad, edición eficiente y acciones masivas cuando correspondan.",
        "Mostrar impacto y alcance antes de operaciones destructivas o amplias.",
        "Proporcionar estados de carga, éxito parcial y error accionables.",
      ],
      contentPrinciples: [
        "Presentar resumen primero y detalle bajo demanda.",
        "Acompañar KPIs con periodo, comparación y definición.",
        "Priorizar excepciones sobre métricas saludables repetitivas.",
      ],
      primaryActions: [
        "Supervisar estado",
        "Buscar y filtrar registros",
        "Investigar una alerta",
        "Editar o ejecutar operación",
        "Configurar el sistema",
      ],
      discoveryPatterns: [
        "Resumen operativo",
        "Alertas priorizadas",
        "Tablas filtrables",
        "Búsqueda global",
        "Vistas guardadas",
      ],
      trustAndSafetyConsiderations: [
        "Respetar permisos y hacer visible cuándo una acción está restringida.",
        "Registrar operaciones relevantes con autor, tiempo y resultado.",
        "Confirmar acciones destructivas según alcance y reversibilidad.",
      ],
      commonPatterns: [
        "Dashboard resumido",
        "Tabla de datos",
        "Panel de detalle",
        "Filtros persistentes y acciones masivas",
      ],
      patternsToAvoid: [
        "Convertir cada métrica disponible en un KPI principal.",
        "Mezclar configuración con tareas operativas frecuentes.",
        "Ocultar filtros activos, permisos o alcance de una acción.",
        "Usar confirmaciones idénticas para acciones de riesgo muy distinto.",
      ],
    },
    {
      id: "news-editorial",
      label: "News / Editorial",
      description: "Descubrimiento de información y lectura contextual.",
      primaryObjective:
        "Permitir descubrir, comprender y consumir información con contexto.",
      uxPriorities: [
        "Titulares y actualidad",
        "Contexto y jerarquía editorial",
        "Categorías",
        "Lectura",
        "Autores y procedencia",
        "Contenido relacionado",
      ],
      informationHierarchy: [
        "Titular",
        "Resumen o contexto",
        "Actualidad y relevancia",
        "Cuerpo del contenido",
        "Autor y procedencia",
        "Contenido relacionado",
      ],
      navigationPrinciples: [
        "Separar inicio editorial, actualidad, secciones, búsqueda y contenido guardado.",
        "Mantener el contexto de sección y lectura al abrir contenido relacionado.",
        "Facilitar continuar leyendo sin interrumpir el artículo principal.",
      ],
      interactionPrinciples: [
        "Priorizar lectura y permitir guardar, compartir o seguir temas sin dominarla.",
        "Conservar posición de lectura y elementos guardados.",
        "Hacer que correcciones, actualizaciones y fuentes sean accesibles desde el contenido.",
      ],
      contentPrinciples: [
        "Distinguir con claridad titular, resumen, cuerpo, opinión y publicidad.",
        "Mostrar autor, fecha, actualización y procedencia cuando afectan a la interpretación.",
        "Optimizar legibilidad prolongada y jerarquía entre contenido reciente, destacado y relacionado.",
      ],
      primaryActions: [
        "Explorar actualidad",
        "Leer",
        "Buscar temas",
        "Guardar o seguir",
        "Consultar contexto relacionado",
      ],
      discoveryPatterns: [
        "Portada editorial",
        "Secciones temáticas",
        "Última hora",
        "Búsqueda",
        "Contenido relacionado y seguimiento de temas",
      ],
      trustAndSafetyConsiderations: [
        "Distinguir noticias, opinión, contenido patrocinado y material generado o editado.",
        "Hacer visibles correcciones, fechas y fuentes relevantes.",
        "Evitar patrones que incentiven compartir sin comprender el contenido.",
      ],
      commonPatterns: [
        "Portada jerarquizada",
        "Página de artículo enfocada",
        "Navegación por sección",
        "Bloques de contexto relacionado",
      ],
      patternsToAvoid: [
        "Hacer competir controles y promociones con el artículo.",
        "Tratar todo el contenido como igualmente urgente.",
        "Ocultar fecha, autor o naturaleza patrocinada.",
        "Interrumpir repetidamente una lectura activa.",
      ],
    },
    {
      id: "music-audio",
      label: "Music / Audio",
      description: "Descubrimiento y reproducción continua de audio.",
      primaryObjective:
        "Permitir descubrir y reproducir audio manteniendo continuidad y control.",
      uxPriorities: [
        "Reproducción",
        "Canción o episodio",
        "Artista o creador",
        "Biblioteca",
        "Playlists y cola",
        "Descubrimiento",
      ],
      informationHierarchy: [
        "Contenido en reproducción",
        "Estado y controles de reproducción",
        "Título y creador",
        "Cola o contexto",
        "Biblioteca y guardado",
        "Acciones secundarias",
      ],
      navigationPrinciples: [
        "Mantener el player accesible mientras se navega por otras vistas.",
        "No interrumpir audio al cambiar entre descubrimiento, búsqueda y biblioteca.",
        "Conservar la relación entre contenido, creador, álbum, playlist y cola.",
      ],
      interactionPrinciples: [
        "Hacer visibles estado, progreso y dispositivo de reproducción.",
        "Permitir acciones rápidas sobre elementos sin abandonar la lista actual.",
        "Mantener la cola predecible al reproducir, insertar o reorganizar contenido.",
      ],
      contentPrinciples: [
        "Distinguir canción, episodio, artista, álbum y playlist.",
        "Mostrar metadata suficiente para reconocer contenido sin sobrecargar listas.",
        "Explicar el origen de recomendaciones y mezclas cuando sea útil.",
      ],
      primaryActions: [
        "Reproducir o pausar",
        "Buscar audio",
        "Guardar en biblioteca",
        "Gestionar cola",
        "Crear o editar playlist",
      ],
      discoveryPatterns: [
        "Recomendaciones personalizadas",
        "Novedades y tendencias",
        "Radios o mezclas",
        "Búsqueda por título, creador o género",
        "Biblioteca e historial",
      ],
      trustAndSafetyConsiderations: [
        "Comunicar contenido explícito, disponibilidad y cambios de versión.",
        "Ofrecer control sobre historial y personalización.",
        "Evitar cambios inesperados de dispositivo, volumen o cola.",
      ],
      commonPatterns: [
        "Player persistente",
        "Cola de reproducción",
        "Biblioteca",
        "Playlists y páginas de creador",
      ],
      patternsToAvoid: [
        "Detener audio al navegar.",
        "Ocultar qué se reproducirá después.",
        "Confundir versiones o tipos de contenido.",
        "Reemplazar la cola sin comunicarlo.",
      ],
    },
    {
      id: "transportation-ride-hailing",
      label: "Transportation / Ride Hailing",
      description: "Definición, estimación y seguimiento de trayectos.",
      primaryObjective:
        "Permitir definir un trayecto, elegir un servicio y completar un viaje con claridad.",
      uxPriorities: [
        "Ubicación, origen y destino",
        "Contexto geográfico",
        "Disponibilidad",
        "Tiempo y precio estimados",
        "Selección de servicio",
        "Estado y seguimiento del viaje",
      ],
      informationHierarchy: [
        "Etapa actual del viaje",
        "Origen, destino y ubicación",
        "Disponibilidad o vehículo asignado",
        "Tiempo estimado",
        "Precio y condiciones",
        "Acciones secundarias",
      ],
      navigationPrinciples: [
        "Adaptar la interfaz a las etapas de definición, selección, espera, viaje y finalización.",
        "Durante un viaje activo, priorizar estado y seguimiento sobre descubrimiento.",
        "Mantener ayuda, seguridad y detalles del viaje accesibles desde cualquier etapa activa.",
      ],
      interactionPrinciples: [
        "Hacer inequívoca la selección y corrección de origen y destino.",
        "Actualizar estimaciones cuando cambien condiciones o selección de servicio.",
        "Confirmar cancelaciones o cambios que impliquen coste o afecten al viaje.",
      ],
      contentPrinciples: [
        "Diferenciar estimaciones de tiempos, precios y disponibilidad confirmados.",
        "Usar el mapa como contexto, no como sustituto de direcciones y estados textuales.",
        "Explicar claramente punto de encuentro, vehículo, conductor y próximos pasos.",
      ],
      primaryActions: [
        "Definir destino",
        "Confirmar punto de recogida",
        "Elegir servicio",
        "Solicitar viaje",
        "Seguir y completar viaje",
      ],
      discoveryPatterns: [
        "Destinos frecuentes y recientes",
        "Búsqueda de lugares",
        "Opciones de servicio comparables",
        "Disponibilidad cercana",
        "Trayectos programados",
      ],
      trustAndSafetyConsiderations: [
        "Mostrar identidad del vehículo o conductor y herramientas de seguridad.",
        "Proteger ubicación, contacto y trayectos históricos.",
        "Comunicar tarifas, cancelaciones y cambios antes de aplicarlos.",
      ],
      commonPatterns: [
        "Selector de origen y destino",
        "Mapa contextual",
        "Comparador de servicios",
        "Estado de viaje por etapas",
      ],
      patternsToAvoid: [
        "Depender solo del mapa para comunicar estado.",
        "Ocultar cambios en tiempo o precio.",
        "Mantener contenido promocional durante un viaje activo.",
        "Confundir punto de recogida con ubicación actual.",
      ],
    },
  ].map(freezeDefinition),
);

export const productTypesById = new Map(
  productTypes.map((definition) => [definition.id, definition]),
);

export function getProductType(id) {
  return productTypesById.get(id) ?? null;
}
