---
name: react-component
description: Guide for creating React components following project conventions — memo pattern, TypeScript props, Tailwind styling, accessibility. Use when creating new components, refactoring existing ones, or when the user asks about component patterns.
---

# React Component Creation

## Component Template

Every component follows this pattern:

```tsx
import { memo, useCallback } from 'react';

type MyComponentProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

function MyComponentInner({ title, onClick, className = '' }: MyComponentProps) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded p-4 ${className}`}
      onClick={handleClick}
    >
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
  );
}

export const MyComponent = memo(MyComponentInner);
```

## Rules

1. **Naming**: `ComponentNameInner` for the function, `ComponentName` for the memo export
2. **Props**: Use `type` (not `interface`) for props. Always define explicitly — no inline destructuring types
3. **Export**: Named export only. No `export default` (except `App.tsx`)
4. **Memo**: Always wrap with `React.memo` via the `memo` import
5. **Hooks**: Use `useCallback` for handlers in memoized components. Use `useState` with explicit generic type
6. **Imports**: Use `@/` path alias: `import { Button } from '@/components/Button'`
7. **File location**: `src/components/` for reusable components, `src/pages/` for route-level pages

## Accessibility

- Add `role` attributes where semantics are unclear (e.g., `role="banner"` on header)
- Use `aria-label` on interactive elements without visible text
- Mark decorative elements with `aria-hidden`
- Use `sr-only` class for screen-reader-only content
- Provide `id` + `aria-labelledby` for section headings

## Dark Mode

Every component must support both themes:
- Pair light/dark classes: `bg-white dark:bg-gray-900`, `text-slate-900 dark:text-white`
- Use semantic color tokens from Tailwind config: `text-primary`, `bg-primary`, `text-secondary`
- Borders: `border-gray-200 dark:border-gray-800`

## Icons

Use Google Material Symbols via class names:

```tsx
<span className="material-symbols-outlined" aria-hidden>arrow_forward</span>
```

## Images

- Always include `alt` text in Russian
- Add `loading="lazy"` for below-the-fold images
- Use external URLs (Google hosted images) or future `/api/files/` endpoint
