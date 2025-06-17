import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './index';

const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return 'bi-sun-fill';
      case 'dark':
        return 'bi-moon-fill';
      case 'auto':
        return resolvedTheme === 'dark' ? 'bi-circle-half' : 'bi-circle-half';
      default:
        return 'bi-sun-fill';
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to auto mode';
      case 'auto':
        return `Auto mode (${resolvedTheme}) - Switch to light mode`;
      default:
        return 'Toggle theme';
    }
  };

  return (
    <div title={getTitle()} aria-label={getTitle()}>
      <Button
        variant="icon-only"
        onClick={toggleTheme}
        icon={getIcon()}
        className="theme-toggle btn-outline-secondary"
      />
    </div>
  );
};

export default ThemeToggle;
