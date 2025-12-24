# Ordéna - Sistema de Gestión de Nutrición Hospitalaria 🏥

Sistema completo de gestión y trazabilidad de dietas hospitalarias. Desarrollado con React + Vite en el frontend y PHP en el backend.

---

## 🎯 Características Implementadas

### ✅ 6 Páginas Completas

1. **Pacientes** (`/pacientes`)
   - Lista completa de pacientes con filtros
   - Búsqueda por nombre o cama
   - Filtro por servicio médico
   - Cards con información detallada
   - Alertas de alergias

2. **Catálogo de Dietas** (`/dietas`)
   - Tipos de dieta disponibles
   - Información nutricional completa (calorías, proteínas, carbohidratos, grasas)
   - Restricciones y consideraciones
   - Filtrado por tipo (Terapéutica, Especial)

3. **Órdenes Activas** (`/ordenes`)
   - Dashboard principal con métricas
   - Tabla de órdenes con filtros por servicio
   - Historial de cambios en timeline
   - Panel de observaciones
   - Acción: Marcar como entregado

4. **Producción de Cocina** (`/cocina`)
   - Estado de preparación por servicio (Desayuno, Almuerzo, Cena)
   - Progreso visual con barras animadas
   - Desglose por tipo de dieta
   - Métricas: Completadas, En preparación, Pendientes
   - Resumen consolidado del día

5. **Reportes y Estadísticas** (`/reportes`)
   - Gráfico de barras: Órdenes por día de la semana
   - Gráfico circular: Distribución de tipos de dieta
   - Métricas destacadas del mes
   - Rendimiento por servicio
   - Comparación con períodos anteriores

6. **Historial Completo** (`/historial`)
   - Timeline de todas las acciones del sistema
   - Filtros: Por acción, paciente, usuario
   - Búsqueda avanzada
   - Iconos y colores por tipo de acción
   - Exportación de historial

---

## 🎨 UI/UX Mejorada

### Animaciones CSS
- ✨ **fadeInUp**: Entrada suave de cards
- 🎯 **slideIn**: Entrada lateral de filas de tabla
- 💫 **shimmer**: Efecto pulsante en badges
- 🌊 **pulse**: Animación del logo
- ⚡ **sweep**: Efecto hover en menú
- 🎭 **ripple**: Efecto click en botones

### Transiciones
- Hover effects con `translateY(-4px)`
- Smooth shadows con cubic-bezier
- Scale effects en badges
- Color transitions en 300ms

### Responsive Design
- 📱 **Mobile-first**: Sidebar colapsable
- 📊 **Tables**: Scroll horizontal en móvil
- 🎴 **Cards**: Grid adaptativo con `repeat(auto-fill, minmax())`
- 🍔 **Hamburger menu**: Botón toggle en < 768px
- 📐 **Flexbox**: Layout flexible para todos los tamaños

---

## 🔧 Tecnologías

### Frontend
- **React 18.2** - Librería UI
- **React Router 6** - Navegación SPA
- **Vite 5.2** - Build tool ultra-rápido
- **Recharts** - Gráficos interactivos
- **Heroicons** - Iconos SVG

### Backend
- **PHP 8+** - API REST
- **MySQL 8.0** - Base de datos
- **Apache mod_rewrite** - Routing

### Hosting
- **Bluehost** - Shared hosting
- Subdomain: https://ordena.smartpos.com.co

---

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── HeaderBar.jsx        # Header con título y fecha
│   │   ├── Sidebar.jsx          # Menú lateral navegable
│   │   ├── SummaryCards.jsx     # Cards de métricas
│   │   ├── OrdersTable.jsx      # Tabla de órdenes
│   │   ├── HistoryList.jsx      # Timeline de eventos
│   │   └── ObservationPanel.jsx # Panel de notas
│   ├── pages/
│   │   ├── PatientsPage.jsx     # Vista pacientes
│   │   ├── DietsPage.jsx        # Vista catálogo dietas
│   │   ├── OrdersPage.jsx       # Vista órdenes (dashboard)
│   │   ├── KitchenPage.jsx      # Vista producción cocina
│   │   ├── ReportsPage.jsx      # Vista reportes con gráficos
│   │   └── HistoryPage.jsx      # Vista historial completo
│   ├── data/
│   │   └── mockData.js          # Datos mock para demo
│   ├── services/
│   │   └── api.js               # Cliente API (fetch)
│   ├── styles/
│   │   ├── global.css           # Estilos globales + animaciones
│   │   └── sidebar.css          # Estilos sidebar + responsive
│   ├── App.jsx                  # Router principal
│   └── main.jsx                 # Entry point con BrowserRouter
├── dist/                        # Build de producción
├── public/                      # Assets estáticos
└── index.html                   # HTML base

backend/
├── public/
│   └── index.php                # Router API
├── src/
│   ├── config.php               # Configuración DB
│   └── helpers.php              # Funciones auxiliares
├── database/
│   └── init.sql                 # Schema + datos mock
└── storage/
    └── mock/                    # JSON mock data
```

---

## 🚀 Comandos de Desarrollo

### Instalar dependencias
```bash
cd frontend
npm install
```

### Modo desarrollo
```bash
npm run dev
```

### Construir para producción
```bash
npm run build
```

---

## 📦 Dependencias Instaladas

### React Router
```json
{
  "react-router-dom": "^6.x.x"
}
```

### Recharts (Gráficos)
```json
{
  "recharts": "^2.x.x"
}
```

---

## 🔄 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `<Navigate>` | Redirect a `/ordenes` |
| `/pacientes` | `PatientsPage` | Gestión de pacientes |
| `/dietas` | `DietsPage` | Catálogo de dietas |
| `/ordenes` | `OrdersPage` | Dashboard de órdenes |
| `/cocina` | `KitchenPage` | Producción de cocina |
| `/reportes` | `ReportsPage` | Reportes y gráficos |
| `/historial` | `HistoryPage` | Historial completo |

---

## 🎯 Mock Data

El sistema incluye datos de demostración completos:

- **5 pacientes** con datos clínicos reales
- **6 dietas** con información nutricional
- **4 órdenes** en diferentes estados
- **5 registros** de historial
- **3 servicios** de cocina (Desayuno, Almuerzo, Cena)
- **Estadísticas** semanales y mensuales

---

## 📱 Breakpoints Responsive

```css
/* Desktop: > 768px */
- Sidebar fijo
- Grid 3-4 columnas

/* Tablet: 600-768px */
- Sidebar colapsable
- Grid 2 columnas

/* Mobile: < 600px */
- Sidebar overlay
- Grid 1 columna
- Tables scroll horizontal
```

---

## 🎨 Paleta de Colores

```css
--primary: #4ecdc4      /* Teal */
--primary-hover: #3bb5ad
--bg: #ffffff
--card: #f8f9fa
--text: #495057
--border: #e9ecef
--muted: #6c757d
```

---

## ✅ Features Demo-Ready

- ✅ Navegación funcional entre páginas
- ✅ Datos mock en todas las vistas
- ✅ Filtros y búsquedas operativas
- ✅ Gráficos interactivos (Recharts)
- ✅ Animaciones CSS smooth
- ✅ Diseño responsive completo
- ✅ Sidebar colapsable en móvil
- ✅ Build optimizado (595 KB total, 179 KB gzip)

---

## 📊 Build Stats

```
dist/index.html                   0.79 kB │ gzip:   0.44 kB
dist/assets/index.css             8.29 kB │ gzip:   2.30 kB
dist/assets/react-vendor.js     141.26 kB │ gzip:  45.40 kB
dist/assets/index.js            444.96 kB │ gzip: 131.91 kB
──────────────────────────────────────────────────────
Total:                          595.30 kB │ gzip: 179.65 kB
```

---

## 🎯 Próximos Pasos

1. Subir `dist/` a `/public_html/ordena/`
2. Sistema completamente funcional en https://ordena.smartpos.com.co
3. Todas las vistas navegables y con datos
4. Listo para demostración completa

---

## 👨‍💻 Desarrollo

**Última actualización**: 24 Diciembre 2025
**Versión**: 2.0.0 - Full Feature Release

---

## 📝 Notas

- El sistema usa mock data en frontend para demostración
- Backend PHP disponible para integración futura
- Todas las animaciones usan GPU acceleration (transform, opacity)
- Código optimizado con code splitting de Vite
- React Router en modo browser history

---

**¡Sistema 100% listo para demo! 🎉**
