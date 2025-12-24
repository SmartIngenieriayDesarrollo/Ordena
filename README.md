## Ordéna es un sistema web diseñado para transformar el proceso de prescripción, registro, preparación y entrega de dietas hospitalarias en un flujo completamente digital, rápido y trazable.
Su objetivo es digitalizar la interacción entre Nutrición, Cocina y Auditoría, asegurando que cada dieta prescrita sea servida exactamente según las indicaciones médicas.
El sistema se construirá bajo la Opción A (Laravel + Blade + Livewire), lo que garantiza alta velocidad, estabilidad y compatibilidad.
________________________________________
2. Funcionalidades principales del sistema
Módulo de Pacientes
•	Registro y búsqueda de pacientes (manual o importado desde HIS).
•	Asignación de número de cama y servicio hospitalario.
Catálogo de Dietas
•	Base de dietas estandarizadas con descripción, textura y restricciones (ej. sin sal, sin lácteos).
•	Posibilidad de agregar o editar dietas nuevas.

Gestión de Órdenes de Dieta
•	Registro de la prescripción por Nutrición según indicación médica.
•	Vigencia de órdenes y trazabilidad de cambios.
Asignación por Servicio Diario
•	Distribución automática por Desayuno, Almuerzo, Cena y Refrigerios.
•	Modificación dinámica aplicable desde el siguiente servicio.
Consolidado de Cocina
•	Generación automática de listados por servicio (conteo total y detalle paciente-dieta).
•	Opción para imprimir o exportar en PDF.
Entrega y Confirmación
•	Checklist digital de entrega por paciente y dieta.
•	Registro de hora, responsable y observaciones.
Historial y Auditoría
•	Consulta de dietas prescritas y servidas por paciente y fecha.
•	Reportes en Excel o PDF.
•	Registro de todas las modificaciones realizadas.
Roles de Usuario
•	Nutrición (crea y modifica órdenes).
•	Cocina (visualiza consolidado y confirma entregas).
•	Auditoría (consulta reportes e historial).
