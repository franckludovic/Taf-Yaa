import React, { useState } from 'react';
import '../../styles/Card.css';

function Card({
  children,
  padding = '10px',
  margin = 'auto',
  shadow = false,
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
  const [isHovered, setIsHovered] = useState(false);
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

  const scale =
    onClick && isPressed ? 'scale(0.9)' :
    onClick && isHovered ? 'scale(1.05)' :
    'scale(1)';

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
    transform: scale,
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <div
      className={`card-container ${shadow ? 'shadow' : ''} ${positionClass} ${className} ${onClick ? 'card-clickable' : ''}`}
      style={style}
      onClick={onClick}
      onMouseEnter={onClick ? () => setIsHovered(true) : undefined}
      onMouseLeave={onClick ? () => { setIsHovered(false); setIsPressed(false); } : undefined}
      onMouseDown={onClick ? () => setIsPressed(true) : undefined}
      onMouseUp={onClick ? () => setIsPressed(false) : undefined}
    >
      {children}
    </div>
  );
}

export default Card;
