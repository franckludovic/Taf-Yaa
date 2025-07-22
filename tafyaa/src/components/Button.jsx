import React from 'react';
import '../styles/Button.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  borderRadius = '8px',
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
}) => {
  const classList = ['btn'];

  if (variant) classList.push(`btn-${variant}`);
  if (size) classList.push(`btn-${size}`);
  if (fullWidth) classList.push('btn-full');
  if (loading) classList.push('btn-loading');
  if (borderRadius) classList.push(`btn-radius-${borderRadius}`);
  if (disabled && !loading) classList.push('btn-disabled'); 

  return (
    <button
      type={type}
      className={classList.join(' ')}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className="spinner" /> Loading...
        </>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
