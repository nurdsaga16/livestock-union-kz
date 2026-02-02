import { memo } from 'react';
import { Link } from 'react-router-dom';

type NewsCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  date: string;
  linkHref: string;
  secondaryTitle?: string;
  secondaryDate?: string;
  variant?: 'default' | 'highlight';
};

function NewsCardInner({
  imageUrl,
  imageAlt,
  title,
  date,
  linkHref,
  secondaryTitle,
  secondaryDate,
  variant = 'default',
}: NewsCardProps) {
  const isHighlight = variant === 'highlight';

  return (
    <article
      className={`space-y-4 ${isHighlight ? 'bg-accent-light dark:bg-accent-dark/30 rounded flex flex-col h-full overflow-hidden' : ''}`}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`w-full h-56 object-cover ${!isHighlight ? 'rounded shadow-sm' : ''}`}
        loading="lazy"
      />
      {isHighlight ? (
        <div className="p-8 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-primary dark:text-emerald-400 mb-4 leading-tight">
              Центр устойчивости к засухе
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Важные ресурсы для фермеров по управлению здоровьем пастбищ и питанием скота в
              засушливые сезоны.
            </p>
          </div>
          <Link
            to={linkHref}
            className="mt-8 text-primary dark:text-emerald-400 font-bold flex items-center hover:underline"
          >
            Перейти в центр{' '}
            <span className="material-symbols-outlined ml-2" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold leading-tight hover:text-primary cursor-pointer transition-colors">
            <Link to={linkHref}>{title}</Link>
          </h3>
          <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Link to={linkHref} className="text-primary flex items-center hover:underline">
              Подробнее{' '}
              <span className="material-symbols-outlined text-sm ml-1" aria-hidden>
                arrow_forward
              </span>
            </Link>
            <span>{date}</span>
          </div>
          <hr className="border-gray-100 dark:border-gray-800" />
          {secondaryTitle && secondaryDate && (
            <div className="space-y-4 pt-2">
              <div className="group cursor-pointer">
                <h4 className="font-bold text-base group-hover:text-primary transition-colors">
                  {secondaryTitle}
                </h4>
                <p className="text-xs text-gray-500 mt-1 uppercase">{secondaryDate}</p>
              </div>
            </div>
          )}
        </>
      )}
    </article>
  );
}

export const NewsCard = memo(NewsCardInner);
