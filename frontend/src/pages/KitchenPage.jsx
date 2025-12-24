import React from 'react';
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon, PlayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { mockKitchenProduction } from '../data/mockData';

export default function KitchenPage() {
  const getStatusColor = (completed, total) => {
    const percentage = (completed / total) * 100;
    if (percentage === 100) return '#10b981';
    if (percentage > 50) return '#0d9488';
    if (percentage > 0) return '#f59e0b';
    return 'var(--text-muted)';
  };

  const totalMeals = mockKitchenProduction.reduce((acc, s) => acc + s.totalMeals, 0);
  const totalCompleted = mockKitchenProduction.reduce((acc, s) => acc + s.completed, 0);
  const totalInProgress = mockKitchenProduction.reduce((acc, s) => acc + s.inProgress, 0);
  const totalPending = mockKitchenProduction.reduce((acc, s) => acc + s.pending, 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Producción de Cocina</h1>
          <p className="page-subtitle">Estado de preparación de comidas por servicio</p>
        </div>
        <button className="button ghost">Actualizar</button>
      </div>

      {/* Summary Cards */}
      <div className="card-grid" style={{ marginBottom: 28 }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Total comidas hoy</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{totalMeals}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DocumentTextIcon width={22} color="var(--primary)" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Completadas</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700, color: '#10b981' }}>{totalCompleted}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircleIcon width={22} color="#10b981" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>En proceso</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700, color: '#0ea5e9' }}>{totalInProgress}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClockIcon width={22} color="#0ea5e9" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Pendientes</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700, color: '#f59e0b' }}>{totalPending}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ExclamationCircleIcon width={22} color="#f59e0b" />
            </div>
          </div>
        </div>
      </div>

      {/* Production by Service */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {mockKitchenProduction.map((service) => {
          const completionPercentage = Math.round((service.completed / service.totalMeals) * 100);
          const statusColor = getStatusColor(service.completed, service.totalMeals);

          return (
            <div key={service.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 20 }}>{service.service}</h3>
                  <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: 13 }}>
                    Hora de servicio: {service.time}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: statusColor }}>
                    {completionPercentage}%
                  </p>
                  <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--text-muted)' }}>
                    {service.completed} de {service.totalMeals}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ width: '100%', height: 8, background: 'var(--border-light)', borderRadius: 4, overflow: 'hidden', marginBottom: 20 }}>
                <div
                  style={{
                    width: `${completionPercentage}%`,
                    height: '100%',
                    background: statusColor,
                    borderRadius: 4,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>

              {/* Status Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
                <div style={{ padding: 14, background: 'rgba(16, 185, 129, 0.08)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 12, color: '#047857', fontWeight: 500 }}>Completadas</p>
                  <p style={{ margin: '6px 0 0', fontSize: 22, fontWeight: 700, color: '#059669' }}>{service.completed}</p>
                </div>
                <div style={{ padding: 14, background: 'rgba(14, 165, 233, 0.08)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 12, color: '#0369a1', fontWeight: 500 }}>En preparación</p>
                  <p style={{ margin: '6px 0 0', fontSize: 22, fontWeight: 700, color: '#0284c7' }}>{service.inProgress}</p>
                </div>
                <div style={{ padding: 14, background: 'rgba(245, 158, 11, 0.08)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 12, color: '#b45309', fontWeight: 500 }}>Pendientes</p>
                  <p style={{ margin: '6px 0 0', fontSize: 22, fontWeight: 700, color: '#d97706' }}>{service.pending}</p>
                </div>
              </div>

              {/* Diet Breakdown */}
              <div>
                <p style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>Desglose por dieta</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
                  {service.diets.map((diet, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 14px',
                        background: 'var(--bg)',
                        borderRadius: 8,
                        borderLeft: '3px solid var(--primary)',
                      }}
                    >
                      <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)' }}>{diet.name}</p>
                      <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 600 }}>{diet.quantity} platos</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                {service.pending > 0 && (
                  <button className="button" style={{ flex: 1 }}>
                    <PlayIcon width={16} /> Iniciar preparación
                  </button>
                )}
                {service.inProgress > 0 && (
                  <button className="button" style={{ flex: 1 }}>
                    <CheckCircleIcon width={16} /> Marcar completado
                  </button>
                )}
                <button className="button ghost" style={{ flex: 1 }}>
                  <DocumentTextIcon width={16} /> Ver detalles
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
