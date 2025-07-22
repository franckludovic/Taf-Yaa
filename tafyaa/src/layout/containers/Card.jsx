import React, { useState } from 'react';
import '../../styles/Card.css';

function Card({
  children,
  padding = '10px',
  margin = 'auto',
  shadow = true,
  rounded = false,
  className = '',
  borderRadius = '8px',
  width = '100%',
  height = 'auto',
  backgroundColor = 'darkGrey',
  alignItems = 'center',
  justifyContent = 'center',
  borderColor = backgroundColor,
  positionType = 'static',
  position = '',
  top,
  right,
  bottom,
  left,
  onClick,
}) {
  const [isPressed, setIsPressed] = useState(false);
  const positionClass = position ? `pos-${position}` : '';

  const circleStyles = rounded
    ? {
        width: width === '100%' ? '50px' : width,
        height: height === 'auto' ? '50px' : height,
        borderRadius: '50%',
        padding: 0,
      }
    : {};

  // Combine classes and styles
  const style = {
    position: positionType,
    top,
    right,
    bottom,
    left,
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent,
    padding,
    margin,
    borderRadius,
    width,
    height,
    backgroundColor,
    borderColor,
    ...circleStyles,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: onClick && isPressed ? 'scale(0.95)' : 'scale(1)',
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <div
      className={`card-container ${shadow ? 'shadow' : ''} ${positionClass} ${className}`}
      onClick={onClick}
      onMouseDown={onClick ? () => setIsPressed(true) : undefined}
      onMouseUp={onClick ? () => setIsPressed(false) : undefined}
      onMouseLeave={onClick ? () => setIsPressed(false) : undefined}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
