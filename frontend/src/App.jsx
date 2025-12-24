import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';

const pageTitles = {
  '/pacientes': 'Pacientes',
  '/dietas': 'Catálogo de Dietas',
  '/ordenes': 'Órdenes Activas',
  '/cocina': 'Producción de Cocina',
  '/reportes': 'Reportes y Estadísticas',
  '/historial': 'Historial Completo',
};

export default function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentTitle = pageTitles[location.pathname] || 'Ordéna';

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg)' }}>
      <Sidebar isOpen={sidebarOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <HeaderBar title={currentTitle} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main style={{ flex: 1, overflow: 'auto', padding: 24 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

