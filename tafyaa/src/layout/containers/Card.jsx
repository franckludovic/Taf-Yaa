import React from 'react';
import '../../styles/containers.css';

function Card({
  children,
  padding = '10px',
  shadow = true,
  className = '',
  borderRadius = '8px',
  width = '100%',
  height = 'auto',
  backgroundColor = 'white',
  alignItems = 'center',      
  justifyContent = 'center',  
  borderColor = backgroundColor
}) {
  return (
    <div
      className={`card-container ${shadow ? 'shadow' : ''} ${className}`}
      style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems,
        justifyContent,
        padding,
        borderRadius,
        width,
        height,
        backgroundColor,
        borderColor
      }}
    >
      {children}
    </div>
  );
}

export default Card;
