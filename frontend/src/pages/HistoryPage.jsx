import React, { useState } from 'react';
import { ClockIcon, UserIcon, DocumentTextIcon, MagnifyingGlassIcon, ArrowDownTrayIcon, PlusCircleIcon, CheckCircleIcon, PencilIcon, UserGroupIcon, XCircleIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { mockHistory } from '../data/mockData';

export default function HistoryPage() {
  const [search, setSearch] = useState('');
  const [filterAction, setFilterAction] = useState('Todos');

  const actions = Array.from(new Set(mockHistory.map((h) => h.action)));
  const filteredHistory = mockHistory.filter((entry) => {
    const matchesSearch =
      entry.patientName.toLowerCase().includes(search.toLowerCase()) ||
      entry.user.toLowerCase().includes(search.toLowerCase()) ||
      entry.details.toLowerCase().includes(search.toLowerCase());
    const matchesAction = filterAction === 'Todos' || entry.action === filterAction;
    return matchesSearch && matchesAction;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getActionIcon = (action) => {
    if (action.includes('creada')) return <PlusCircleIcon width={18} />;
    if (action.includes('Entrega')) return <CheckCircleIcon width={18} />;
    if (action.includes('Ajuste') || action.includes('modificación')) return <PencilIcon width={18} />;
    if (action.includes('preparación')) return <UserGroupIcon width={18} />;
    if (action.includes('Cancelada')) return <XCircleIcon width={18} />;
    return <ClipboardDocumentListIcon width={18} />;
  };

  const getActionColor = (action) => {
    if (action.includes('creada')) return '#3b82f6';
    if (action.includes('Entrega') || action.includes('confirmada')) return '#10b981';
    if (action.includes('Ajuste') || action.includes('modificación')) return '#f59e0b';
    if (action.includes('preparación')) return '#8b5cf6';
    if (action.includes('Cancelada')) return '#ef4444';
    return 'var(--text-muted)';
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Historial Completo</h1>
          <p className="page-subtitle">Registro de todas las acciones y cambios del sistema</p>
        </div>
        <button className="button ghost">
          <ArrowDownTrayIcon width={18} /> Exportar
        </button>
      </div>

      {/* Stats */}
      <div className="card-grid" style={{ marginBottom: 28 }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Total Registros</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{mockHistory.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DocumentTextIcon width={22} color="var(--primary)" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Tipos de Acciones</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{actions.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClockIcon width={22} color="#8b5cf6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 250, position: 'relative' }}>
            <MagnifyingGlassIcon width={18} color="var(--text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Buscar por paciente, usuario o detalles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: 42 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>Acción:</span>
            {['Todos', ...actions].map((action) => (
              <button
                key={action}
                className={`button ${filterAction === action ? '' : 'ghost'}`}
                onClick={() => setFilterAction(action)}
                style={{ fontSize: 12, padding: '6px 12px' }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--primary) 0%, var(--border-light) 100%)',
            }}
          />

          {/* History entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filteredHistory.map((entry) => (
              <div
                key={entry.id}
                style={{
                  position: 'relative',
                  paddingLeft: 52,
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 11,
                    top: 4,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: getActionColor(entry.action),
                    border: '3px solid white',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                />

                {/* Content card */}
                <div
                  style={{
                    padding: '16px 18px',
                    background: 'var(--bg)',
                    borderRadius: 10,
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: getActionColor(entry.action) }}>{getActionIcon(entry.action)}</span>
                      <div>
                        <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: getActionColor(entry.action) }}>
                          {entry.action}
                        </h4>
                        <p style={{ margin: '2px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>
                          {entry.patientName} — {entry.service}
                        </p>
                      </div>
                    </div>
                    <span className="badge" style={{ fontSize: 11, padding: '4px 10px' }}>{formatDate(entry.timestamp)}</span>
                  </div>

                  <p style={{ margin: '10px 0 0', color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: 14 }}>{entry.details}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12 }}>
                    <UserIcon width={14} color="var(--text-muted)" />
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{entry.user}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredHistory.length === 0 && (
          <div style={{ textAlign: 'center', padding: 48 }}>
            <DocumentTextIcon width={40} color="var(--text-muted)" style={{ margin: '0 auto 12px' }} />
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>No se encontraron registros</p>
          </div>
        )}
      </div>

      {/* Load more */}
      {filteredHistory.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button className="button ghost">Cargar más registros</button>
        </div>
      )}
    </div>
  );
}
