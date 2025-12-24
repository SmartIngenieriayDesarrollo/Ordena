import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardDocumentCheckIcon, ClockIcon, DocumentChartBarIcon, HomeIcon, QueueListIcon, UserIcon } from '@heroicons/react/24/outline';
import '../styles/sidebar.css';

const menuItems = [
  { label: 'Pacientes', icon: UserIcon, path: '/pacientes' },
  { label: 'Dietas', icon: ClipboardDocumentCheckIcon, path: '/dietas' },
  { label: 'Órdenes', icon: QueueListIcon, path: '/ordenes' },
  { label: 'Cocina', icon: HomeIcon, path: '/cocina' },
  { label: 'Reportes', icon: DocumentChartBarIcon, path: '/reportes' },
  { label: 'Historial', icon: ClockIcon, path: '/historial' },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
      <div className="brand">
        <div className="brand-dot" />
        <div>
          <p className="brand-label">Ordéna</p>
          <small>Nutrición hospitalaria</small>
        </div>
      </div>

      <nav className="menu">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
          >
            <Icon className="menu-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="footer-title">Auditoría rápida</p>
        <p className="footer-text">Sigue la trazabilidad de cada ración en tiempo real.</p>
      </div>
    </aside>
  );
}
