import { memo, useCallback, useState } from 'react';

function SearchInputInner() {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        // could navigate to search page
      }
    },
    [value]
  );

  return (
    <form role="search" onSubmit={handleSubmit} className="relative hidden md:block">
      <label htmlFor="header-search" className="sr-only">
        Поиск по сайту
      </label>
      <input
        id="header-search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск по сайту"
        className="bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-2 pl-10 text-sm w-48 lg:w-64 focus:ring-2 focus:ring-primary"
        aria-label="Поиск по сайту"
      />
      <span
        className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-sm pointer-events-none"
        aria-hidden
      >
        search
      </span>
    </form>
  );
}

export const SearchInput = memo(SearchInputInner);
