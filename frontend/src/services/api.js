// Usar ruta relativa en producción, localhost en desarrollo
const BASE_URL = import.meta.env.VITE_BACKEND_URL || (import.meta.env.DEV ? 'http://localhost:8000' : '');

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Error de red');
  }

  return response.json();
}

export async function fetchSummary() {
  return request('/api/summary');
}

export async function fetchOrders() {
  return request('/api/orders');
}

export async function deliverOrder(id) {
  return request(`/api/orders/${id}/deliver`, { method: 'POST' });
}

export async function fetchHistory() {
  return request('/api/history');
}

export async function fetchPdf() {
  return request('/api/pdf');
}
