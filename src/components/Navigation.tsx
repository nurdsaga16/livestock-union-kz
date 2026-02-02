import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/prices-markets', label: 'Цены и рынки' },
  { to: '/prices-analytics', label: 'Детальная аналитика' },
];

function NavigationInner() {
  return (
    <nav className="hidden xl:flex items-center space-x-6 font-medium text-sm" aria-label="Основное меню">
      {navItems.map(({ to, label }) => (
        <div key={to} className="group relative py-2">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-1 hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            <span>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export const Navigation = memo(NavigationInner);
