import React from 'react';

function Divider({ color = '#e5e7eb', thickness = '2px', vertical = false, borderRadius = '2px', style }) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: borderRadius,
        width: vertical ? thickness : '100%',
        height: vertical ? '100%' : thickness,
        margin: vertical ? '0 8px' : '8px 0',
        ...style,
      }}
    />
  );
}

export default Divider;