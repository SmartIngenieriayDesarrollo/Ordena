# 📋 Guía de Despliegue - Ordéna en Bluehost

## 🎯 Información del Hosting

**Subdominio:** https://ordena.smartpos.com.co  
**Carpeta del servidor:** `/public_html/ordena`  
**Base de datos MySQL:**
- Nombre: `techwor2_ordena`
- Usuario: `techwor2_ordena`
- Contraseña: `Ordena;13934`
- Host: `localhost`

---

## ✅ Pre-requisitos Completados

- ✅ `npm install` ejecutado en frontend
- ✅ `npm run build` ejecutado en frontend (archivos generados en `/frontend/dist`)

---

## 📦 PASO 1: Preparar Archivos para Subir

### 1.1 Archivos del Backend

Sube **TODA** la carpeta `backend` al servidor. La estructura debe quedar así en `/public_html/ordena`:

```
/public_html/ordena/
├── public/              ← Document Root (punto de entrada)
│   ├── index.php
│   └── .htaccess        ← Nuevo archivo creado
├── src/
│   ├── config.php       ← Nuevo archivo de configuración DB
│   └── helpers.php
├── storage/
│   └── mock/
│       ├── diets.json
│       ├── history.json
│       ├── orders.json
│       └── patients.json
└── database/
    └── init.sql         ← Script SQL para inicializar DB
```

### 1.2 Archivos del Frontend

Sube **SOLO el contenido** de la carpeta `frontend/dist` a la **misma carpeta** `/public_html/ordena/public`:

```
/public_html/ordena/public/
├── index.php            ← Del backend
├── .htaccess            ← Del backend
├── index.html           ← Del frontend (dist)
└── assets/              ← Del frontend (dist)
    ├── index-[hash].js
    └── index-[hash].css
```

**IMPORTANTE:** Los archivos del frontend van en la misma carpeta `public/` que el backend.

---

## 🚀 PASO 2: Configurar el Hosting en Bluehost

### 2.1 Configurar Document Root del Subdominio

1. Ingresa al **cPanel de Bluehost**
2. Ve a **Dominios** o **Subdominios**
3. Encuentra `ordena.smartpos.com.co`
4. Configura el **Document Root** como: `/public_html/ordena/public`
   - ⚠️ **MUY IMPORTANTE:** Debe apuntar a la carpeta `/public`, NO a `/ordena`

### 2.2 Verificar versión de PHP

1. En cPanel, ve a **Select PHP Version** o **MultiPHP Manager**
2. Asegúrate de que el subdominio use **PHP 8.0 o superior**
3. Habilita las extensiones necesarias:
   - ✅ `pdo`
   - ✅ `pdo_mysql`
   - ✅ `json`
   - ✅ `mbstring`

### 2.3 Configurar permisos de archivos

Conecta por **FTP** o usa el **File Manager** de cPanel y configura:

```bash
# Carpeta storage debe tener permisos de escritura
chmod 755 /public_html/ordena/storage
chmod 755 /public_html/ordena/storage/mock
chmod 644 /public_html/ordena/storage/mock/*.json
```

---

## 💾 PASO 3: Configurar la Base de Datos MySQL

### 3.1 Acceder a phpMyAdmin

1. En cPanel, abre **phpMyAdmin**
2. Selecciona la base de datos `techwor2_ordena`

### 3.2 Ejecutar Script de Inicialización

1. Haz clic en la pestaña **SQL**
2. Copia y pega **TODO** el contenido del archivo `/backend/database/init.sql`
3. Haz clic en **Continuar** o **Go**
4. Verifica que las tablas se crearon:
   - ✅ `patients`
   - ✅ `diets`
   - ✅ `orders`
   - ✅ `history`

### 3.3 Verificar datos de prueba

En phpMyAdmin, ejecuta:

```sql
SELECT * FROM patients;
SELECT * FROM diets;
SELECT * FROM orders;
SELECT * FROM history;
```

Deberías ver 4 registros en cada tabla.

---

## 🔧 PASO 4: Ajustar Configuración del Backend

### 4.1 Verificar archivo de configuración

Edita `/public_html/ordena/src/config.php` y asegúrate de que tenga:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'techwor2_ordena');
define('DB_USER', 'techwor2_ordena');
define('DB_PASS', 'Ordena;13934');

// IMPORTANTE: Cambiar cuando migres a MySQL
define('STORAGE_MODE', 'json'); // Cambiar a 'mysql' después
```

### 4.2 Verificar CORS en .htaccess

El archivo `/public_html/ordena/public/.htaccess` debe tener:

```apache
Header always set Access-Control-Allow-Origin "*"
```

**Nota:** Si deseas restringir CORS solo a tu dominio, cambia `"*"` por `"https://ordena.smartpos.com.co"`

---

## 🌐 PASO 5: Probar el Despliegue

### 5.1 Probar el Backend (API)

Abre en tu navegador:

1. **Resumen:** https://ordena.smartpos.com.co/api/summary
2. **Órdenes:** https://ordena.smartpos.com.co/api/orders
3. **Historial:** https://ordena.smartpos.com.co/api/history

Deberías ver respuestas JSON con datos.

### 5.2 Probar el Frontend (Interfaz)

Abre en tu navegador:

**URL Principal:** https://ordena.smartpos.com.co

Deberías ver:
- ✅ Sidebar con menú de navegación
- ✅ Tarjetas de resumen (Pacientes activos, Órdenes vigentes, etc.)
- ✅ Tabla de órdenes con filtros
- ✅ Historial de cambios
- ✅ Panel de observaciones

### 5.3 Probar funcionalidad

1. **Filtrar por servicio:** Haz clic en "Desayuno", "Almuerzo" o "Cena"
2. **Marcar como entregado:** Haz clic en el botón de una orden
3. **Verificar historial:** Debe aparecer un nuevo evento
4. **Generar PDF:** Haz clic en "Generar listado en PDF"

---

## 🐛 Solución de Problemas Comunes

### ❌ Error 500: Internal Server Error

**Causa:** Permisos incorrectos o error en .htaccess

**Solución:**
```bash
# Verificar permisos
chmod 755 /public_html/ordena/public
chmod 644 /public_html/ordena/public/.htaccess
chmod 644 /public_html/ordena/public/index.php

# Si persiste, renombra temporalmente .htaccess
mv .htaccess .htaccess.backup
```

### ❌ Error 404: Not Found

**Causa:** Document root mal configurado

**Solución:**
1. Verifica en cPanel que el Document Root sea `/public_html/ordena/public`
2. Asegúrate de que `index.html` e `index.php` estén en la carpeta `public/`

### ❌ CORS Error en el navegador

**Causa:** Headers CORS no configurados

**Solución:**
1. Verifica que el archivo `.htaccess` esté en `/public_html/ordena/public/`
2. Asegúrate de que el servidor Apache tenga `mod_headers` habilitado
3. Contacta soporte de Bluehost si persiste

### ❌ Frontend se ve pero no carga datos

**Causa:** URL del backend incorrecta

**Solución:**
1. Abre las **Herramientas de Desarrollador** del navegador (F12)
2. Ve a la pestaña **Console** y busca errores
3. Ve a la pestaña **Network** y verifica las peticiones a `/api/`
4. Si falla, verifica que el archivo `.env.production` se usó durante el build

### ❌ Error de conexión a base de datos

**Causa:** Credenciales incorrectas o base de datos no creada

**Solución:**
1. Verifica en cPanel → **Bases de datos MySQL** que `techwor2_ordena` existe
2. Verifica que el usuario `techwor2_ordena` tenga **TODOS** los privilegios
3. Edita `/src/config.php` y verifica las credenciales

---

## 🔄 PASO 6: Migrar de Mock (JSON) a Base de Datos MySQL (Opcional)

Actualmente, el sistema usa archivos JSON para almacenar datos (modo mock). Para migrar a MySQL:

### 6.1 Cambiar modo de almacenamiento

Edita `/public_html/ordena/src/config.php`:

```php
// Cambiar de 'json' a 'mysql'
define('STORAGE_MODE', 'mysql');
```

### 6.2 Actualizar helpers.php

Deberás modificar las funciones en `/src/helpers.php` para leer/escribir en MySQL en lugar de archivos JSON. Aquí un ejemplo:

```php
function loadMockData()
{
    if (STORAGE_MODE === 'mysql') {
        $pdo = getDbConnection();
        
        return [
            'patients' => $pdo->query('SELECT * FROM patients')->fetchAll(),
            'diets' => $pdo->query('SELECT * FROM diets')->fetchAll(),
            'orders' => $pdo->query('SELECT * FROM v_orders_complete')->fetchAll(),
            'history' => $pdo->query('SELECT * FROM v_history_complete')->fetchAll(),
        ];
    }
    
    // Mantener modo JSON como fallback
    $base = realpath(__DIR__ . '/../storage/mock');
    return [
        'patients' => readJson($base . '/patients.json'),
        'diets' => readJson($base . '/diets.json'),
        'orders' => readJson($base . '/orders.json'),
        'history' => readJson($base . '/history.json'),
    ];
}
```

**Nota:** Esta migración requiere más desarrollo. Por ahora, el sistema funciona perfectamente con archivos JSON.

---

## 📊 PASO 7: Monitoreo y Mantenimiento

### 7.1 Logs de errores

En Bluehost, puedes ver los logs en:
- cPanel → **Archivos** → **Error Log**

### 7.2 Backups

1. En cPanel, usa **Backup Wizard** para crear respaldos periódicos
2. Descarga los archivos JSON de `/storage/mock` regularmente

### 7.3 SSL/HTTPS

1. En cPanel → **SSL/TLS Status**, activa SSL para el subdominio
2. Descomenta estas líneas en `.htaccess` para forzar HTTPS:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📝 Checklist Final

- [ ] Backend subido a `/public_html/ordena/`
- [ ] Frontend (dist) subido a `/public_html/ordena/public/`
- [ ] Document Root configurado a `/public_html/ordena/public`
- [ ] PHP 8.0+ habilitado
- [ ] Base de datos creada con init.sql
- [ ] Permisos de carpetas configurados (755/644)
- [ ] API funcionando: `/api/summary`, `/api/orders`, `/api/history`
- [ ] Frontend cargando correctamente
- [ ] Funcionalidad de "Marcar como entregado" funcionando
- [ ] Historial actualizándose correctamente
- [ ] SSL/HTTPS habilitado (recomendado)

---

## 🎉 ¡Listo!

Tu sistema Ordéna está desplegado y funcionando en:
**https://ordena.smartpos.com.co**

### Credenciales de Demostración

Para la demo, el sistema incluye:
- 4 pacientes de prueba
- 4 dietas de ejemplo
- 4 órdenes activas
- Historial de eventos

### Próximos Pasos (Opcional)

1. Personalizar datos en archivos JSON o migrar a MySQL
2. Agregar autenticación de usuarios
3. Implementar generación real de PDFs con dompdf
4. Agregar más funcionalidades según necesidades del hospital

---

## 📞 Soporte

Si encuentras problemas:
1. Revisa la sección de **Solución de Problemas**
2. Verifica los logs de error en cPanel
3. Contacta al soporte de Bluehost si es problema del hosting

---

**Autor:** Sistema Ordéna - Nutrición Hospitalaria  
**Fecha:** Diciembre 2024  
**Versión:** 1.0.0
