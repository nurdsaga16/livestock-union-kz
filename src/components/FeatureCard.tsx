import { memo, type ReactNode } from 'react';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

function FeatureCardInner({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <article
      className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 group cursor-pointer hover:border-primary transition-colors ${className}`}
      tabIndex={0}
      role="button"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-primary text-4xl" aria-hidden>
          {icon}
        </span>
        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors" aria-hidden>
          arrow_circle_right
        </span>
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </article>
  );
}

export const FeatureCard = memo(FeatureCardInner);
