import React from 'react';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}


interface LinkButtonProps extends BaseButtonProps {
  variant: 'link';
  href: string;
}


interface RegularButtonProps extends BaseButtonProps {
  variant?: Exclude<ButtonVariant, 'link'>;
  href?: never;
}

type ButtonProps = LinkButtonProps | RegularButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  iconLeft,
  iconRight,
  fullWidth = false,
  href,
}) => {
  const buttonClasses = classNames(
    'inline-flex items-center justify-center font-medium rounded-md transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500': variant === 'primary',
      'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100': variant === 'secondary',
      'bg-transparent text-gray-700 hover:bg-gray-100': variant === 'ghost',
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': variant === 'danger',
      'text-green-700 underline hover:text-green-900': variant === 'link',
    },
    {
      'px-3 py-1 text-sm': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-5 py-3 text-lg': size === 'lg',
    },
    { 'w-full': fullWidth }
  );

  const handleClick = () => {
    if (disabled) return;

    if (variant === 'danger') {
      const confirmed = window.confirm('Are you sure? This action cannot be undone.');
      if (!confirmed) return;
    }

    onClick?.();
  };

  if (variant === 'link' && href) {
    return (
      <a href={href} className={buttonClasses}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={buttonClasses}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
