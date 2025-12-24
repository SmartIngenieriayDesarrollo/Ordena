import React from 'react';

export default function ObservationPanel({ notes, onChange }) {
  return (
    <div className="observations">
      <h3 style={{ marginTop: 0 }}>Observaciones</h3>
      <p style={{ marginTop: 4, color: '#6c757d' }}>Registra indicaciones o hallazgos rápidos para el equipo.</p>
      <textarea
        rows={4}
        value={notes}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ej. Revisar alergias antes de entregar la bandeja"
      />
    </div>
  );
}
