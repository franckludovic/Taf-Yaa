// components/layout/Column.jsx
import React from 'react';
import '../../styles/containers.css';

const Column = ({ children, gap = '1rem', padding = '1rem', style }) => {
  return (
    <div
      className="layout-column"
      style={{
        gap,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
