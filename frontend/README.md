# Frontend Ordéna (React + Vite)

UI moderna para el demo de Ordéna con datos mock y conexión a un backend PHP ligero.

## Scripts
- `npm install` instala dependencias.
- `npm run dev` levanta el entorno local.
- `npm run build` genera archivos estáticos en `dist/`.

## Configuración
Crea un archivo `.env` dentro de `frontend` para apuntar al backend:
```
VITE_BACKEND_URL=http://localhost:8000
```
Si el backend vive en otro dominio, ajusta este valor antes de compilar.

## Diseño
- Paleta: blanco (#FFFFFF), verde suave (#4ECDC4), gris claro (#F8F9FA), texto gris oscuro (#495057).
- Tipografía: Roboto / Open Sans.
- Componentes modulares (`Sidebar`, `HeaderBar`, `SummaryCards`, `OrdersTable`, `HistoryList`, `ObservationPanel`) con comentarios en el código para facilitar edición asistida por IA.

## Datos mock
El frontend consume `/api/summary`, `/api/orders`, `/api/history` y `/api/pdf` desde el backend PHP. Puedes reemplazar estos endpoints por tu API real manteniendo las mismas llaves de respuesta.
