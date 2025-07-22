// components/layout/Column.jsx
import React from 'react';
import '../../styles/Column.css';

const Column = ({
  children,
  gap = '1rem',
  padding = '1rem',
  wrap = true,
  width = '100%',
  height = 'auto',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  style,
}) => {
  return (
    <div
      className="layout-column"
      style={{
        gap,
        padding,
        width,
        height,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        justifyContent,
        alignItems,
        ...style,
      }}
    >
      {React.Children.map(children, (child) => {
        const hasFixedWidth =
          child?.props?.style?.width ||
          child?.props?.width ||
          child?.props?.className?.includes('fixed');

        return (
        <div
          style={{
            width: hasFixedWidth ? 'auto' : '100%',
            boxSizing: 'border-box'
          }}
        >
          {child}
        </div>
      );
    })}
    </div>
  );
};

export default Column;
