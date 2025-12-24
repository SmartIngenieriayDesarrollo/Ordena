# Ordéna - Lista de Archivos a Subir al Servidor

## 📤 BACKEND - Subir a: /public_html/ordena/

```
backend/
├── public/
│   ├── index.php                    ✓ OBLIGATORIO
│   └── .htaccess                    ✓ OBLIGATORIO (nuevo)
├── src/
│   ├── config.php                   ✓ OBLIGATORIO (nuevo)
│   └── helpers.php                  ✓ OBLIGATORIO
├── storage/
│   └── mock/
│       ├── diets.json               ✓ OBLIGATORIO
│       ├── history.json             ✓ OBLIGATORIO
│       ├── orders.json              ✓ OBLIGATORIO
│       └── patients.json            ✓ OBLIGATORIO
└── database/
    └── init.sql                     ✓ OBLIGATORIO (ejecutar en phpMyAdmin)
```

**Total Backend:** ~7 archivos + 1 carpeta vacía

---

## 📤 FRONTEND - Subir SOLO contenido de /dist/ a: /public_html/ordena/public/

```
frontend/dist/
├── index.html                       ✓ OBLIGATORIO
└── assets/
    ├── index-[hash].js              ✓ OBLIGATORIO (archivo generado)
    ├── index-[hash].css             ✓ OBLIGATORIO (archivo generado)
    └── [otros archivos con hash]    ✓ OBLIGATORIO
```

**Total Frontend:** 3-5 archivos (depende del build)

⚠️ **IMPORTANTE:**
- NO subas la carpeta "dist", solo su CONTENIDO
- Los archivos de frontend van en `/public_html/ordena/public/`
- Los archivos tendrán nombres con hash como `index-a1b2c3d4.js`

---

## 🔧 Archivos de Configuración NO Subir (solo para desarrollo local)

```
❌ NO SUBIR:
- frontend/node_modules/           (carpeta de dependencias)
- frontend/.env.development        (solo para local)
- frontend/src/                    (código fuente, ya compilado)
- frontend/package.json            (ya no necesario en servidor)
- frontend/package-lock.json       (ya no necesario en servidor)
- frontend/vite.config.js          (ya no necesario en servidor)
- backend/README.md                (opcional)
- .git/                            (si usas Git)
- .gitignore                       (si usas Git)
```

---

## ✅ Verificación Pre-Subida

Antes de subir, verifica que:

1. **Backend:**
   - [ ] Existe `backend/public/.htaccess`
   - [ ] Existe `backend/src/config.php`
   - [ ] Existen los 4 archivos JSON en `backend/storage/mock/`

2. **Frontend:**
   - [ ] Existe `frontend/dist/index.html`
   - [ ] Existe `frontend/dist/assets/` con archivos JS y CSS
   - [ ] Ejecutaste `npm run build` exitosamente

---

## 📋 Estructura Final en el Servidor

```
/public_html/ordena/                    ← Carpeta raíz del proyecto
├── public/                             ← Document Root (accesible vía web)
│   ├── index.php                       ← Backend API
│   ├── .htaccess                       ← Configuración Apache
│   ├── index.html                      ← Frontend principal
│   └── assets/                         ← Assets del frontend
│       ├── index-[hash].js
│       └── index-[hash].css
├── src/
│   ├── config.php
│   └── helpers.php
├── storage/
│   └── mock/
│       ├── diets.json
│       ├── history.json
│       ├── orders.json
│       └── patients.json
└── database/
    └── init.sql
```

---

## 🚀 Orden de Subida Recomendado

### Paso 1: Subir Backend
1. Conecta por FTP o usa File Manager de cPanel
2. Crea la carpeta `/public_html/ordena/`
3. Sube toda la estructura del backend

### Paso 2: Subir Frontend
1. Navega a `/public_html/ordena/public/`
2. Sube `index.html` desde `frontend/dist/`
3. Sube la carpeta `assets/` desde `frontend/dist/`

### Paso 3: Configurar Base de Datos
1. Abre phpMyAdmin
2. Ejecuta el script `database/init.sql`

### Paso 4: Verificar
1. Visita: https://ordena.smartpos.com.co/api/summary
2. Visita: https://ordena.smartpos.com.co

---

## 📊 Tamaño Estimado de Archivos

- Backend: ~50 KB
- Frontend (compilado): ~500 KB - 1 MB
- Base de datos: ~10 KB (datos de prueba)

**Total aproximado:** < 2 MB

---

## 🔍 Verificar el Build del Frontend

Para asegurarte de que el build se generó correctamente:

### Windows PowerShell:
```powershell
# Verificar que existe la carpeta dist
Test-Path "frontend\dist"

# Listar contenido
Get-ChildItem "frontend\dist" -Recurse

# Ver tamaño
Get-ChildItem "frontend\dist" -Recurse | Measure-Object -Property Length -Sum
```

### Linux/Mac:
```bash
# Verificar que existe la carpeta dist
ls -la frontend/dist

# Ver tamaño
du -sh frontend/dist
```

Deberías ver:
- ✅ `index.html` (~2-5 KB)
- ✅ Carpeta `assets/` con archivos JS (~300-500 KB) y CSS (~20-50 KB)

---

## 💡 Consejos Finales

1. **Usa FileZilla o WinSCP** para FTP si tienes muchos archivos
2. **Comprime en ZIP** los archivos antes de subir y descomprime en el servidor (más rápido)
3. **Mantén backup local** de todos los archivos antes de modificar en el servidor
4. **Verifica permisos** después de subir: 755 para carpetas, 644 para archivos

---

**¿Listo para subir?** Sigue la guía paso a paso en `DEPLOYMENT_GUIDE.md`
