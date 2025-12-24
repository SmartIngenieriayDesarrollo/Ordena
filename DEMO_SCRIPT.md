# 🎬 Guión de Demostración - Sistema Ordéna

## 📋 Descripción del Sistema

**Ordéna** es una plataforma digital para la gestión integral de nutrición hospitalaria que facilita la prescripción, preparación, trazabilidad y entrega de dietas a pacientes hospitalizados.

---

## 🎯 Objetivo de la Demo

Mostrar el flujo completo de trabajo del personal de nutrición desde la visualización de órdenes activas hasta la confirmación de entrega, con seguimiento en tiempo real.

---

## 👥 Personajes en la Demo

- **María Gutiérrez** - Nutricionista clínica (usuario principal)
- **Pacientes de ejemplo:**
  - Juan Pérez García (Cama 301-A) - Dieta blanda sin lácteos
  - María López Silva (Cama 205-B) - Dieta diabética 1800 kcal
  - Carlos Ramírez Torres (Cama 410-C) - Líquidos claros
  - Ana Martínez Cruz (Cama 102-A) - Hiposódica estricta

---

## 🎬 Escenario de Demostración

### **Contexto:** 
Es mediodía en el Hospital San José. María Gutiérrez, nutricionista del turno de día, ingresa al sistema Ordéna para revisar el estado de las órdenes de dieta del día y coordinar las entregas del servicio de almuerzo.

---

## 📝 Guión Paso a Paso

### **PASO 1: Bienvenida e Ingreso** (10 segundos)

**Acción:** Abrir el navegador en https://ordena.smartpos.com.co

**Narración:**
> "Bienvenidos al sistema Ordéna. María ingresa a la plataforma desde cualquier dispositivo con acceso a internet. La interfaz moderna y limpia le permite visualizar toda la información crítica de un vistazo."

**Elementos visibles:**
- ✅ Logo y marca "Ordéna - Nutrición hospitalaria"
- ✅ Menú lateral con opciones (Pacientes, Dietas, Órdenes, Cocina, Reportes, Historial)
- ✅ Header con fecha actual y nombre del profesional
- ✅ Badge "Tablero clínico digital"

---

### **PASO 2: Visualización del Dashboard** (15 segundos)

**Acción:** Observar las tarjetas de resumen en la parte superior

**Narración:**
> "El dashboard presenta un resumen ejecutivo con métricas clave: 4 pacientes activos, 3 órdenes pendientes de entrega, 4 raciones programadas para hoy y seguimiento de 3 servicios diferentes (desayuno, almuerzo y cena)."

**Elementos a destacar:**
- 📊 **Pacientes activos:** 4
- 📊 **Órdenes vigentes:** 3 (pendientes de entrega)
- 📊 **Raciones del día:** 4
- 📊 **Servicios pendientes:** 3 (Desayuno, Almuerzo, Cena)

**Animaciones visibles:**
- Efecto fade-in de las tarjetas
- Efecto hover al pasar el mouse (elevación suave)
- Iconos con colores distintivos

---

### **PASO 3: Revisión de Órdenes Activas** (20 segundos)

**Acción:** Desplazarse a la tabla de órdenes

**Narración:**
> "La tabla de órdenes muestra información detallada de cada prescripción: paciente, cama, tipo de dieta, servicio y estado actual. María puede filtrar rápidamente por servicio para enfocarse en las entregas del almuerzo."

**Elementos a destacar:**
- 📋 **Columnas de la tabla:**
  - Paciente (con nombre y número de cama)
  - Dieta prescrita
  - Servicio (Desayuno/Almuerzo/Cena)
  - Estado (En preparación/En ruta/Servido)
  - Acciones disponibles

**Órdenes visibles:**
1. Juan Pérez - Blanda sin lácteos - Almuerzo - **En preparación**
2. María López - Diabética 1800 kcal - Desayuno - **Servido** ✓
3. Carlos Ramírez - Líquidos claros - Cena - **En preparación**
4. Ana Martínez - Hiposódica estricta - Almuerzo - **En ruta**

**Interacción:** Hover sobre las filas (efecto de elevación y cambio de color)

---

### **PASO 4: Filtrado por Servicio** (15 segundos)

**Acción:** Hacer clic en el botón "Almuerzo"

**Narración:**
> "María utiliza el filtro de servicio para visualizar únicamente las órdenes del almuerzo. El sistema actualiza la tabla instantáneamente mostrando solo las 2 órdenes relevantes."

**Resultado del filtro:**
- 📌 Juan Pérez - Almuerzo - En preparación
- 📌 Ana Martínez - Almuerzo - En ruta

**Animación:** Transición suave de la tabla con efecto slide-in

**Acción adicional:** Volver a "Todos" para ver todas las órdenes

---

### **PASO 5: Marcado de Entrega** (25 segundos)

**Acción:** Hacer clic en "Marcar como entregado" en la orden de Ana Martínez (En ruta)

**Narración:**
> "Ana Martínez ya recibió su dieta hiposódica en la cama 102-A. María confirma la entrega con un solo clic. El sistema actualiza automáticamente el estado de la orden a 'Servido' y registra el evento en el historial con fecha y hora exactas."

**Secuencia de eventos:**
1. **Clic en botón** → Aparece indicador "Sincronizando cambios..."
2. **Cambio de estado** → La píldora de estado cambia de "En ruta" (azul) a "Servido" (verde)
3. **Actualización visual** → El botón se deshabilita y muestra opacidad reducida
4. **Registro en historial** → Nuevo evento aparece en el panel lateral

**Animaciones:**
- Efecto ripple en el botón al hacer clic
- Transición de color suave en el badge de estado
- Actualización del contador "Órdenes vigentes" (de 3 a 2)

---

### **PASO 6: Revisión del Historial** (20 segundos)

**Acción:** Observar el panel de historial a la derecha

**Narración:**
> "El historial de cambios registra cada acción con precisión: quién realizó la acción, sobre qué orden y en qué momento. Esta trazabilidad es esencial para auditorías y control de calidad."

**Eventos visibles en el historial:**
1. 🕐 **12:30 PM** - Entrega confirmada (Orden #104 - Ana Martínez) - María Gutiérrez
2. 🕐 **11:00 AM** - En preparación (Orden #104) - Cocina Central
3. 🕐 **10:00 AM** - Ajuste de dieta (Orden #102) - Dra. Sandra López
4. 🕐 **07:30 AM** - Entrega confirmada (Orden #102 - María López) - María Gutiérrez
5. 🕐 **06:00 AM** - Orden creada (Orden #103) - Dr. Carlos Ruiz

**Interacción:** Hover sobre items del historial (efecto de elevación y desplazamiento)

---

### **PASO 7: Panel de Observaciones** (15 segundos)

**Acción:** Escribir en el campo de observaciones

**Narración:**
> "María puede agregar observaciones rápidas o notas importantes. Por ejemplo, recordatorios sobre alergias específicas o cambios temporales en las prescripciones."

**Texto de ejemplo:**
> "Paciente Juan Pérez: Confirmar intolerancia a lactosa con médico tratante. Revisar prescripción para cena."

**Animación:** Efecto focus con borde de color turquesa y sombra suave

---

### **PASO 8: Generación de Listado PDF** (10 segundos)

**Acción:** Hacer clic en "Generar listado en PDF"

**Narración:**
> "Al finalizar el servicio, María puede generar un listado consolidado en PDF para la cocina con todas las dietas del próximo servicio. Este documento facilita la planificación y preparación masiva de alimentos."

**Resultado:** Badge verde indica "PDF listo (12:45:30)" con la hora de generación

---

### **PASO 9: Navegación en el Menú** (10 segundos)

**Acción:** Mostrar interacción con el menú lateral

**Narración:**
> "El sistema incluye módulos adicionales: gestión de pacientes, catálogo de dietas, módulo de cocina para preparación, reportes estadísticos y acceso al historial completo. Todo integrado en una sola plataforma."

**Elementos a destacar:**
- 👤 Pacientes - Gestión de admisiones y datos clínicos
- 📋 Dietas - Catálogo de tipos de dieta
- 📦 Órdenes - Vista actual (activa)
- 🍳 Cocina - Panel para personal de preparación
- 📊 Reportes - Estadísticas y análisis
- 🕐 Historial - Auditoría completa

**Animación:** Efecto hover con desplazamiento y cambio de brillo

---

### **PASO 10: Responsive y Accesibilidad** (10 segundos)

**Acción:** Redimensionar la ventana del navegador o mostrar en dispositivo móvil

**Narración:**
> "Ordéna es totalmente responsive. Funciona perfectamente en computadoras, tablets y smartphones, permitiendo al personal acceder desde cualquier lugar del hospital."

---

## 🎨 Elementos UI/UX Mejorados (Destacar durante la demo)

### **Animaciones y Transiciones:**
1. ✨ **Fade-in** al cargar componentes
2. ✨ **Hover effects** con elevación en cards y botones
3. ✨ **Slide-in** en filas de la tabla
4. ✨ **Ripple effect** en botones al hacer clic
5. ✨ **Color transitions** en badges de estado
6. ✨ **Shimmer effect** sutil en badges informativos
7. ✨ **Focus effects** en campos de texto con glow
8. ✨ **Pulse animation** en el logo del sidebar

### **Paleta de Colores:**
- 🎨 **Primario:** Turquesa (#4ecdc4) - Calma y profesionalismo
- 🎨 **Acento:** Azul cielo (#38bdf8) - Tecnología
- 🎨 **Fondo:** Degradado sutil blanco-gris
- 🎨 **Sidebar:** Azul oscuro (#0f172a) - Contraste elegante

### **Tipografía:**
- 📝 **Títulos:** Roboto Bold
- 📝 **Cuerpo:** Open Sans Regular
- 📝 **Iconos:** Heroicons (línea consistente)

---

## 📊 Flujo de Trabajo Demostrado

```
1. PRESCRIPCIÓN (médico tratante)
   ↓
2. REGISTRO en Ordéna (nutricionista)
   ↓
3. PREPARACIÓN (cocina)
   ↓
4. CONTROL DE CALIDAD (nutrición)
   ↓
5. DISTRIBUCIÓN (auxiliares)
   ↓
6. ENTREGA y CONFIRMACIÓN (enfermería/nutrición)
   ↓
7. TRAZABILIDAD en historial (auditoría)
```

---

## 💡 Beneficios Clave a Destacar

1. **✅ Reducción de errores:** Sistema digital elimina órdenes en papel
2. **✅ Trazabilidad completa:** Cada acción queda registrada con timestamp
3. **✅ Eficiencia operativa:** Filtros y visualización rápida
4. **✅ Acceso multiplataforma:** Disponible en cualquier dispositivo
5. **✅ Interfaz intuitiva:** No requiere capacitación extensa
6. **✅ Reportes automatizados:** Generación de PDFs y estadísticas
7. **✅ Cumplimiento normativo:** Registro para auditorías hospitalarias
8. **✅ Escalabilidad:** Funciona desde 10 hasta 1000+ pacientes

---

## 🔧 Aspectos Técnicos (para audiencia técnica)

- **Frontend:** React 18 + Vite (build optimizado)
- **Backend:** PHP 8+ (compatible con hosting compartido)
- **Base de datos:** MySQL 8.0
- **Hosting:** Bluehost con subdominioSSL
- **APIs:** REST JSON con CORS habilitado
- **Seguridad:** Headers de seguridad, sanitización de inputs
- **Performance:** Lazy loading, code splitting, assets optimizados (<2MB total)

---

## ⏱️ Tiempo Total de Demo

**Duración recomendada:** 3-5 minutos

**Desglose:**
- Introducción: 30 seg
- Dashboard y resumen: 45 seg
- Filtrado y búsqueda: 30 seg
- Acción principal (marcar entrega): 45 seg
- Historial y trazabilidad: 30 seg
- Funcionalidades adicionales: 45 seg
- Cierre y preguntas: 45 seg

---

## 🎤 Notas para el Presentador

1. **Inicia con el contexto:** Explica el problema que resuelve (gestión manual, errores, falta de trazabilidad)
2. **Muestra el valor inmediato:** Dashboard con métricas claras desde el inicio
3. **Haz la demo interactiva:** Realiza acciones reales (filtrar, marcar entrega)
4. **Destaca las animaciones:** Menciona la experiencia de usuario fluida
5. **Enfócate en el ROI:** Tiempo ahorrado, errores reducidos, satisfacción del personal
6. **Termina con próximos pasos:** Personalización, integración con HIS, módulos adicionales

---

## 📞 Preguntas Frecuentes (preparar respuestas)

**Q:** ¿Se integra con nuestro sistema hospitalario actual?  
**A:** Sí, mediante APIs REST. Puede conectarse a HIS, SAP o sistemas propietarios.

**Q:** ¿Qué pasa si no hay internet?  
**A:** Opción de modo offline con sincronización posterior (requiere desarrollo adicional).

**Q:** ¿Cuántos usuarios concurrentes soporta?  
**A:** En hosting compartido: 50-100. Con servidor dedicado: ilimitado.

**Q:** ¿Cuánto tiempo toma la implementación?  
**A:** Configuración básica: 1-2 días. Personalización completa: 2-4 semanas.

**Q:** ¿Incluye soporte y actualizaciones?  
**A:** Sí, según plan contratado (básico, profesional, enterprise).

---

**¡Éxito en tu demostración! 🎉**
