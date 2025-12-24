import React from 'react';
import { CheckCircleIcon, ClipboardIcon, FireIcon, TruckIcon } from '@heroicons/react/24/outline';

const cardData = [
  { label: 'Pacientes activos', key: 'activePatients', icon: CheckCircleIcon, color: '#0d9488' },
  { label: 'Órdenes vigentes', key: 'openOrders', icon: ClipboardIcon, color: '#0ea5e9' },
  { label: 'Raciones del día', key: 'todayMeals', icon: TruckIcon, color: '#8b5cf6' },
  { label: 'Servicios pendientes', key: 'pendingServices', icon: FireIcon, color: '#f59e0b' },
];

export default function SummaryCards({ stats }) {
  return (
    <div className="card-grid">
      {cardData.map(({ label, key, icon: Icon, color }) => (
        <div key={key} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>{label}</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700, color: 'var(--text)' }}>
                {stats[key] ?? '—'}
              </h2>
            </div>
            <div style={{ 
              width: 44, 
              height: 44, 
              borderRadius: 12, 
              background: `${color}12`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon width={22} color={color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
