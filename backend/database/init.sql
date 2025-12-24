-- Ordéna - Script de inicialización de base de datos MySQL
-- Base de datos: techwor2_ordena
-- Ejecutar este script en phpMyAdmin de Bluehost

-- Configurar codificación
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- ===================================
-- Tabla: patients (Pacientes)
-- ===================================
CREATE TABLE IF NOT EXISTS `patients` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `bed` VARCHAR(50) NOT NULL,
  `service` VARCHAR(100) NOT NULL,
  `admission_date` DATE NOT NULL,
  `medical_record` VARCHAR(50) UNIQUE,
  `allergies` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_service` (`service`),
  INDEX `idx_admission` (`admission_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- Tabla: diets (Dietas)
-- ===================================
CREATE TABLE IF NOT EXISTS `diets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `type` VARCHAR(100),
  `calories` INT,
  `restrictions` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- Tabla: orders (Órdenes de dieta)
-- ===================================
CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `patient_id` INT NOT NULL,
  `diet_id` INT NOT NULL,
  `service` VARCHAR(100) NOT NULL COMMENT 'Desayuno, Almuerzo, Cena',
  `status` VARCHAR(50) DEFAULT 'En preparación' COMMENT 'En preparación, En ruta, Servido',
  `notes` TEXT,
  `start_date` DATE NOT NULL,
  `end_date` DATE,
  `delivered_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`patient_id`) REFERENCES `patients`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`diet_id`) REFERENCES `diets`(`id`) ON DELETE RESTRICT,
  INDEX `idx_status` (`status`),
  INDEX `idx_service` (`service`),
  INDEX `idx_dates` (`start_date`, `end_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- Tabla: history (Historial de cambios)
-- ===================================
CREATE TABLE IF NOT EXISTS `history` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT NOT NULL,
  `action` VARCHAR(255) NOT NULL,
  `user` VARCHAR(255),
  `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `details` TEXT,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  INDEX `idx_order` (`order_id`),
  INDEX `idx_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- Insertar datos de prueba (Mock)
-- ===================================

-- Pacientes
INSERT INTO `patients` (`name`, `bed`, `service`, `admission_date`, `medical_record`, `allergies`) VALUES
('Juan Pérez García', '301-A', 'Cirugía General', '2024-06-01', 'HC001234', 'Lactosa'),
('María López Silva', '205-B', 'Medicina Interna', '2024-06-02', 'HC005678', NULL),
('Carlos Ramírez Torres', '410-C', 'Cardiología', '2024-06-03', 'HC009012', 'Gluten'),
('Ana Martínez Cruz', '102-A', 'Oncología', '2024-06-04', 'HC003456', NULL);

-- Dietas
INSERT INTO `diets` (`name`, `description`, `type`, `calories`, `restrictions`) VALUES
('Blanda sin lácteos', 'Dieta de fácil digestión sin productos lácteos', 'Terapéutica', 1800, 'Sin lactosa'),
('Diabética 1800 kcal', 'Dieta controlada en carbohidratos para diabéticos', 'Terapéutica', 1800, 'Bajo índice glucémico'),
('Líquidos claros', 'Dieta líquida de transición post-operatoria', 'Terapéutica', 800, 'Solo líquidos'),
('Hiposódica estricta', 'Dieta baja en sodio para hipertensión', 'Terapéutica', 2000, 'Máximo 2g sodio/día');

-- Órdenes
INSERT INTO `orders` (`patient_id`, `diet_id`, `service`, `status`, `notes`, `start_date`, `end_date`) VALUES
(1, 1, 'Almuerzo', 'En preparación', 'Sin lácteos', '2024-06-01', '2024-06-07'),
(2, 2, 'Desayuno', 'Servido', 'Revisar glucosa', '2024-06-02', '2024-06-09'),
(3, 3, 'Cena', 'En preparación', 'Textura extra blanda', '2024-06-03', '2024-06-10'),
(4, 4, 'Almuerzo', 'En ruta', 'Agregar fruta', '2024-06-04', '2024-06-11');

-- Historial
INSERT INTO `history` (`order_id`, `action`, `user`, `timestamp`, `details`) VALUES
(1, 'Orden creada', 'Dr. Alberto Gómez', '2024-06-01 08:00:00', 'Prescripción inicial'),
(2, 'Entrega confirmada', 'María Gutiérrez', '2024-06-02 07:30:00', 'Entregado en habitación'),
(2, 'Ajuste de dieta', 'Dra. Sandra López', '2024-06-02 10:00:00', 'Reducción de carbohidratos'),
(3, 'Orden creada', 'Dr. Carlos Ruiz', '2024-06-03 18:00:00', 'Post-operatorio día 1'),
(4, 'En preparación', 'Cocina Central', '2024-06-04 11:00:00', 'Inicio de preparación');

-- ===================================
-- Vista para órdenes con información completa
-- ===================================
CREATE OR REPLACE VIEW `v_orders_complete` AS
SELECT 
    o.id,
    o.patient_id,
    p.name AS patient_name,
    p.bed,
    o.diet_id,
    d.name AS diet_name,
    o.service,
    o.status,
    o.notes,
    o.start_date,
    o.end_date,
    o.delivered_at,
    o.created_at,
    o.updated_at
FROM orders o
INNER JOIN patients p ON o.patient_id = p.id
INNER JOIN diets d ON o.diet_id = d.id
ORDER BY o.created_at DESC;

-- ===================================
-- Vista para historial con información completa
-- ===================================
CREATE OR REPLACE VIEW `v_history_complete` AS
SELECT 
    h.id,
    h.order_id,
    h.action,
    h.user,
    h.timestamp,
    h.details,
    p.name AS patient_name,
    o.service
FROM history h
INNER JOIN orders o ON h.order_id = o.id
INNER JOIN patients p ON o.patient_id = p.id
ORDER BY h.timestamp DESC;

-- ===================================
-- Usuario de aplicación (opcional)
-- ===================================
-- Si necesitas autenticación básica, descomenta:
-- CREATE TABLE IF NOT EXISTS `users` (
--   `id` INT AUTO_INCREMENT PRIMARY KEY,
--   `username` VARCHAR(100) UNIQUE NOT NULL,
--   `password_hash` VARCHAR(255) NOT NULL,
--   `full_name` VARCHAR(255),
--   `role` VARCHAR(50) DEFAULT 'user',
--   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ===================================
-- Verificación
-- ===================================
SELECT 'Base de datos inicializada correctamente' AS status;
SELECT COUNT(*) AS total_patients FROM patients;
SELECT COUNT(*) AS total_diets FROM diets;
SELECT COUNT(*) AS total_orders FROM orders;
SELECT COUNT(*) AS total_history FROM history;
