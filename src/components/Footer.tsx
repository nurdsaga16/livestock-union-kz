import { memo } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_FOOTER_URL } from '@/assets/constants';

function FooterInner() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <img
              src={LOGO_FOOTER_URL}
              alt="Livestock Union Kazakhstan Official Logo"
              className="h-20 mb-6 object-contain"
              width={200}
              height={80}
              loading="lazy"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Союз животноводства Казахстана является ведущим отраслевым объединением животноводов и
              производителей скота Республики.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-emerald-400">
              Быстрые ссылки
            </h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/prices-markets" className="hover:text-white transition-colors">
                  Цены и Рынки
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  Исследования и Развитие
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Инструменты и Ресурсы
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-white transition-colors">
                  Соответствие стандартам
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Новости и События
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-emerald-400">
              О Союзе
            </h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Чем мы занимаемся
                </Link>
              </li>
              <li>
                <Link to="/audience" className="hover:text-white transition-colors">
                  Для кого мы работаем
                </Link>
              </li>
              <li>
                <Link to="/funding" className="hover:text-white transition-colors">
                  Финансирование
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Карьера
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-emerald-400">
              Контакты
            </h5>
            <div className="space-y-4 text-sm text-gray-400 mb-8">
              <p className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2" aria-hidden>
                  phone
                </span>
                +7 (7172) 55-66-77
              </p>
              <p className="flex items-center">
                <span className="material-symbols-outlined text-sm mr-2" aria-hidden>
                  email
                </span>
                info@livestockunion.kz
              </p>
            </div>
            <h5 className="font-bold text-sm mb-4 uppercase tracking-widest text-gray-500">
              Мы в соцсетях
            </h5>
            <div className="flex space-x-4" role="group" aria-label="Социальные сети">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Социальные сети"
              >
                <span className="material-symbols-outlined text-sm">social_leaderboard</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <span className="material-symbols-outlined text-sm">tag</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <span className="material-symbols-outlined text-sm">play_circle</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="RSS"
              >
                <span className="material-symbols-outlined text-sm">rss_feed</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 space-y-4 md:space-y-0 uppercase tracking-widest">
          <div className="flex items-center space-x-4">
            <p className="normal-case tracking-normal">Союз животноводства чтит традиции предков-скотоводов Казахстана.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <span>© 2024 Союз животноводства Казахстана</span>
            <Link to="/terms" className="hover:text-white">
              Условия
            </Link>
            <Link to="/privacy" className="hover:text-white">
              Конфиденциальность
            </Link>
            <Link to="/sitemap" className="hover:text-white">
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterInner);
