# 📋 ESTRUCTURA CORRECTA PARA BLUEHOST

## 🎯 Tu Configuración Actual

**Root del subdominio:** `/public_html/ordena/`  
**URL:** https://ordena.smartpos.com.co  
**NO se puede cambiar el Document Root**

---

## 📂 Estructura de Archivos en el Servidor

```
/public_html/ordena/                    ← Root del subdominio (NO MODIFICABLE)
│
├── .htaccess                           ← NUEVO ARCHIVO (subir desde raíz del proyecto)
├── index.html                          ← Del frontend (de dist/)
├── assets/                             ← Del frontend (de dist/)
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── react-vendor-[hash].js
│
├── public/                             ← Carpeta del backend
│   └── index.php                       ← API REST PHP
│
├── src/                                ← Helpers del backend
│   ├── config.php
│   └── helpers.php
│
├── storage/                            ← Datos mock
│   └── mock/
│       ├── patients.json
│       ├── diets.json
│       ├── orders.json
│       └── history.json
│
└── database/                           ← Scripts SQL
    └── init.sql
```

---

## 📤 QUÉ SUBIR Y DÓNDE

### 1️⃣ Raíz `/public_html/ordena/`

**Subir estos archivos:**
- ✅ `.htaccess` ← **NUEVO** (del proyecto raíz, NO de backend/public/)
- ✅ `index.html` (de frontend/dist/)
- ✅ Carpeta `assets/` (de frontend/dist/)

### 2️⃣ Carpeta `/public_html/ordena/public/`

**Subir solo:**
- ✅ `index.php` (de backend/public/)

### 3️⃣ Carpeta `/public_html/ordena/src/`

**Subir:**
- ✅ `config.php` (de backend/src/)
- ✅ `helpers.php` (de backend/src/)

### 4️⃣ Carpeta `/public_html/ordena/storage/mock/`

**Subir los 4 archivos JSON:**
- ✅ `patients.json`
- ✅ `diets.json`
- ✅ `orders.json`
- ✅ `history.json`

### 5️⃣ Carpeta `/public_html/ordena/database/`

**Subir:**
- ✅ `init.sql` (para ejecutar en phpMyAdmin)

---

## 🔧 Cómo Funciona el .htaccess

### Para peticiones a `/api/*`:
```
https://ordena.smartpos.com.co/api/orders
    ↓
/public_html/ordena/public/index.php
```

### Para el frontend:
```
https://ordena.smartpos.com.co/
    ↓
/public_html/ordena/index.html
```

### Para assets (CSS, JS):
```
https://ordena.smartpos.com.co/assets/index-abc123.js
    ↓
/public_html/ordena/assets/index-abc123.js (servido directamente)
```

---

## ✅ Checklist de Archivos a Subir

### Raíz del Subdominio (`/public_html/ordena/`)
```
[ ] .htaccess              ← Del proyecto raíz
[ ] index.html             ← De frontend/dist/
[ ] assets/                ← De frontend/dist/ (carpeta completa)
```

### Backend (`/public_html/ordena/`)
```
[ ] public/index.php       ← De backend/public/
[ ] src/config.php         ← De backend/src/
[ ] src/helpers.php        ← De backend/src/
[ ] storage/mock/*.json    ← 4 archivos JSON
[ ] database/init.sql      ← Para phpMyAdmin
```

---

## 🚀 Pasos de Subida CORREGIDOS

### PASO 1: Subir Frontend a la Raíz
1. Ve a `/public_html/ordena/`
2. Sube `index.html` de `frontend/dist/`
3. Sube carpeta `assets/` de `frontend/dist/`
4. Sube `.htaccess` de la **RAÍZ DEL PROYECTO** (NO de backend/public/)

### PASO 2: Subir Backend
1. Sube carpeta `public/` de backend (con index.php dentro)
2. Sube carpeta `src/` de backend (con config.php y helpers.php)
3. Sube carpeta `storage/` de backend (con carpeta mock/ y 4 JSONs)
4. Sube carpeta `database/` de backend (con init.sql)

### PASO 3: Configurar Base de Datos
1. Abre phpMyAdmin
2. Selecciona `techwor2_ordena`
3. Ejecuta TODO el script `init.sql`

### PASO 4: Probar
1. **Frontend:** https://ordena.smartpos.com.co
2. **API Summary:** https://ordena.smartpos.com.co/api/summary
3. **API Orders:** https://ordena.smartpos.com.co/api/orders
4. **API History:** https://ordena.smartpos.com.co/api/history

---

## 🔍 Verificación

### El .htaccess correcto está en:
- ❌ **NO:** `/public_html/ordena/public/.htaccess`
- ✅ **SÍ:** `/public_html/ordena/.htaccess`

### Los archivos del frontend están en:
- ❌ **NO:** `/public_html/ordena/public/`
- ✅ **SÍ:** `/public_html/ordena/` (raíz)

### El index.php del backend está en:
- ✅ **SÍ:** `/public_html/ordena/public/index.php`

---

## 🎯 URLs Finales

| URL | Archivo Servido |
|-----|-----------------|
| https://ordena.smartpos.com.co/ | `/public_html/ordena/index.html` |
| https://ordena.smartpos.com.co/assets/index-abc.css | `/public_html/ordena/assets/index-abc.css` |
| https://ordena.smartpos.com.co/api/orders | `/public_html/ordena/public/index.php` |
| https://ordena.smartpos.com.co/api/summary | `/public_html/ordena/public/index.php` |

---

## ⚠️ IMPORTANTE

**NO subas ningún .htaccess a `/public_html/ordena/public/`**

Solo debe haber UN .htaccess en la raíz: `/public_html/ordena/.htaccess`

---

## 📋 Resumen de Cambios

1. ✅ Creado `.htaccess` en la raíz del proyecto
2. ✅ Este .htaccess maneja TANTO frontend COMO backend
3. ✅ Frontend va en `/public_html/ordena/` (raíz)
4. ✅ Backend PHP va en `/public_html/ordena/public/`
5. ✅ Peticiones a `/api/*` se redirigen a `public/index.php`
6. ✅ Todas las demás rutas sirven `index.html` (React Router)

---

**¡Ahora la estructura es correcta para tu configuración! 🎉**
