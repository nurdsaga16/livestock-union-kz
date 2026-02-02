import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary/90 text-white shadow-sm',
  secondary:
    'bg-secondary hover:bg-amber-500 text-black',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost:
    'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
};

function ButtonInner({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-2.5 rounded font-semibold text-sm
        transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        disabled:opacity-50 disabled:pointer-events-none
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export const Button = memo(ButtonInner);
