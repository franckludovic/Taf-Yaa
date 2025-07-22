// components/layout/Grid.jsx
import React from 'react';
import '../../styles/Grid.css';

const Grid = ({
  children,
  columns = 3,
  gap = '1rem',
  width = '100%',
  height = 'auto',
  padding = '0px',
  responsive = true,
  style,
}) => {
  return (
    <div
      className={`layout-grid ${responsive ? 'responsive-grid' : ''}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        width,
        height,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
