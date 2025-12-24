import React from 'react';
import { Bars3Icon, CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function HeaderBar({ title, professional = 'Dra. María Gutiérrez', onMenuClick }) {
  const today = new Date();
  const dateLabel = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="header-bar">
      <div className="header-info">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="menu-toggle" onClick={onMenuClick}>
            <Bars3Icon width={22} />
          </button>
          <div>
            <span className="badge">Sistema de Nutrición</span>
            <h1 style={{ marginTop: 8 }}>{title}</h1>
          </div>
        </div>
      </div>
      <div className="header-meta">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CalendarDaysIcon width={18} color="var(--primary)" />
          <span style={{ fontWeight: 500 }}>{dateLabel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <UserCircleIcon width={32} color="var(--primary)" />
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{professional}</p>
            <p style={{ margin: 0, fontSize: 12, color: 'var(--text-muted)' }}>Nutrición Clínica</p>
          </div>
        </div>
      </div>
    </div>
  );
}
