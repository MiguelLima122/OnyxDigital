import React from "react";

/**
 * Componente SectionSeparator: Uma linha divisória estilizada para separar seções.
 */
export const SectionSeparator = () => (
  <div className="container">
    <div style={{
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15), transparent)',
    }} />
  </div>
);