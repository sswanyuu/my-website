import React from 'react';
import { SocialIconProps } from '../types';
import { Button } from './index';

const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  url,
  icon,
  variant = 'default',
  className = '',
}) => {
  const getButtonSize = () => {
    switch (variant) {
      case 'large':
        return 'large';
      case 'small':
        return 'small';
      default:
        return 'default';
    }
  };

  return (
    <Button
      variant="icon-only"
      size={getButtonSize()}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      icon={icon}
      className={className}
    />
  );
};

export default SocialIcon;
