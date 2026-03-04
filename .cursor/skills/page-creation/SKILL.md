---
name: page-creation
description: Guide for adding new pages and routes to the livestock-union-kz SPA — lazy loading, layout integration, routing, and page structure patterns. Use when creating new pages, adding routes, or when the user mentions new pages, navigation, or routing.
---

# Page Creation

## Step-by-step Workflow

### 1. Create the Page Component

File: `src/pages/NewPage.tsx`

```tsx
import { memo } from 'react';

function NewPageInner() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
        Заголовок страницы
      </h1>
      {/* Page content */}
    </main>
  );
}

export const NewPage = memo(NewPageInner);
```

### 2. Add Lazy Route in `App.tsx`

```tsx
const NewPage = lazy(() =>
  import('@/pages/NewPage').then((m) => ({ default: m.NewPage }))
);
```

The `.then()` wrapper is required because pages use named exports (not default).

Add the route inside the `MainLayout` route:

```tsx
<Route
  path="new-page"
  element={
    <Suspense fallback={<PageLoader />}>
      <NewPage />
    </Suspense>
  }
/>
```

### 3. Add Navigation Link (if needed)

In `src/components/Navigation.tsx`, add a `NavLink`:

```tsx
<NavLink to="/new-page" className={linkClass}>
  Новая страница
</NavLink>
```

## Page Structure Conventions

- Wrap content in `<main>` with appropriate max-width
- Use `max-w-7xl mx-auto px-6` for standard pages
- Use `max-w-[1440px] mx-auto px-6` for data-heavy/analytics pages
- First element: `<h1>` with `text-4xl font-extrabold`
- Sections: separated with `py-16`, use `aria-labelledby` with heading `id`
- Always support dark mode in every element

## Existing Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `HomePage` | Hero, news, services, export section |
| `/prices-markets` | `PricesMarketsPage` | Price indicators and sidebar |
| `/prices-analytics` | `PricesAnalyticsPage` | Charts, filters, data tables |
| `*` | Redirect to `/` | Catch-all |

## Layout

All pages render inside `MainLayout` which provides:
- `Header` (TopBar + logo + navigation + search + theme toggle + login button)
- `<Outlet />` for page content
- `Footer`
- `FeedbackTab` (floating feedback widget)

Pages should NOT include their own header/footer.
