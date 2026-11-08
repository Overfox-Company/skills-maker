

<!-- BEGIN overfox-ems workflow -->
## Seguimiento en Overfox EMS

Al recibir trabajo asignado o detectar un bug mientras lo ejecutas, carga la skill del proyecto antes de registrar o actualizar tareas:

- Usa `$ems-skillsmaker-seguimiento`: [instrucciones](.agents/skills/ems-skillsmaker-seguimiento/SKILL.md), clave MCP `skillsmaker`.

Separa los resultados independientes de un mensaje (por ejemplo, feature y bug), conserva el seguimiento por tarea y no cierres todo por haber terminado una parte. Las consultas informativas sin trabajo asignado no crean tareas. El MCP es `overfox_ems` (https://intranet.overfox.net/api/mcp); si falla, conserva lo pendiente de sincronizar e informa sin afirmar persistencia.
<!-- END overfox-ems workflow -->
