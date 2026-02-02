import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'О нас' },
  { to: '/prices-markets', label: 'Отраслевые данные', hasDropdown: true },
  { to: '/resources', label: 'Ресурсы', hasDropdown: true },
  { to: '/news', label: 'Новости', hasDropdown: true },
  { to: '/contacts', label: 'Контакты' },
];

function NavigationInner() {
  return (
    <nav className="hidden xl:flex items-center space-x-6 font-medium text-sm" aria-label="Основное меню">
      {navItems.map(({ to, label, hasDropdown }) => (
        <div key={to} className="group relative py-2">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-1 hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
            }
          >
            <span>{label}</span>
            {hasDropdown && (
              <span className="material-symbols-outlined text-sm" aria-hidden>
                expand_more
              </span>
            )}
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export const Navigation = memo(NavigationInner);
