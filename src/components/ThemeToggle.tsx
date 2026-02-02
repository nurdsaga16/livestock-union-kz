import { memo } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

function ThemeToggleInner() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined text-xl" aria-hidden>light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-xl" aria-hidden>dark_mode</span>
      )}
    </button>
  );
}

export const ThemeToggle = memo(ThemeToggleInner);
