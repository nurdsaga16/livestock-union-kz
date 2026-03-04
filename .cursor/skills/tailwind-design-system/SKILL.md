---
name: tailwind-design-system
description: Design system tokens, Tailwind CSS configuration, dark mode patterns, and styling conventions for the livestock-union-kz project. Use when styling components, adding new UI elements, working with colors, typography, or dark mode.
---

# Tailwind Design System

## Color Tokens

Defined in `tailwind.config.js`:

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#1d4429` | Brand green — buttons, links, accents, sidebar |
| `secondary` | `#f59e0b` | Amber — highlights, badges, chart lines |
| `background-light` | `#ffffff` | Light mode backgrounds |
| `background-dark` | `#111827` | Dark mode backgrounds (`gray-900`) |
| `accent-light` | `#f0fdf4` | Light green tint for subtle accents |
| `accent-dark` | `#064e3b` | Dark green for dark-mode accents |

### Usage in Classes

```html
<!-- Brand elements -->
<div class="bg-primary text-white">...</div>
<span class="text-primary dark:text-emerald-400">Link text</span>

<!-- Secondary highlights -->
<span class="bg-secondary text-black">Badge</span>
```

## Dark Mode

- Strategy: `darkMode: 'class'` — toggled via `ThemeContext`
- Always provide dark variant for every visual class:

```html
<div class="bg-white dark:bg-gray-900 text-slate-900 dark:text-white
            border-gray-200 dark:border-gray-800">
```

### Common Dark Pairs

| Light | Dark |
|-------|------|
| `bg-white` | `dark:bg-gray-900` |
| `bg-gray-50` | `dark:bg-gray-950` |
| `bg-slate-50` | `dark:bg-slate-800/50` |
| `text-slate-900` | `dark:text-white` |
| `text-gray-600` | `dark:text-gray-400` |
| `text-slate-500` | `dark:text-slate-400` |
| `border-gray-200` | `dark:border-gray-800` |
| `border-slate-200` | `dark:border-slate-700` |

## Typography

- Font family: `Inter` (loaded externally) — both `font-display` and `font-body`
- Headings: `font-bold` or `font-extrabold`, sizes `text-xl` to `text-5xl`
- Body: `text-sm` to `text-lg`, `text-gray-600 dark:text-gray-400`
- Section headings use `id` + linked `aria-labelledby`

## Layout Patterns

- Max content width: `max-w-7xl mx-auto px-6`
- Full-width analytics: `max-w-[1440px] mx-auto px-6`
- Section spacing: `py-16` for main sections, `py-8` for content areas
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8` (responsive 1 → 3 columns)
- 12-column grid for complex layouts: `grid-cols-1 lg:grid-cols-12`

## Border Radius

- Default radius overridden to `4px` (`rounded` = 4px)
- For cards/panels: `rounded-lg` or `rounded-xl` or `rounded-2xl`

## Animations

| Name | Class | Description |
|------|-------|-------------|
| `spin-slow` | `animate-spin-slow` | 20s infinite rotation (globe) |
| `dash` | `animate-dash` | SVG stroke dash animation |

## Shadows

- Cards: `shadow-sm` with border
- Featured images: `shadow-xl` with white border
- Sticky headers: `shadow-sm` on `thead`

## Buttons

Two variants used in the project:

```tsx
// Primary (green)
<Button variant="primary" className="px-5 py-2">Action</Button>

// White on primary background
<button class="bg-white text-primary px-8 py-3 rounded font-bold
               hover:bg-emerald-50 transition-colors">
  Action
</button>
```

## Plugins

- `@tailwindcss/typography` — for rich text / prose styling
