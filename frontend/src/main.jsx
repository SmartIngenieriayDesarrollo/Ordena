import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import PatientsPage from './pages/PatientsPage';
import DietsPage from './pages/DietsPage';
import OrdersPage from './pages/OrdersPage';
import KitchenPage from './pages/KitchenPage';
import ReportsPage from './pages/ReportsPage';
import HistoryPage from './pages/HistoryPage';
import './styles/global.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/ordenes" replace />} />
        <Route path="pacientes" element={<PatientsPage />} />
        <Route path="dietas" element={<DietsPage />} />
        <Route path="ordenes" element={<OrdersPage />} />
        <Route path="cocina" element={<KitchenPage />} />
        <Route path="reportes" element={<ReportsPage />} />
        <Route path="historial" element={<HistoryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
