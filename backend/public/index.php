<?php

require __DIR__ . '/../src/helpers.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    jsonResponse(['ok' => true]);
}

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];
$data = loadMockData();

// Ruteo minimalista pensado para hosting compartido sin frameworks.
switch ([$method, $path]) {
    case ['GET', '/']:
        $message = [
            'app' => 'Ordéna demo backend',
            'endpoints' => ['/api/summary', '/api/orders', '/api/history', '/api/pdf'],
        ];
        jsonResponse($message);
        break;

    case ['GET', '/api/summary']:
        $summary = buildSummary($data['orders']);
        jsonResponse($summary);
        break;

    case ['GET', '/api/orders']:
        $orders = annotateOrders($data['orders'], $data['patients'], $data['diets']);
        jsonResponse(['orders' => $orders]);
        break;

    case ['GET', '/api/history']:
        jsonResponse(['history' => $data['history']]);
        break;

    case ['GET', '/api/pdf']:
        jsonResponse([
            'generatedAt' => date('c'),
            'content' => simulatePdf(),
            'note' => 'PDF simulado para hosting compartido. Sustituir por librería dompdf o TCPDF en producción.',
        ]);
        break;
}

if ($method === 'POST' && preg_match('#^/api/orders/(\d+)/deliver$#', $path, $matches)) {
    $orderId = (int) $matches[1];
    $orders = $data['orders'];
    $found = false;

    foreach ($orders as &$order) {
        if ($order['id'] === $orderId) {
            $found = true;
            $order['status'] = 'Servido';
            $order['deliveredAt'] = date('c');
            break;
        }
    }

    if (!$found) {
        jsonResponse(['message' => 'Orden no encontrada'], 404);
    }

    saveOrders($orders);

    $history = $data['history'];
    $history[] = [
        'id' => count($history) + 1,
        'orderId' => $orderId,
        'action' => 'Entrega confirmada',
        'timestamp' => date('c'),
        'user' => 'Demo (María Gutiérrez)',
    ];
    saveHistory($history);

    jsonResponse(['message' => 'Orden marcada como entregada', 'orderId' => $orderId]);
}

jsonResponse(['message' => 'Ruta no encontrada'], 404);
