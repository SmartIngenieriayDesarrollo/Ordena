<?php

/**
 * Configuración de base de datos para Ordéna en Bluehost
 * 
 * IMPORTANTE: En producción, considera usar variables de entorno
 * o un archivo .env para mayor seguridad.
 */

// Configuración de base de datos MySQL
define('DB_HOST', 'localhost');
define('DB_NAME', 'techwor2_ordena');
define('DB_USER', 'techwor2_ordena');
define('DB_PASS', 'Ordena;13934');
define('DB_CHARSET', 'utf8mb4');

/**
 * Obtiene una conexión PDO a la base de datos
 * 
 * @return PDO
 * @throws Exception si la conexión falla
 */
function getDbConnection()
{
    static $pdo = null;

    if ($pdo === null) {
        try {
            $dsn = sprintf(
                'mysql:host=%s;dbname=%s;charset=%s',
                DB_HOST,
                DB_NAME,
                DB_CHARSET
            );

            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            error_log('Database connection error: ' . $e->getMessage());
            throw new Exception('No se pudo conectar a la base de datos');
        }
    }

    return $pdo;
}

/**
 * Modo de almacenamiento: 'json' para archivos mock o 'mysql' para base de datos
 * Cambia a 'mysql' cuando hayas migrado los datos a la base de datos
 */
define('STORAGE_MODE', 'json'); // Cambiar a 'mysql' cuando esté listo

/**
 * Configuración de CORS (orígenes permitidos)
 */
define('ALLOWED_ORIGINS', [
    'https://ordena.smartpos.com.co',
    'http://localhost:5173', // Para desarrollo local
]);

/**
 * Configuración de zona horaria
 */
date_default_timezone_set('America/Bogota');

/**
 * Modo de depuración (desactivar en producción)
 */
define('DEBUG_MODE', false); // Cambiar a false en producción

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
