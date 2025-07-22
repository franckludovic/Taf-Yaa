// components/layout/Row.jsx
import React from 'react';
import '../../styles/containers.css';

const Row = ({ children, gap = '1rem', padding = '1rem', wrap = true, style }) => {
  return (
    <div
      className="layout-row"
      style={{
        gap,
        padding,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
