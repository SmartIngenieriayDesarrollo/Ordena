import React, { useState } from 'react';
import { ClipboardDocumentCheckIcon, FireIcon, BeakerIcon, MagnifyingGlassIcon, PlusIcon, EyeIcon, PencilSquareIcon, UserPlusIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { mockDiets } from '../data/mockData';

export default function DietsPage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('Todos');

  const types = Array.from(new Set(mockDiets.map((d) => d.type)));
  const filteredDiets = mockDiets.filter((diet) => {
    const matchesSearch = diet.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'Todos' || diet.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Catálogo de Dietas</h1>
          <p className="page-subtitle">Tipos de dieta disponibles y sus especificaciones nutricionales</p>
        </div>
        <button className="button">
          <PlusIcon width={18} /> Nueva Dieta
        </button>
      </div>

      {/* Stats */}
      <div className="card-grid" style={{ marginBottom: 28 }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Total Dietas</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{mockDiets.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClipboardDocumentCheckIcon width={22} color="var(--primary)" />
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>Categorías</p>
              <h2 style={{ marginTop: 8, fontSize: 32, fontWeight: 700 }}>{types.length}</h2>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BeakerIcon width={22} color="#8b5cf6" />
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
              placeholder="Buscar dieta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: 42 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)' }}>Tipo:</span>
            {['Todos', ...types].map((type) => (
              <button
                key={type}
                className={`button ${filterType === type ? '' : 'ghost'}`}
                onClick={() => setFilterType(type)}
                style={{ fontSize: 13, padding: '8px 14px' }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Diets List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filteredDiets.map((diet) => (
          <div key={diet.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{diet.name}</h3>
                  <span className="badge">{diet.type}</span>
                </div>
                <p style={{ margin: '0 0 12px', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: 14 }}>{diet.description}</p>
                {diet.restrictions && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(245, 158, 11, 0.08)', borderRadius: 8, borderLeft: '3px solid #f59e0b' }}>
                    <ExclamationTriangleIcon width={16} color="#d97706" />
                    <span style={{ fontSize: 13, color: '#b45309', fontWeight: 500 }}>Restricciones: {diet.restrictions}</span>
                  </div>
                )}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 10,
                  minWidth: 320,
                }}
              >
                <div style={{ textAlign: 'center', padding: '14px 10px', background: 'rgba(13, 148, 136, 0.06)', borderRadius: 10 }}>
                  <FireIcon width={20} color="var(--primary)" style={{ margin: '0 auto 6px' }} />
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Calorías</p>
                  <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: 16, color: 'var(--primary)' }}>{diet.calories}</p>
                </div>
                <div style={{ textAlign: 'center', padding: '14px 10px', background: 'rgba(59, 130, 246, 0.06)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Proteínas</p>
                  <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: 16, color: '#3b82f6' }}>{diet.protein}</p>
                </div>
                <div style={{ textAlign: 'center', padding: '14px 10px', background: 'rgba(245, 158, 11, 0.06)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Carbos</p>
                  <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: 16, color: '#f59e0b' }}>{diet.carbs}</p>
                </div>
                <div style={{ textAlign: 'center', padding: '14px 10px', background: 'rgba(239, 68, 68, 0.06)', borderRadius: 10 }}>
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Grasas</p>
                  <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: 16, color: '#ef4444' }}>{diet.fats}</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <button className="button" style={{ fontSize: 13 }}>
                <EyeIcon width={16} /> Ver detalles
              </button>
              <button className="button ghost" style={{ fontSize: 13 }}>
                <PencilSquareIcon width={16} /> Editar
              </button>
              <button className="button ghost" style={{ fontSize: 13 }}>
                <UserPlusIcon width={16} /> Asignar
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDiets.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: 48 }}>
          <ClipboardDocumentCheckIcon width={40} color="var(--text-muted)" style={{ margin: '0 auto 12px' }} />
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>No se encontraron dietas</p>
        </div>
      )}
    </div>
  );
}
