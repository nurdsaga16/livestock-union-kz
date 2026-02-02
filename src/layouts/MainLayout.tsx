import { memo, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeedbackTab } from '@/components/FeedbackTab';

function MainLayoutInner({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header />
      <main className="flex-1">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <FeedbackTab />
    </div>
  );
}

export const MainLayout = memo(MainLayoutInner);
