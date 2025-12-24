# 🏥 Ordéna - Sistema de Gestión de Nutrición Hospitalaria

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-production--ready-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Sistema completo de gestión digital para prescripción, preparación, trazabilidad y entrega de dietas hospitalarias.

**Demo en vivo:** https://ordena.smartpos.com.co

---

## 📋 Descripción

Ordéna es una plataforma web moderna que digitaliza y optimiza el flujo de trabajo de nutrición hospitalaria, desde la prescripción médica hasta la confirmación de entrega al paciente, con trazabilidad completa en cada paso.

### ✨ Características Principales

- 📊 **Dashboard ejecutivo** con métricas en tiempo real
- 📋 **Gestión de órdenes** con filtros inteligentes por servicio
- 🔄 **Trazabilidad completa** con historial de cambios
- ✅ **Confirmación de entrega** con un clic
- 📄 **Generación de reportes PDF** automatizados
- 🎨 **UI/UX moderna** con animaciones y transiciones suaves
- 📱 **Responsive design** (desktop, tablet, mobile)
- 🔒 **Seguro y escalable** para hosting compartido

---

## 🚀 Ejecución rápida

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

---

## 🌐 Despliegue en Bluehost

**📘 Guía completa:** [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)  
**📤 Lista de archivos:** [FILES_TO_UPLOAD.md](FILES_TO_UPLOAD.md)  
**🎬 Script de demo:** [DEMO_SCRIPT.md](DEMO_SCRIPT.md)

### Resumen rápido:

1. Subir carpeta `backend` a `/public_html/ordena/`
2. Subir contenido de `frontend/dist` a `/public_html/ordena/public/`
3. Configurar Document Root a `/public_html/ordena/public`
4. Ejecutar `database/init.sql` en phpMyAdmin
5. Verificar permisos (755 carpetas, 644 archivos)

---

## 🎨 Mejoras UI/UX Implementadas

- ✨ Animaciones **fade-in** suaves al cargar
- ✨ **Hover effects** con elevación en cards
- ✨ **Ripple effect** en botones
- ✨ **Color transitions** en badges de estado
- ✨ **Focus glow** en campos de texto
- ✨ **Pulse animation** en logo
- ✨ **Smooth scrolling** global

---

## 📊 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/summary` | Resumen con métricas |
| GET | `/api/orders` | Lista de órdenes |
| GET | `/api/history` | Historial de cambios |
| POST | `/api/orders/{id}/deliver` | Marcar como entregado |

---

## 🗄️ Base de Datos MySQL

Script de inicialización: [backend/database/init.sql](backend/database/init.sql)

**Tablas:**
- `patients` - Pacientes
- `diets` - Catálogo de dietas
- `orders` - Órdenes de dieta
- `history` - Historial de cambios

---

## 📚 Documentación Adicional

- 📘 [Guía de Despliegue Completa](DEPLOYMENT_GUIDE.md)
- 🎬 [Guión de Demostración](DEMO_SCRIPT.md)
- 📤 [Lista de Archivos a Subir](FILES_TO_UPLOAD.md)

---

## 💻 Tecnologías

**Frontend:** React 18 + Vite + Heroicons  
**Backend:** PHP 8+ + MySQL 8.0  
**Hosting:** Bluehost con SSL/HTTPS

---

**¿Listo para transformar la nutrición hospitalaria? 🚀**

Consulta [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) para comenzar.

