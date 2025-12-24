# Backend demo Ordéna (PHP)

Este backend ligero simula la lógica básica descrita para el demo de Ordéna usando solo PHP plano para que pueda ejecutarse en un hosting compartido como Bluehost sin dependencias adicionales.

## Características
- Datos mockup almacenados en archivos JSON en `storage/mock`.
- Endpoints REST simples para resumen, órdenes, historial y una descarga PDF simulada.
- Acción de entregar una ración: `POST /api/orders/{id}/deliver` actualiza el estado y registra el evento en el historial.
- CORS habilitado para que el frontend (React/Vue) pueda consumir el API.

## Estructura
```
backend/
├─ public/          # Punto de entrada para PHP (configura el docroot del hosting aquí)
├─ src/             # Utilidades compartidas
└─ storage/mock/    # Datos JSON mockup editables
```

## Uso local
1. Ir a la carpeta `backend`.
2. Ejecutar el servidor embebido de PHP:
   ```bash
   php -S localhost:8000 -t public
   ```
3. Verificar en el navegador `http://localhost:8000/api/orders`.

## Despliegue en Bluehost
1. Subir la carpeta `backend` al hosting.
2. Configurar el **document root** del subdominio o carpeta pública a `backend/public`.
3. Asegurar que PHP 8.x esté habilitado.
4. Ajustar los archivos JSON en `storage/mock` para actualizar los datos de prueba.

## Extensiones sugeridas
- Sustituir `simulatePdf()` en `src/helpers.php` por librerías como **dompdf** o **TCPDF** cuando se quiera generar PDFs reales.
- Reemplazar el almacenamiento en archivos por SQLite/MySQL según necesidad.
