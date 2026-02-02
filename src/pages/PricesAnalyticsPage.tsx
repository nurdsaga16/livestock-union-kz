import { memo, useCallback, useState } from 'react';

const TABLE_ROWS = [
  { date: '31.03.2023', product: 'Губы говяжьи', halal: 'Да', price: '1 460', unit: '₸/кг' },
  { date: '31.03.2023', product: 'Щековина', halal: 'Да', price: '2 370', unit: '₸/кг' },
  { date: '30.06.2023', product: 'Губы говяжьи', halal: 'Да', price: '1 880', unit: '₸/кг' },
  { date: '30.06.2023', product: 'Щековина', halal: 'Нет', price: '2 610', unit: '₸/кг' },
  { date: '30.09.2023', product: 'Губы говяжьи', halal: 'Да', price: '2 080', unit: '₸/кг' },
  { date: '30.09.2023', product: 'Щековина', halal: 'Да', price: '2 600', unit: '₸/кг' },
  { date: '31.12.2023', product: 'Губы говяжьи', halal: 'Да', price: '2 180', unit: '₸/кг' },
  { date: '31.12.2023', product: 'Щековина', halal: 'Да', price: '2 680', unit: '₸/кг' },
  { date: '31.03.2024', product: 'Губы говяжьи', halal: 'Да', price: '2 240', unit: '₸/кг' },
  { date: '31.03.2024', product: 'Щековина', halal: 'Да', price: '2 920', unit: '₸/кг' },
  { date: '30.06.2024', product: 'Губы говяжьи', halal: 'Нет', price: '2 310', unit: '₸/кг' },
];

function PricesAnalyticsPageInner() {
  const [dateFrom, setDateFrom] = useState('2020-01-01');
  const [dateTo, setDateTo] = useState('2024-01-01');
  const [interval, setInterval] = useState('Ежеквартально');
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white">
        Цены на субпродукты КРС в Казахстане
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-end">
        <div className="lg:col-span-3">
          <label htmlFor="interval" className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">
            Временной интервал
          </label>
          <select
            id="interval"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-primary"
            aria-label="Временной интервал"
          >
            <option>Ежеквартально</option>
            <option>Ежемесячно</option>
            <option>Ежегодно</option>
          </select>
        </div>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label htmlFor="date-from" className="block text-xs font-semibold mb-1 text-slate-500">
                От
              </label>
              <input
                id="date-from"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm"
                aria-label="Дата начала"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="date-to" className="block text-xs font-semibold mb-1 text-slate-500">
                До
              </label>
              <input
                id="date-to"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm"
                aria-label="Дата окончания"
              />
            </div>
          </div>
          <div className="mt-4 px-2">
            <input
              type="range"
              className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
              aria-label="Диапазон дат"
            />
          </div>
        </div>
        <div className="lg:col-span-4 flex justify-end">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isLoading}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:underline disabled:opacity-50"
          >
            <span className="material-icons-outlined text-lg" aria-hidden>
              file_download
            </span>
            {isLoading ? 'Загрузка…' : 'Скачать данные (CSV/XLS)'}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col xl:flex-row h-[700px]">
        <div className="w-14 bg-primary flex-shrink-0 flex flex-col items-center py-6" aria-hidden>
          <button type="button" className="text-white p-2 bg-white/20 rounded-lg mb-4" aria-label="Фильтры">
            <span className="material-icons-outlined">filter_alt</span>
          </button>
          <div className="h-px w-8 bg-white/20 mb-4" />
          <button type="button" className="text-white/60 p-2 hover:text-white transition-colors" aria-label="График">
            <span className="material-icons-outlined">show_chart</span>
          </button>
          <button type="button" className="text-white/60 p-2 hover:text-white transition-colors" aria-label="Таблица">
            <span className="material-icons-outlined">table_chart</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col p-6 overflow-hidden">
          <div className="flex items-center gap-6 mb-8 flex-wrap">
            <span className="text-sm font-semibold flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" aria-hidden />
              Губы говяжьи
            </span>
            <span className="text-sm font-semibold flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" aria-hidden />
              Щековина
            </span>
            <span className="ml-auto text-xs text-slate-400 font-medium uppercase tracking-wider">
              Значение (KZT/кг)
            </span>
          </div>
          <div className="relative flex-1 chart-grid border-l border-b border-slate-200 dark:border-slate-700 mb-4 flex items-end min-h-[300px]">
            <svg className="w-full h-full min-h-[300px]" viewBox="0 0 800 400" aria-hidden>
              <path
                d="M0 380 Q 50 350, 100 360 T 200 320 T 300 340 T 400 280 T 500 290 T 600 220 T 700 240 T 800 180"
                fill="none"
                stroke="#006B3F"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path
                d="M0 340 Q 50 320, 100 310 T 200 250 T 300 280 T 400 200 T 500 150 T 600 100 T 700 120 T 800 60"
                fill="none"
                stroke="#FFB800"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <g className="text-slate-400 fill-current text-xs" fill="currentColor">
                <text x="5" y="380">
                  0
                </text>
                <text x="5" y="280">
                  400
                </text>
                <text x="5" y="180">
                  800
                </text>
                <text x="5" y="80">
                  1200
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div className="xl:w-[500px] border-l border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-sm">Детализированные данные</h3>
          </div>
          <div className="flex-1 overflow-auto min-h-[200px]">
            <table className="w-full text-left text-xs" role="grid" aria-label="Данные по субпродуктам">
              <thead className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm">
                <tr className="text-slate-500 uppercase font-bold border-b border-slate-100 dark:border-slate-800">
                  <th scope="col" className="px-4 py-3">
                    Квартал
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Продукт
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Халяль
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Цена
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Ед. изм.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={`${row.date}-${row.product}-${i}`}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-4 py-3 font-medium">{row.date}</td>
                    <td className="px-4 py-3">{row.product}</td>
                    <td className="px-4 py-3">{row.halal}</td>
                    <td className="px-4 py-3 font-bold">{row.price}</td>
                    <td className="px-4 py-3 text-slate-400">{row.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
            <span>Показано {TABLE_ROWS.length} записей</span>
            <div className="flex gap-2">
              <button
                type="button"
                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                aria-label="Предыдущая страница"
              >
                <span className="material-icons-outlined text-sm">chevron_left</span>
              </button>
              <button
                type="button"
                className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                aria-label="Следующая страница"
              >
                <span className="material-icons-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-primary uppercase mb-2 block">Максимум за период</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white">2 920 ₸/кг</div>
          <div className="text-xs text-slate-500 mt-1">Щековина, Март 2024</div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-primary uppercase mb-2 block">Средняя цена</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white">2 145 ₸/кг</div>
          <div className="text-xs text-slate-500 mt-1">Все продукты</div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold text-primary uppercase mb-2 block">Динамика</span>
          <div className="text-2xl font-black text-green-600 flex items-center gap-1">
            <span className="material-icons-outlined" aria-hidden>
              trending_up
            </span>
            +12.4%
          </div>
          <div className="text-xs text-slate-500 mt-1">Относительно прошлого года</div>
        </div>
      </div>
    </main>
  );
}

export const PricesAnalyticsPage = memo(PricesAnalyticsPageInner);
