import React, { useState } from 'react';
import { UserIcon, HeartIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, PlusIcon, ClockIcon, EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { mockPatients } from '../data/mockData';

export default function PatientsPage() {
  const [search, setSearch] = useState('');
  const [filterService, setFilterService] = useState('Todos');

  const services = Array.from(new Set(mockPatients.map((p) => p.service)));
  const filteredPatients = mockPatients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(search.toLowerCase()) || patient.bed.includes(search);
    const matchesService = filterService === 'Todos' || patient.service === filterService;
    return matchesSearch && matchesService;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Pacientes</h1>
          <p className="page-subtitle">Gestión de pacientes activos y sus datos clínicos</p>
        </div>
        <button className="button">
          <PlusIcon width={18} /> Nuevo Paciente
        </button>
      </div>

      {/* Stats Cards */}
      <div className="card-grid" style={{ marginBottom: 28 }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Total Pacientes</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{mockPatients.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserIcon width={22} color="var(--primary)" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Servicios Activos</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{services.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HeartIcon width={22} color="#ef4444" />
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
              placeholder="Buscar por nombre o cama..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: 42 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>Servicio:</span>
            {['Todos', ...services].map((service) => (
              <button
                key={service}
                className={`button ${filterService === service ? '' : 'ghost'}`}
                onClick={() => setFilterService(service)}
                style={{ fontSize: 13, padding: '8px 14px' }}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Patients Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="card" style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{patient.name}</h3>
                <p style={{ margin: '4px 0 0', color: 'var(--text-muted)', fontSize: 13 }}>
                  {patient.medicalRecord}
                </p>
              </div>
              <span className="badge">{patient.status}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cama</p>
                <p style={{ margin: '4px 0 0', fontWeight: 600, fontSize: 15 }}>{patient.bed}</p>
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Edad</p>
                <p style={{ margin: '4px 0 0', fontWeight: 600, fontSize: 15 }}>{patient.age} años</p>
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Servicio</p>
                <p style={{ margin: '4px 0 0', fontWeight: 600, fontSize: 14 }}>{patient.service}</p>
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--bg)', borderRadius: 8 }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ingreso</p>
                <p style={{ margin: '4px 0 0', fontWeight: 600, fontSize: 14 }}>
                  {new Date(patient.admissionDate).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                </p>
              </div>
            </div>

            {patient.allergies && (
              <div
                style={{
                  marginTop: 14,
                  padding: '10px 14px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: 8,
                  borderLeft: '3px solid #f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <ExclamationTriangleIcon width={18} color="#d97706" />
                <span style={{ fontSize: 13, color: '#b45309', fontWeight: 500 }}>
                  Alergia: {patient.allergies}
                </span>
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button className="button" style={{ flex: 1, fontSize: 13 }}>
                <ClockIcon width={16} /> Historial
              </button>
              <button className="button ghost" style={{ flex: 1, fontSize: 13 }}>
                <PencilSquareIcon width={16} /> Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: 48 }}>
          <UserIcon width={40} color="var(--text-muted)" style={{ margin: '0 auto 12px' }} />
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>No se encontraron pacientes</p>
        </div>
      )}
    </div>
  );
}
