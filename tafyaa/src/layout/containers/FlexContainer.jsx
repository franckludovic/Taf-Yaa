import React from 'react';
import '../../styles/FlexContainer.css';


function FlexContainer({
  children,
  direction = 'row', // or 'column'
  wrap = true,
  gap = '16px',
  padding = '16px',
  align = 'flex-start',
  justify = 'flex-start',
  className = ''
}) {
  return (
    <div
      className={`responsive-container ${direction} ${className}`}
      style={{
        gap,
        padding,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        alignItems: align,
        justifyContent: justify
      }}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
