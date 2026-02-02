import { memo } from 'react';
import { Link } from 'react-router-dom';

function TopBarInner() {
  return (
    <div
      className="bg-primary text-white text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center"
      role="banner"
    >
      <div className="flex space-x-4 sm:space-x-6">
        <Link to="/standards" className="hover:underline">
          Стандарты и качество
        </Link>
        <Link to="/reports" className="hover:underline">
          Рыночные отчеты
        </Link>
        <Link to="/about" className="hover:underline">
          О Союзе
        </Link>
      </div>
      <div className="flex space-x-4 sm:space-x-6">
        <Link to="/join" className="hover:underline">
          Стать участником
        </Link>
        <Link to="/register" className="hover:underline">
          Регистрация в myLUK
        </Link>
      </div>
    </div>
  );
}

export const TopBar = memo(TopBarInner);
