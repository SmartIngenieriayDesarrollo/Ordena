import React from 'react';
import { CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function HeaderBar({ title, professional }) {
  const today = new Date();
  const dateLabel = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="header-bar">
      <div className="header-info">
        <p className="badge">Tablero clínico digital</p>
        <h1>{title}</h1>
        <p className="header-meta">Gestiona la prescripción y entrega de dietas en tiempo real.</p>
      </div>
      <div className="header-meta">
        <CalendarDaysIcon width={28} color="#4ecdc4" />
        <strong>{dateLabel}</strong>
        <UserCircleIcon width={38} color="#4ecdc4" />
        <div>
          <p style={{ margin: 0, fontWeight: 700 }}>{professional}</p>
          <small style={{ color: '#6c757d' }}>Nutrición</small>
        </div>
      </div>
    </div>
  );
}
