import { memo } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '@/assets/constants';

type LogoProps = {
  className?: string;
  alt?: string;
  height?: string;
};

function LogoInner({ className = '', alt = 'Livestock Union Kazakhstan Logo', height = 'h-16' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center shrink-0 ${className}`} aria-label="На главную">
      <img
        src={LOGO_URL}
        alt={alt}
        className={`${height} object-contain`}
        width={160}
        height={64}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}

export const Logo = memo(LogoInner);
