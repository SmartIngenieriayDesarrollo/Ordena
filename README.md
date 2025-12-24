# Demo Ordéna – Nutrición hospitalaria

Este repositorio contiene un demo visual y funcional de Ordéna listo para mostrar el flujo de prescripción, preparación y entrega de dietas hospitalarias en un entorno de hosting compartido.

## Estructura
```
backend/   # PHP plano con endpoints mock (compatible con Bluehost)
frontend/  # React + Vite con UI moderna y datos mock
```

## Ejecución rápida

### Backend (PHP)
```bash
cd backend
php -S localhost:8000 -t public
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

Configura la variable `VITE_BACKEND_URL` en un archivo `.env` dentro de `frontend` si tu backend se sirve en una URL distinta a `http://localhost:8000`.

## Despliegue en hosting compartido
- Sube la carpeta `backend` y configura el document root hacia `backend/public`.
- Compila el frontend con `npm run build` y sube el contenido de `frontend/dist` al mismo host (o sirve con otro CDN).
- Actualiza los archivos JSON en `backend/storage/mock` para ajustar datos de pacientes, dietas y órdenes.

## Funcionalidades incluidas (mock)
- Resumen con tarjetas de pacientes activos, órdenes vigentes, raciones del día y servicios pendientes.
- Tabla interactiva de órdenes con filtro por servicio y acción para marcar como entregado.
- Historial cronológico de cambios mock.
- Observaciones rápidas y botón de generación de listado PDF simulado.
