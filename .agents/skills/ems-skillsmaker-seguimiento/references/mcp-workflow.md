# Contrato de seguimiento por MCP

Servidor: `overfox_ems`. Las herramientas pueden aparecer con un prefijo de namespace; usa el nombre expuesto en la sesión. No se necesita un cliente HTTP propio ni acceso directo a MongoDB.

## Lecturas y revisiones

- `get_project_context({key})`: devuelve `project`, `boards`, `stages`, `recentTasks` (últimas 100), `goals`, `activity`, `progress`. `boards[].revision` corresponde a tareas; `goals.revision` corresponde a objetivos. No son intercambiables.
- `list_tasks({key, query?, kind?, offset?, limit?})`: búsqueda literal por nombre/descripción, no semántica. La búsqueda no incluye el texto de las notas. Usa varias palabras clave razonables si la primera consulta no encuentra el resultado; `limit` máximo 100 y `nextOffset` permite paginar. Comprueba alcance e identidad antes de reutilizar.
- `get_task_history({key, boardId, taskId})`: últimas 100 entradas. Las notas tienen `type="comment"` y texto en `to`.
- `ensure_board({key, environmentId})`: tablero MVP si falta; devuelve `id` y `revision`. Consulta el contexto para conocer las etapas. No inventes una etapa «blocked»: los tableros no tienen un estado de bloqueo obligatorio; regístralo en una nota y conserva una etapa real.

## Tareas

Crear: `upsert_task({key, boardId, revision, kind, name, idempotencyKey, description?, objective?, stageId?, priority?, dueDate?, assigneeId?, tags?, checklist?})`.

Editar/mover: `upsert_task({key, boardId, revision, taskId, kind, ...camposQueCambian})`. Los campos omitidos se conservan. Una creación repetida con la misma clave devuelve la tarea original y **no actualiza sus campos**; usa su `taskId` para cambiarlos.

Devuelve `{task, revision, replayed}`. Conserva el nuevo `revision`. Las claves de idempotencia admiten hasta 300 caracteres. El `kind` obligatorio es `bug`, `feature`, `follow_up`, `maintenance` o `research`; se guarda como etiqueta visible. Conserva su clasificación original al registrar avances.

Límites: `name` 160 caracteres; `description` 6000; `objective` 4000; máximo 12 etiquetas totales incluyendo la clase y 32 caracteres por etiqueta; máximo 50 elementos de checklist `{id: UUID, text: hasta 240 caracteres, completed: boolean}`. El checklist enviado reemplaza el actual: conserva los elementos existentes al editar. `priority` admite `urgent`, `medium`, `normal`; no admite `high` o `low`. `dueDate` es una fecha real `YYYY-MM-DD` o `null`. No envíes valores inventados para llenar campos opcionales.

`add_task_note({key, boardId, revision, taskId, note, idempotencyKey})`: nota de hasta 4000 caracteres, idempotente. Devuelve `{revision, history}`. También incrementa la revisión del tablero. Mover a una etapa `done` cambia `completedAt`; reabrirla lo elimina y recalcula objetivos vinculados.

### Ejemplo: dos resultados en un mensaje

Solicitud: «Añade exportar PDF y arregla que guardar pierda los cambios». Con IDs reales leídos del contexto:

1. Busca exportación PDF y pérdida de cambios por separado. Reutiliza las coincidencias de alcance.
2. Crea la tarea `feature` con clave `chat:<referencia>:exportar-pdf`; conserva la revisión devuelta.
3. Crea la tarea `bug` con la nueva revisión y clave `chat:<referencia>:guardar-pierde-cambios`; documenta esperado, observado, reproducción y detección.
4. Reproduce/corrige el bug y sigue el feature con sus propios IDs. Registra resultados en cada uno. Si solo pasa la regresión del bug, cierra únicamente el bug.

`<referencia>` describe una referencia real del chat o una referencia local estable elegida para esta solicitud; los ejemplos no son IDs ni claves que deban copiarse literalmente en producción.

## Objetivos

- Crear: `upsert_goal({key, revision: goals.revision, idempotencyKey, title, parentGoalId?, ownerId?, targetDate?})`. No envíes descripción, estado o modo de progreso en la primera creación. Devuelve `{goalId, goals, replayed}`.
- Actualizar: `upsert_goal({key, revision: goals.revision, goalId, description?, status?, progressMode?, manualValue?, ..., note?})`. Justifica el cambio en `note` (máximo 2000 caracteres). Estados: `NOT_STARTED`, `IN_PROGRESS`, `PAUSED`, `BLOCKED`, `COMPLETED`, `CANCELLED`. Modos: `NONE`, `MANUAL`, `METRIC`, `CHILDREN`, `TASKS`.
- `set_task_goal({key, revision: goals.revision, goalId, taskId, linked: true})`: tarea y objetivo deben pertenecer al mismo proyecto; una tarea solo puede contribuir a un objetivo. La revisión devuelta está en el estado de objetivos, no en el tablero.
- `record_goal_metric({key, revision, goalId, name, startValue, currentValue, targetValue, unit})`: solo mediciones reales; `progressMode="METRIC"` activa su cálculo. `TASKS` calcula progreso desde tareas vinculadas.
- `add_goal_note({key, revision, goalId, note})`: no tiene clave de idempotencia; ante respuesta incierta consulta actividad antes de repetir.

## Confirmación y fallos

El resultado MCP puede incluir `isError=true` aunque el transporte HTTP haya respondido. Comprueba `ok`/`isError` y la respuesta canónica antes de afirmar persistencia. `committed=true` significa que se guardó pero falló el refresco: consulta de nuevo antes de repetir. Un timeout puede tener resultado desconocido aunque no haya confirmación.

Si falla una escritura, no uses sus revisiones como si hubiera terminado. Vuelve a leer antes de decidir. No rebautices una tarea ni crees un proyecto duplicado para evadir una colisión o un conflicto.
