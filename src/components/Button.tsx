import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  href,
  target,
  rel,
  onClick,
  icon,
  children,
  className = '',
}) => {
  const baseClasses =
    'btn text-decoration-none d-inline-flex align-items-center fw-semibold';

  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    'icon-only': 'btn-primary',
  };

  const sizeClasses = {
    large: 'btn-lg',
    default: '',
    small: 'btn-sm',
  };

  const iconOnlyClasses =
    variant === 'icon-only'
      ? 'rounded-circle justify-content-center p-2'
      : 'rounded-pill';

  const combinedClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${variant !== 'icon-only' ? sizeClasses[size] : ''}
    ${iconOnlyClasses}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const content = (
    <>
      {icon && (
        <i
          className={`bi ${icon} ${variant !== 'icon-only' ? 'me-2' : ''}`}
        ></i>
      )}
      {variant !== 'icon-only' && <span>{children}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
