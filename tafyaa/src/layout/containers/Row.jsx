// components/layout/Row.jsx
import React from 'react';
import '../../styles/Row.css';

const Row = ({ children, gap = '1rem', padding = '1rem', wrap = true, width = '100%', justifyContent = 'center', style }) => {
  return (
    <div
      className="layout-row"
      style={{
        gap,
        width,
        padding,
        justifyContent,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
    >
      {React.Children.map(children, child => {
        const hasFixedWidth =
          child?.props?.style?.width ||
          child?.props?.width ||
          child?.props?.className?.includes('fixed');

        return (
          <div style={{ flex: hasFixedWidth ? 'initial' : 1 }}>
            {child}
          </div>
        );
      })}
    </div>
  );
};


export default Row;
