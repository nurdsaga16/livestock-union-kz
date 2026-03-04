---
name: project-overview
description: Provides full context about the livestock-union-kz project — tech stack, directory structure, coding conventions, and architecture. Use when starting work on the project, onboarding, or when the user asks about project structure, conventions, or architecture.
---

# Project Overview — Livestock Union of Kazakhstan

Frontend SPA for "Союз животноводства Казахстана" — an industry portal for livestock producers with news, market prices, analytics, and services.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5.6 (strict mode) |
| Build | Vite 6 |
| Styling | Tailwind CSS 3.4 + `@tailwindcss/typography` |
| Routing | React Router DOM 7 |
| Deployment | Vercel (SPA rewrites via `vercel.json`) |

## Directory Structure

```
src/
├── assets/          # Static data, constants
│   └── constants.ts
├── components/      # Reusable UI components
├── contexts/        # React context providers (ThemeContext)
├── hooks/           # Custom hooks (useTheme)
├── layouts/         # Page layout wrappers (MainLayout)
├── pages/           # Route-level page components
├── App.tsx          # Root: ThemeProvider + BrowserRouter + Routes
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind directives
```

## Key Conventions

### Imports

- Use `@/` path alias for all `src/` imports: `import { Button } from '@/components/Button'`
- Configured in both `tsconfig.json` and `vite.config.ts`

### Component Pattern

- Named function `ComponentNameInner` wrapped with `React.memo`:

```tsx
function MyComponentInner() {
  return <div>...</div>;
}
export const MyComponent = memo(MyComponentInner);
```

- Use `useCallback` for event handlers passed as props or defined in memoized components
- Named exports (not default) for components; `App.tsx` is the only default export

### Pages & Routing

- Pages are lazy-loaded via `React.lazy` + `Suspense` with `PageLoader` fallback
- All routes live inside `MainLayout` (Header + content + Footer + FeedbackTab)
- Routes: `/` (HomePage), `/prices-markets`, `/prices-analytics`, `*` → redirect to `/`

### Localization

- All UI text is in Russian (Kazakh/Russian context)
- Currency: Kazakhstani tenge (₸, KZT)

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run preview` | Preview production build |

### No Backend in Repo

The frontend is standalone. An external backend API is documented in `API_DOCUMENTATION.md` but not yet integrated. See the `api-integration` skill for details.

### No Tests Yet

No testing framework is configured. When adding tests, prefer Vitest (native Vite integration).
