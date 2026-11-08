---
name: ems-skillsmaker-seguimiento
description: "Registra y sigue en EMS el trabajo asignado de Skills Maker: separa solicitudes mixtas en tareas, documenta bugs detectados y actualiza avances, bloqueos y verificaciones durante su ejecución. Usar en las carpetas de Skills Maker; no para consultas sin trabajo asignado."
---

# Seguimiento de Skills Maker en EMS

Usa el MCP `overfox_ems` con `key="skillsmaker"`. Proyecto local principal: `/Users/joel/Documents/overfox/skills-maker`. Selecciona el entorno de EMS por el código y la plataforma afectados.
Respeta los AGENTS.md del código afectado. Esta skill documenta y sigue trabajo; no añade autorización para publicar, desplegar o cambiar funciones ajenas a la solicitud.

## Convertir el mensaje en trabajo

Antes de implementar, identifica **todos los resultados independientes** pedidos, incluso los unidos por «y», «además», «también» o una corrección posterior. Un mensaje puede producir varias tareas de clases distintas.

| Situación | Registro |
| --- | --- |
| Conducta actual incorrecta, fallo o regresión | `bug` |
| Capacidad nueva o ampliación de comportamiento | `feature` |
| Retomar un pendiente con trabajo adicional independiente | `follow_up` |
| Actualización técnica, limpieza o conservación | `maintenance` |
| Incertidumbre que requiere investigación con un entregable | `research` |
| Resultado estratégico medible | Objetivo; sus acciones concretas siguen siendo tareas |

- Separa resultados con aceptación o cierre independientes. No conviertas pasos de una misma solución en tareas distintas: usa checklist. Reproducir, reparar y verificar **el mismo bug** pertenecen a una sola tarea.
- «Añade exportación PDF y corrige que guardar borre los cambios» implica una tarea `feature` y otra `bug`, con criterios y estados separados. No ocultes el bug en la descripción del feature ni crees una única tarea «hacer todo».
- Si varias pantallas/plataformas comparten la misma causa y se validan juntas, conserva una tarea con checklist por plataforma. Si tienen fallos o entregas independientes, sepáralas y enlázalas en notas.
- Una consulta informativa, explicación o saludo no crea trabajo automáticamente. Una investigación asignada sí puede ser `research`. No conviertas en tarea algo cancelado, rechazado o citado solo como contexto.
- Mantén un mapa de cada resultado de esta solicitud a su `taskId`, clase, entorno y próximo paso. No confundas «un mensaje» con «una tarea».

## Identificar el proyecto y registrar sin duplicar

Consulta `get_project_context` y busca cada resultado en `list_tasks` por términos concretos; pagina si hace falta. Reutiliza tareas que coincidan en resultado, alcance y entorno. Si se retoma una tarea, lee `get_task_history`; una mención nueva o una paráfrasis no justifica duplicarla. Una regresión posterior con evidencia distinta puede requerir un bug nuevo relacionado con el anterior.

Selecciona el entorno por el código afectado y las plataformas reales de EMS. No adivines UUID de tablero, etapa, responsable u objetivo. Usa `ensure_board` solo si falta el tablero del entorno elegido. No crees otro proyecto si el vínculo está ausente: consulta `list_projects` e informa el vínculo pendiente.

Registra cada resultado autorizado con `upsert_task` antes de empezar su implementación, o en cuanto aparezca un hallazgo. Usa título específico, clase y una descripción que conserve alcance y aceptación. Crea un checklist cuando ayude a comprobar una entrega. Deja fechas y responsables vacíos si no están confirmados.

Para crear, asigna una `idempotencyKey` **por resultado**, estable durante todo su ciclo; por ejemplo, `chat:<referencia>:exportar-pdf` y `chat:<referencia>:guardar-pierde-cambios`. Reutiliza esas claves al reintentar; no uses una clave por mensaje ni cambies la clave por un timeout. Tras crear, usa siempre `taskId`. Conserva los IDs en el contexto del trabajo; no crees un archivo de seguimiento salvo que se necesite recuperar una sincronización pendiente.

Cada escritura requiere la revisión actual del tablero; usa la devuelta por la operación anterior. Si creas varias tareas del mismo tablero, escríbelas secuencialmente. Ante conflicto, vuelve a consultar y combina el trabajo conservando cambios ajenos. No reenvíes una edición antigua sin revisar.

## Detectar y documentar bugs durante el trabajo

También registra los fallos nuevos encontrados al implementar o probar, aunque el usuario no los haya nombrado. Revisa primero si ya existe un bug equivalente. El registro debe distinguir observación de hipótesis:

- **Detectado:** fecha/hora real, origen (solicitud, exploración o prueba), entorno/plataforma y versión o commit si se conocen. Registra el momento de detección, no una fecha de inicio inventada.
- **Reproducción:** pasos y condiciones, frecuencia observada y datos mínimos necesarios, sin secretos ni información personal innecesaria.
- **Esperado / observado:** diferencia concreta e impacto; prioridad basada en evidencia. No llames crítico a un fallo sin sustento.
- **Evidencia:** error, salida de prueba, archivo/línea, captura o referencia accesible. Separa «causa confirmada» de «posible causa».
- **Aceptación:** qué verificación demostraría que está corregido, incluida la regresión relevante.

Si aún no se reproduce, indícalo y registra qué falta confirmar; no presentes una sospecha como fallo probado. Un error transitorio o del propio entorno de pruebas no es automáticamente un bug del producto. Si el hallazgo es independiente del trabajo solicitado, documéntalo y explica el impacto; no amplíes su implementación sin autorización. Si bloquea el resultado o fue causado por el cambio actual, trata la corrección como parte del trabajo afectado y conserva la trazabilidad.

## Dar seguimiento mientras se trabaja

Actualiza la tarea que estás ejecutando a una etapa real de trabajo cuando comiences. No muevas todas las tareas del mensaje a «en curso» si aún no empezaron. Añade `add_task_note` cuando haya un avance material, reproducción confirmada, causa identificada, corrección, bloqueo, resultado de prueba o cambio de alcance; no registres cada comando o pensamiento.

En cada nota deja el resultado observable, evidencia pertinente y siguiente paso. Un bloqueo lleva causa, dependencia y qué permitiría continuar. Un trabajo parcial conserva lo realizado y lo pendiente. Las notas de tarea usan su propia `idempotencyKey`; repite la misma clave solo al reintentar la misma nota. No cambies `bug` a `follow_up` solo por continuar su seguimiento.

Si el usuario añade otra petición, clasifícala y añádela al mapa sin perder las anteriores. Si modifica un resultado existente, actualiza esa tarea; si añade otro resultado independiente, crea otra. No cierres, borres o completes trabajo porque el usuario haya cambiado de tema.

Cuando el trabajo contribuya a un objetivo real, usa `set_task_goal` con la revisión de objetivos. No inventes un objetivo por mensaje ni alteres objetivos ajenos. Actualiza estado o métrica solo con evidencia. El MCP permite una sola contribución de objetivo por tarea; no fuerces varios vínculos.

## Cerrar y recuperar

Cierra **cada tarea por separado**: resultado, verificaciones realizadas, evidencia y pendientes. «Código cambiado» no equivale a validación terminada. Si falta la comprobación requerida, usa revisión/validación si existen; si no, conserva la etapa adecuada y documenta qué falta. Mueve a la etapa cuya categoría es `done` solo cuando su aceptación esté comprobada. Una tarea terminada no completa automáticamente las otras solicitudes ni marca un objetivo como entregado sin comprobarlo.

En la respuesta al usuario resume qué resultados se terminaron y cuáles siguen pendientes; incluye enlaces a EMS cuando estén disponibles, sin un reporte extenso obligatorio.

Si el MCP falla, continúa el trabajo local autorizado e identifica lo pendiente de sincronizar. Conserva en el contexto IDs, claves y operaciones pendientes; si necesitas sobrevivir al cierre del chat, guarda solo esa cola mínima en un archivo local no versionado. Reintenta de forma acotada después de comprobar el servicio; no entres en bucle ni accedas directamente a Atlas. Antes de reintentar una creación busca por clave/contexto y reutiliza la clave original. No afirmes que algo quedó guardado hasta recibir confirmación.

Para parámetros, límites y ejemplos de llamadas, consulta [el contrato MCP](references/mcp-workflow.md) cuando vayas a escribir. Si falta el MCP entre las herramientas, usa la configuración ya instalada del proyecto; no extraigas tokens al chat ni construyas un cliente alternativo que eluda sus controles.
