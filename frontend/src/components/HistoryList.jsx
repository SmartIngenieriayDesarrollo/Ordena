import React from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';

export default function HistoryList({ history }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <ClockIcon width={20} color="#4ecdc4" />
        <h3 style={{ margin: 0 }}>Historial de dietas</h3>
      </div>
      <div className="timeline">
        {history.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div>
              <strong>{item.action}</strong>
              <p style={{ margin: '4px 0 0', color: '#6c757d' }}>Orden #{item.orderId}</p>
              <small>Usuario: {item.user}</small>
            </div>
            <small>{new Date(item.timestamp).toLocaleString('es-ES')}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
