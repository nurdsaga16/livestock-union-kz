# Союз животноводства Казахстана

Современное React 19 + TypeScript приложение на основе трёх HTML-страниц: главная, цены и рынки, детальная аналитика цен.

## Стек

- **React 19** (хуки, lazy, Suspense)
- **TypeScript** (.tsx)
- **Tailwind CSS 3** (darkMode: `class`, typography)
- **React Router 7**
- **Vite 6**

## Структура

```
src/
├── components/     # Header, Footer, Button, Logo, Hero, NewsCard, FeatureCard, ThemeToggle, etc.
├── pages/          # HomePage, PricesMarketsPage, PricesAnalyticsPage
├── layouts/        # MainLayout (Header + Outlet + Footer + FeedbackTab)
├── contexts/       # ThemeContext (dark/light)
├── hooks/          # useTheme
├── assets/         # constants (URL логотипов и изображений)
├── App.tsx         # Router + ThemeProvider + маршруты
├── main.tsx        # точка входа
└── index.css       # @tailwind + минимальные утилиты (keyframes, chart-grid)
```

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

## Маршруты

- `/` — главная (Hero, новости, услуги, экспорт)
- `/prices-markets` — цены и рынки (индикаторы КРС/ягнятина, сайдбар)
- `/prices-analytics` — детальная аналитика (график, таблица, фильтры)

## Особенности

- **Dark mode**: переключатель в Header, класс `dark` на `<html>`
- **Responsive**: mobile-first, breakpoints sm/md/lg/xl
- **Доступность**: ARIA, семантика, фокус и клавиатура
- **Производительность**: `React.memo`, `useCallback`, lazy-загрузка страниц, `loading="lazy"` для картинок
- **Загрузка**: состояние загрузки при переключении страниц (Suspense + PageLoader)

## Логотип

Логотип подключается из `src/assets/constants.ts` (URL) и используется в `Logo` и в Footer.
