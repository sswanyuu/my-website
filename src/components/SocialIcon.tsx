import React from 'react';
import { SocialIconProps } from '../types';

const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  url,
  icon,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = 'text-decoration-none d-inline-flex align-items-center justify-content-center rounded-circle';
  
  const variantClasses = {
    default: 'bg-light text-dark',
    large: 'bg-white text-dark',
    small: 'bg-light text-dark'
  };
  
  const sizeClasses = {
    default: 'p-2',
    large: 'p-3',
    small: 'p-1'
  };
  
  const iconSizes = {
    default: 'fs-5',
    large: 'fs-3',
    small: 'fs-6'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[variant]} ${className}`.trim();

  return (
    <a 
      href={url} 
      className={combinedClasses}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`Visit ${platform} profile`}
      style={{ width: variant === 'large' ? '60px' : variant === 'small' ? '30px' : '40px', 
               height: variant === 'large' ? '60px' : variant === 'small' ? '30px' : '40px' }}
    >
      <i className={`bi ${icon} ${iconSizes[variant]}`}></i>
    </a>
  );
};

export default SocialIcon; 