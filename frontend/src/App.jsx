import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import SummaryCards from './components/SummaryCards';
import OrdersTable from './components/OrdersTable';
import HistoryList from './components/HistoryList';
import ObservationPanel from './components/ObservationPanel';
import { deliverOrder, fetchHistory, fetchOrders, fetchPdf, fetchSummary } from './services/api';

export default function App() {
  const [summary, setSummary] = useState({});
  const [orders, setOrders] = useState([]);
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState('Todos');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfInfo, setPdfInfo] = useState(null);

  // Carga inicial de datos mock desde el backend PHP.
  useEffect(() => {
    async function loadData() {
      try {
        const [summaryData, ordersData, historyData] = await Promise.all([
          fetchSummary(),
          fetchOrders(),
          fetchHistory(),
        ]);
        setSummary(summaryData);
        setOrders(ordersData.orders);
        setHistory(historyData.history);
      } catch (error) {
        console.error('Error cargando datos', error);
      }
    }

    loadData();
  }, []);

  // Marca la orden como entregada y refresca historial.
  const handleDeliver = async (id) => {
    setLoading(true);
    try {
      await deliverOrder(id);
      const updated = orders.map((order) => (order.id === id ? { ...order, status: 'Servido' } : order));
      setOrders(updated);
      const historyData = await fetchHistory();
      setHistory(historyData.history);
    } catch (error) {
      alert('No se pudo marcar como entregado: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Simula la generación de un PDF de consolidado.
  const handleGeneratePdf = async () => {
    const data = await fetchPdf();
    setPdfInfo(data);
  };

  const stats = useMemo(
    () => ({
      activePatients: summary.activePatients ?? orders.length,
      openOrders: summary.openOrders ?? orders.filter((o) => o.status !== 'Servido').length,
      todayMeals: summary.todayMeals ?? orders.length,
      pendingServices: summary.pendingServices ?? new Set(orders.map((o) => o.service)).size,
    }),
    [summary, orders]
  );

  return (
    <div className="app-shell">
      <Sidebar />
      <main>
        <HeaderBar title="Nutrición" professional="María Gutiérrez" />
        <SummaryCards stats={stats} />

        <div className="card" style={{ border: '1px solid var(--border)' }}>
          <OrdersTable orders={orders} onDeliver={handleDeliver} filter={filter} setFilter={setFilter} />
        </div>

        <div className="layout-split">
          <HistoryList history={history} />
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ObservationPanel notes={notes} onChange={setNotes} />
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="button" onClick={handleGeneratePdf}>Generar listado en PDF</button>
              {pdfInfo && (
                <span className="badge">PDF listo ({new Date(pdfInfo.generatedAt).toLocaleTimeString('es-ES')})</span>
              )}
            </div>
            {loading && <small style={{ color: '#6c757d' }}>Sincronizando cambios...</small>}
          </div>
        </div>
      </main>
    </div>
  );
}
