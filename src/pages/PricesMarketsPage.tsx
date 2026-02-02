import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const TABS = ['Последние новости', 'Цены и рынки', 'Предстоящие события'] as const;
type TabId = (typeof TABS)[number];

const PERIOD_BTNS = ['3М', '6М', '1Г', '2Г'] as const;

function IndicatorCard({
  title,
  value,
  unit,
  change,
  changePositive,
  updated,
  linkHref,
  periodValues,
  chartPathD,
}: {
  title: string;
  value: string;
  unit: string;
  change: string;
  changePositive: boolean;
  updated: string;
  linkHref: string;
  periodValues: { week: string; month: string; year: string };
  chartPathD: string;
}) {
  const [period, setPeriod] = useState<'3М' | '6М' | '1Г' | '2Г'>('1Г');

  return (
    <article className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">{title}</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 p-1 rounded"
            aria-label="Ещё"
          >
            <span className="material-icons-round">more_vert</span>
          </button>
        </div>
        <div className="flex justify-between items-end mb-1">
          <div>
            <span className="text-4xl font-black text-gray-900 dark:text-white">{value}</span>
            <span className="text-sm text-gray-500 ml-1">{unit}</span>
          </div>
          <div className={`font-bold text-lg ${changePositive ? 'text-green-600' : 'text-red-500'}`}>
            {change}
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mb-6">
          <span>{updated}</span>
          <Link
            to={linkHref}
            className="text-primary dark:text-secondary font-semibold flex items-center hover:underline"
          >
            Перейти к индикатору{' '}
            <span className="material-icons-round text-sm ml-1">arrow_forward_ios</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-8 text-center border-y border-gray-50 dark:border-gray-800 py-4">
          <div>
            <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Прошл. неделя</div>
            <div className="font-bold text-gray-700 dark:text-gray-300">{periodValues.week}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Прошл. месяц</div>
            <div className="font-bold text-gray-700 dark:text-gray-300">{periodValues.month}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Прошл. год</div>
            <div className="font-bold text-gray-700 dark:text-gray-300">{periodValues.year}</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-gray-400 uppercase">Исторические тренды</span>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded p-0.5">
              {PERIOD_BTNS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1 text-[10px] font-bold rounded transition-colors ${
                    period === p ? 'bg-primary text-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-32 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 400 100" aria-hidden>
              <path
                className="chart-path"
                d={chartPathD}
                fill="none"
                stroke="#004B23"
                strokeWidth="2.5"
              />
              <line stroke="#eee" strokeWidth="1" x1="0" x2="400" y1="90" y2="90" />
              <line className="dark:stroke-gray-800" stroke="#f5f5f5" strokeWidth="1" x1="0" x2="400" y1="50" y2="50" />
            </svg>
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium">
              <span>Мар 2025</span>
              <span>Июл 2025</span>
              <span>Ноя 2025</span>
              <span>Янв 2026</span>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/reports"
        className="bg-gray-50 dark:bg-gray-800/50 py-3 px-6 text-center text-sm font-bold text-primary dark:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 border-t border-gray-100 dark:border-gray-800"
      >
        Смотреть все отчеты{' '}
        <span className="material-icons-round text-base" aria-hidden>
          arrow_forward
        </span>
      </Link>
    </article>
  );
}

const NYCI_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBR6ve-EqWG3akajYv8RKbN6H4Z0I38DvKE0AkS5F41Cg85MyVJRYdAdiw7x1vGREekMiO5NWXzO47RHSX-OiiwKtY7H6Jx-AM32KZ-9Nsza9bHQt0WdOPsa_lrl6RuAnfFOMlXxnH-tsfcUM2go5cDmeNfMckXgZG5YuhaUrWQmf8nKW3o1fnppUXtjkMGINdAZkuX2_sGXajDpV2hWvO_gLovIBDR7zJou9ChCV0WrHNMKT9_hu_gzvfBoZFJADn6RbiIQ97kcwI';

function PricesMarketsPageInner() {
  const [activeTab, setActiveTab] = useState<TabId>('Цены и рынки');

  const handleTab = useCallback((tab: TabId) => {
    setActiveTab(tab);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        className="flex border-b border-gray-200 dark:border-gray-800 mb-8 overflow-x-auto"
        role="tablist"
        aria-label="Разделы"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => handleTab(tab)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary font-bold flex items-center gap-2'
                : 'text-gray-500 dark:text-gray-400 hover:text-primary'
            }`}
          >
            {activeTab === tab && (
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-secondary" aria-hidden />
            )}
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <IndicatorCard
              title="Национальный индикатор молодняка КРС"
              value="460.4"
              unit="тг/кг ж.в."
              change="-2.3"
              changePositive={false}
              updated="Обновлено 26 января 2026"
              linkHref="/indicator/cattle"
              periodValues={{ week: '462.7', month: '482.9', year: '358.1' }}
              chartPathD="M0,80 L40,75 L80,78 L120,60 L160,55 L200,45 L240,48 L280,30 L320,35 L360,25 L400,32"
            />
            <IndicatorCard
              title="Национальный индикатор ягнятины"
              value="1,088.8"
              unit="тг/кг у.в."
              change="+31"
              changePositive
              updated="Обновлено 26 января 2026"
              linkHref="/indicator/lamb"
              periodValues={{ week: '1,057.8', month: '-', year: '786.4' }}
              chartPathD="M0,85 L30,82 L60,88 L90,75 L120,65 L150,45 L180,35 L210,38 L240,45 L270,42 L300,48 L330,45 L360,50 L400,48"
            />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Link
            to="/nyci"
            className="block bg-emerald-50 dark:bg-emerald-900/20 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer border border-emerald-100 dark:border-emerald-800/50"
          >
            <div className="flex">
              <div className="w-1/3 overflow-hidden relative">
                <img
                  src={NYCI_IMAGE}
                  alt="Пастбище с КРС"
                  className="h-full w-full object-cover grayscale brightness-75 transition-transform group-hover:scale-105 min-h-[140px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-2 rounded-lg text-primary font-black text-xl rotate-[-5deg]">
                    NYCI
                  </div>
                </div>
              </div>
              <div className="w-2/3 p-6 flex flex-col justify-center">
                <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-4 leading-snug">
                  Узнайте больше о национальном индикаторе молодняка КРС
                </h4>
                <span className="text-primary dark:text-secondary text-xs font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Смотреть индикатор{' '}
                  <span className="material-icons-round text-base" aria-hidden>
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
            <div
              className="absolute -right-8 top-1/2 -rotate-90 origin-center bg-primary text-white text-[10px] font-bold py-1 px-4 tracking-widest uppercase pointer-events-none"
              aria-hidden
            >
              ОБРАТНАЯ СВЯЗЬ
            </div>
          </Link>

          <Link
            to="/market-review"
            className="block bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow relative group overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <span className="material-icons-round text-3xl">insert_chart_outlined</span>
              </div>
              <div className="flex-grow pr-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Еженедельный обзор рынка</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Получите актуальную информацию для принятия решений в вашем бизнесе.
                </p>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-primary transition-colors">
                <span className="material-icons-round">arrow_circle_right</span>
              </div>
            </div>
            <span
              className="material-icons-round absolute -bottom-4 -right-4 text-gray-100 dark:text-gray-800 text-8xl pointer-events-none opacity-50"
              aria-hidden
            >
              analytics
            </span>
          </Link>

          <Link
            to="/reports"
            className="block bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow relative group overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <span className="material-icons-round text-3xl">description</span>
              </div>
              <div className="flex-grow pr-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Рыночные отчеты</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Самые свежие аналитические данные по всем регионам Казахстана.
                </p>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-primary transition-colors">
                <span className="material-icons-round">arrow_circle_right</span>
              </div>
            </div>
            <span
              className="material-icons-round absolute -bottom-4 -right-4 text-gray-100 dark:text-gray-800 text-8xl pointer-events-none opacity-50"
              aria-hidden
            >
              request_quote
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export const PricesMarketsPage = memo(PricesMarketsPageInner);
