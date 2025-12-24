import React, { useState } from 'react';
import SummaryCards from '../components/SummaryCards';
import OrdersTable from '../components/OrdersTable';
import HistoryList from '../components/HistoryList';
import ObservationPanel from '../components/ObservationPanel';
import { mockOrders, mockHistory, mockPatients, mockDiets } from '../data/mockData';

export default function OrdersPage() {
  const [orders] = useState(mockOrders);
  const [history] = useState(mockHistory);

  const stats = {
    activePatients: mockPatients.length,
    openOrders: mockOrders.filter((o) => o.status !== 'Servido').length,
    todayMeals: mockDiets.length,
    pendingServices: new Set(mockOrders.map((o) => o.service)).size,
  };

  const handleDeliverOrder = (orderId) => {
    console.log('Marcar orden como entregada:', orderId);
    alert(`Orden #${orderId} marcada como entregada (funcionalidad demo)`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Órdenes Activas</h1>
          <p className="page-subtitle">Gestión de órdenes y entregas de dietas</p>
        </div>
      </div>

      <SummaryCards stats={stats} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
        <div style={{ gridColumn: 'span 2' }}>
          <OrdersTable orders={orders} onDeliverOrder={handleDeliverOrder} />
        </div>

        <HistoryList history={history} />
        <ObservationPanel />
      </div>
    </div>
  );
}
