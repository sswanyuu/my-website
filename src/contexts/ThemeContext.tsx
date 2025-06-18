import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

type Theme = 'light' | 'dark' | 'auto';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('auto');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  // Detect system preference
  const getSystemPreference = useCallback((): ResolvedTheme => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  }, []);

  // Resolve theme based on current setting
  const resolveTheme = useCallback(
    (currentTheme: Theme): ResolvedTheme => {
      if (currentTheme === 'auto') {
        return getSystemPreference();
      }
      return currentTheme;
    },
    [getSystemPreference]
  );

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Update resolved theme when theme changes or system preference changes
  useEffect(() => {
    const resolved = resolveTheme(theme);
    setResolvedTheme(resolved);

    // Apply theme to document
    document.documentElement.setAttribute('data-bs-theme', resolved);
    document.body.className = resolved === 'dark' ? 'dark-mode' : 'light-mode';

    // Listen for system preference changes when in auto mode
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newResolved = resolveTheme('auto');
        setResolvedTheme(newResolved);
        document.documentElement.setAttribute('data-bs-theme', newResolved);
        document.body.className =
          newResolved === 'dark' ? 'dark-mode' : 'light-mode';
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, resolveTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      handleSetTheme('dark');
    } else if (theme === 'dark') {
      handleSetTheme('auto');
    } else {
      handleSetTheme('light');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
