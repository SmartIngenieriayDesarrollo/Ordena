<?php

/**
 * Simple helper utilities for mock persistence and responses.
 */
function readJson($path)
{
    if (!file_exists($path)) {
        return [];
    }

    $raw = file_get_contents($path);
    $decoded = json_decode($raw, true);

    return is_array($decoded) ? $decoded : [];
}

function writeJson($path, $data)
{
    if (!is_dir(dirname($path))) {
        mkdir(dirname($path), 0775, true);
    }

    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function jsonResponse($payload, $status = 200)
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

function loadMockData()
{
    $base = realpath(__DIR__ . '/../storage/mock');

    return [
        'patients' => readJson($base . '/patients.json'),
        'diets' => readJson($base . '/diets.json'),
        'orders' => readJson($base . '/orders.json'),
        'history' => readJson($base . '/history.json'),
    ];
}

function saveOrders($orders)
{
    $path = realpath(__DIR__ . '/..') . '/storage/mock/orders.json';
    writeJson($path, $orders);
}

function saveHistory($entries)
{
    $path = realpath(__DIR__ . '/..') . '/storage/mock/history.json';
    writeJson($path, $entries);
}

function buildSummary($orders)
{
    $totalActive = count($orders);
    $delivered = array_filter($orders, fn($order) => strtolower($order['status']) === 'servido');
    $inProgress = array_filter($orders, fn($order) => strtolower($order['status']) !== 'servido');
    $services = array_reduce($orders, function ($carry, $order) {
        $service = $order['service'];
        $carry[$service] = ($carry[$service] ?? 0) + 1;
        return $carry;
    }, []);

    return [
        'activePatients' => $totalActive,
        'openOrders' => count($inProgress),
        'todayMeals' => $totalActive,
        'pendingServices' => count($services),
    ];
}

function annotateOrders($orders, $patients, $diets)
{
    $patientsById = array_column($patients, null, 'id');
    $dietsById = array_column($diets, null, 'id');

    return array_map(function ($order) use ($patientsById, $dietsById) {
        $patient = $patientsById[$order['patientId']] ?? ['name' => 'Desconocido', 'bed' => 'N/A'];
        $diet = $dietsById[$order['dietId']] ?? ['name' => 'N/D'];
        $order['patientName'] = $patient['name'];
        $order['bed'] = $patient['bed'] ?? 'N/A';
        $order['dietName'] = $diet['name'];

        return $order;
    }, $orders);
}

function simulatePdf()
{
    return base64_encode("PDF simulado: consolidado de cocina generado el " . date('Y-m-d H:i'));
}
