import React from 'react';
import { CheckCircleIcon, ClipboardIcon, FireIcon, TruckIcon } from '@heroicons/react/24/solid';

const icons = [
  CheckCircleIcon,
  ClipboardIcon,
  TruckIcon,
  FireIcon,
];

export default function SummaryCards({ stats }) {
  const cards = [
    { label: 'Pacientes activos', value: stats.activePatients },
    { label: 'Órdenes vigentes', value: stats.openOrders },
    { label: 'Raciones del día', value: stats.todayMeals },
    { label: 'Servicios pendientes', value: stats.pendingServices },
  ];

  return (
    <div className="card-grid">
      {cards.map(({ label, value }, index) => {
        const Icon = icons[index];

        return (
          <div key={label} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ margin: 0, color: '#6c757d', fontWeight: 600 }}>{label}</p>
              <Icon width={26} color="#4ecdc4" />
            </div>
            <h2 style={{ marginTop: 12 }}>{value ?? '—'}</h2>
            <p style={{ margin: 0, color: '#6c757d' }}>Datos simulados, listos para conectar a tu base real.</p>
          </div>
        );
      })}
    </div>
  );
}
