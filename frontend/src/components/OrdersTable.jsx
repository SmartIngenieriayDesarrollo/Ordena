import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function ServiceFilter({ selected, services, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      <strong>Servicio:</strong>
      {['Todos', ...services].map((service) => (
        <button
          key={service}
          className={`button ${selected === service ? '' : 'ghost'}`}
          style={{ background: selected === service ? undefined : '#fff', color: selected === service ? '#fff' : '#495057', border: '1px solid var(--border)', boxShadow: 'none' }}
          onClick={() => onChange(service)}
        >
          {service}
        </button>
      ))}
    </div>
  );
}

export default function OrdersTable({ orders, onDeliver, filter, setFilter }) {
  const services = Array.from(new Set(orders.map((o) => o.service)));
  const filtered = filter === 'Todos' ? orders : orders.filter((order) => order.service === filter);

  const statusBadge = (status) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('servido')) return 'success';
    if (normalized.includes('ruta')) return 'info';
    return 'warning';
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
        <div>
          <h3 style={{ margin: 0 }}>Órdenes de dieta</h3>
          <p style={{ margin: '6px 0 0', color: '#6c757d' }}>Prescripción, estado y trazabilidad en un vistazo.</p>
        </div>
        <ServiceFilter selected={filter} services={services} onChange={setFilter} />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Dieta</th>
            <th>Servicio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((order) => (
            <tr key={order.id}>
              <td>
                <strong>{order.patientName}</strong>
                <div style={{ color: '#6c757d', fontSize: 13 }}>Cama {order.bed}</div>
              </td>
              <td>{order.dietName}</td>
              <td>{order.service}</td>
              <td>
                <span className={`status-pill ${statusBadge(order.status)}`}>
                  <CheckCircleIcon width={18} />
                  {order.status}
                </span>
              </td>
              <td>
                <button
                  className="button"
                  style={{ opacity: order.status === 'Servido' ? 0.6 : 1 }}
                  disabled={order.status === 'Servido'}
                  onClick={() => onDeliver(order.id)}
                >
                  Marcar como entregado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
