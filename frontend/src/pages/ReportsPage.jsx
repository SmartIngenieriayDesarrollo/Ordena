import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartBarIcon, ChartPieIcon, CalendarIcon, ArrowTrendingUpIcon, ClockIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { mockReportsData } from '../data/mockData';

export default function ReportsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Reportes y Estadísticas</h1>
          <p className="page-subtitle">Análisis de datos y métricas del servicio de nutrición</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="button ghost">
            <CalendarIcon width={16} />
            Esta semana
          </button>
          <button className="button">
            <DocumentArrowDownIcon width={16} />
            Exportar
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="card-grid" style={{ marginBottom: 28 }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)', border: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>Entregas esta semana</p>
              <h2 style={{ margin: '10px 0 0', fontSize: 36, fontWeight: 700, color: '#fff' }}>293</h2>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ArrowTrendingUpIcon width={14} /> +12% vs semana anterior
              </p>
            </div>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChartBarIcon width={24} color="#fff" />
            </div>
          </div>
        </div>

        <div className="card" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)', border: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>Tasa de cumplimiento</p>
              <h2 style={{ margin: '10px 0 0', fontSize: 36, fontWeight: 700, color: '#fff' }}>96.2%</h2>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ArrowTrendingUpIcon width={14} /> +2.5% vs semana anterior
              </p>
            </div>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChartPieIcon width={24} color="#fff" />
            </div>
          </div>
        </div>

        <div className="card" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', border: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>Tiempo promedio</p>
              <h2 style={{ margin: '10px 0 0', fontSize: 36, fontWeight: 700, color: '#fff' }}>18 min</h2>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ArrowTrendingUpIcon width={14} /> -3 min vs semana anterior
              </p>
            </div>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClockIcon width={24} color="#fff" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
        {/* Weekly Orders Chart */}
        <div className="card">
          <h3 style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <ChartBarIcon width={20} color="var(--primary)" />
            Órdenes por día
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={mockReportsData.weeklyOrders}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  boxShadow: 'var(--shadow-md)',
                  fontSize: 13,
                }}
              />
              <Bar dataKey="total" fill="var(--primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Diet Distribution */}
        <div className="card">
          <h3 style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <ChartPieIcon width={20} color="var(--primary)" />
            Distribución por tipo de dieta
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={mockReportsData.dietDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {mockReportsData.dietDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  boxShadow: 'var(--shadow-md)',
                  fontSize: 13,
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Service Performance */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 24 }}>Rendimiento por servicio</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {mockReportsData.serviceStats.map((service) => {
            const total = service.delivered + service.pending;
            const percentage = (service.delivered / total) * 100;

            return (
              <div key={service.service}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontWeight: 500, fontSize: 14 }}>{service.service}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                    {service.delivered} de {total} entregas ({percentage.toFixed(0)}%)
                  </span>
                </div>
                <div style={{ width: '100%', height: 8, background: 'var(--border-light)', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: '100%',
                      background: percentage > 90 ? '#10b981' : percentage > 75 ? '#0d9488' : '#f59e0b',
                      borderRadius: 4,
                      transition: 'width 0.5s ease',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monthly Metrics Table */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 20 }}>Métricas del mes</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Actual</th>
                <th>Anterior</th>
                <th>Variación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 500 }}>Total de entregas</td>
                <td>1,247</td>
                <td style={{ color: 'var(--text-muted)' }}>1,156</td>
                <td><span className="status-pill success">+7.9%</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500 }}>Pacientes atendidos</td>
                <td>89</td>
                <td style={{ color: 'var(--text-muted)' }}>82</td>
                <td><span className="status-pill success">+8.5%</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500 }}>Entregas a tiempo</td>
                <td>96.2%</td>
                <td style={{ color: 'var(--text-muted)' }}>94.1%</td>
                <td><span className="status-pill success">+2.1%</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500 }}>Tiempo promedio</td>
                <td>18 min</td>
                <td style={{ color: 'var(--text-muted)' }}>21 min</td>
                <td><span className="status-pill success">-14.3%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
