import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MainLayout } from '@/layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const PricesMarketsPage = lazy(() =>
  import('@/pages/PricesMarketsPage').then((m) => ({ default: m.PricesMarketsPage }))
);
const PricesAnalyticsPage = lazy(() =>
  import('@/pages/PricesAnalyticsPage').then((m) => ({ default: m.PricesAnalyticsPage }))
);

function PageLoader() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center"
      role="status"
      aria-label="Загрузка"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"
          aria-hidden
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">Загрузка…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="prices-markets"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PricesMarketsPage />
                </Suspense>
              }
            />
            <Route
              path="prices-analytics"
              element={
                <Suspense fallback={<PageLoader />}>
                  <PricesAnalyticsPage />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
