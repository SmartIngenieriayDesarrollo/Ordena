import React from 'react';
import { ClipboardDocumentCheckIcon, ClockIcon, DocumentChartBarIcon, HomeIcon, QueueListIcon, UserIcon } from '@heroicons/react/24/outline';
import '../styles/sidebar.css';

const menuItems = [
  { label: 'Pacientes', icon: UserIcon },
  { label: 'Dietas', icon: ClipboardDocumentCheckIcon },
  { label: 'Órdenes', icon: QueueListIcon },
  { label: 'Cocina', icon: HomeIcon },
  { label: 'Reportes', icon: DocumentChartBarIcon },
  { label: 'Historial', icon: ClockIcon },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-dot" />
        <div>
          <p className="brand-label">Ordéna</p>
          <small>Nutrición hospitalaria</small>
        </div>
      </div>

      <nav className="menu">
        {menuItems.map(({ label, icon: Icon }) => (
          <button key={label} className={`menu-item ${label === 'Órdenes' ? 'active' : ''}`}>
            <Icon className="menu-icon" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="footer-title">Auditoría rápida</p>
        <p className="footer-text">Sigue la trazabilidad de cada ración en tiempo real.</p>
      </div>
    </aside>
  );
}
