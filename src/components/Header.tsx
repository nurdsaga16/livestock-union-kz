import { memo } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SearchInput } from './SearchInput';
import { ThemeToggle } from './ThemeToggle';
import { TopBar } from './TopBar';
import { Button } from './Button';

function HeaderInner() {
  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-3"
        role="banner"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Logo />
            <Navigation />
          </div>
          <div className="flex items-center space-x-4">
            <SearchInput />
            <ThemeToggle />
            <Button variant="primary" className="px-5 py-2 flex items-center space-x-2">
              <span>Войти в myLUK</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

export const Header = memo(HeaderInner);
