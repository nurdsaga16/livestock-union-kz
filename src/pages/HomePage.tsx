import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { NewsCard } from '@/components/NewsCard';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';

const NEWS_IMAGES = {
  cattle:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBbkdJzzOF8QH1Fwj_b5ceFN44gYbAyTP-MmMiBGYa_G53WwGnMQqA3c6g46cY5H5egPOnHwuGXDJ9ANDqnuOBiikr8YRUPtZG7VCqlXvFAK8S54p7iOEn09s_gK8ECazmGJppbiRLo4CKXbNNRouSxNUWsCTUVls-nYnMnldu5lYOgFdkfa4CMxPSmYe0KzMn0KXayON686Sl7OmP9AqlxZhuZ_JWNZLuJhK_m-4JwiVgdWd77D1bAwsisNCq68aalJLlP5NRBKnA',
  farming:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCXs01uKpYVxr-gIiGb0ltimO-ib6UvM8cWxkOCBmZW9QDLQsry01ryaXGoSE5rM1t7MYRNLibNwS9EZVGyNSfQyrkk45a-grNZzFI9U6XPeEw3XmqecwFEK7x87G-YJxEaE5OuJW-Xq044yOKnx4ygMLn4E4ehj63BzhKwfl3m5xzGR5FzvFGlTv-rZwgtyV4loRvFJasxXNY1bxj-0uYG7jYKZpsK0RSxYaSSU__Tsen6cu6IrztMnqX-LJk53qe_uhk38MrwVXM',
  pasture:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA8VAux8uxYb-PfFNAW8f4NfiKPb0DQwBK0noX-2n8JcbREYzPPlpS-UMt4hrSx4cKC4qkIFK_4WWbhBrnVJZGjLmhLouCfjyH2ErfCEdVuhHt_QjL_TDb5J2hR7hWaDAWPrMTUT5z_sA_3cs6EsgHHP0So1WP12nP0jVnFNN5gw4SQ4YLZW1K-2T-B-nJ1pvWJ-lGU_nMBO8ckC9AjVvv9FgeqB9XEkEe2fUL1UiCzUVCd352vUWlzXpdESuRJA-Wkh7PhU5hrGuc',
};

const MYLUK_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBMAiCEUXdKXjhIRTAmWCH1_lcY5nFweVdRMsbdWTO6KJPm18w-KRhn2nmIwNvKJ74soUhdzJc9KqiamwvbN5rG3Ripo8JbsNQkoYkljaw0tV22tWM2Wvkzi4La0Y0XDknM3CumJsfaTpR1MKw2dfzNXGqO_FwzLpu4l25mNAHFg9L0Okb6pl3yeATIQPZXlfQPvHf9oN7YsaRJw_4AaCFkdzbEHiNpybEvSjhcPoRef-sx-4psp-yoBOxsBu5POP3nlp9frR3sQlE';

const TABS = ['Последние новости', 'Цены и Рынки', 'События'] as const;
type TabId = (typeof TABS)[number];

function HomePageInner() {
  const [activeTab, setActiveTab] = useState<TabId>('Последние новости');

  const handleTab = useCallback((tab: TabId) => {
    setActiveTab(tab);
  }, []);

  return (
    <>
      <Hero />

      <section className="py-16 max-w-7xl mx-auto px-6" aria-labelledby="news-heading">
        <div className="flex items-center space-x-8 mb-10 border-b border-gray-100 dark:border-gray-800 overflow-x-auto">
          <h2 id="news-heading" className="sr-only">
            Разделы новостей
          </h2>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTab(tab)}
              className={`pb-4 border-b-4 font-medium text-xl whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'border-primary font-bold text-primary dark:text-white flex items-center'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {activeTab === tab && <span className="w-2 h-2 rounded-full bg-primary mr-3 inline-block" aria-hidden />}
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            imageUrl={NEWS_IMAGES.cattle}
            imageAlt="Транспортировка скота"
            title="Рост экспорта: казахстанская говядина выходит на новые рынки Юго-Восточной Азии"
            date="24 МАЯ 2024"
            linkHref="/news/1"
            secondaryTitle="Официальное заявление: Новые субсидии для семейных овцеводческих ферм"
            secondaryDate="18 МАЯ 2024"
          />
          <NewsCard
            imageUrl={NEWS_IMAGES.farming}
            imageAlt="Современное фермерство"
            title="Запуск LUK: Новая цифровая система мониторинга здоровья животных"
            date="20 МАЯ 2024"
            linkHref="/news/2"
            secondaryTitle="Еженедельный обзор рынка: цены на КРС стабильны на фоне роста экспорта"
            secondaryDate="15 МАЯ 2024"
          />
          <NewsCard
            imageUrl={NEWS_IMAGES.pasture}
            imageAlt="Состояние пастбищ"
            title=""
            date=""
            linkHref="/center"
            variant="highlight"
          />
        </div>
        <div className="mt-12">
          <Link
            to="/news"
            className="text-primary dark:text-emerald-400 font-bold flex items-center hover:underline text-lg"
          >
            Смотреть все новости{' '}
            <span className="material-symbols-outlined ml-2" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="services-heading" className="text-3xl font-bold mb-10">
            Популярные услуги
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-lg p-10 flex flex-col md:flex-row shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden">
              <div className="md:w-2/3 z-10">
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-6 leading-tight">
                  Ваш аккаунт myLUK — ключ к росту бизнеса
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Доступ к персональным дашбордам, рыночной аналитике и инструментам управления
                  сертификацией. Все в одном месте.
                </p>
                <Button variant="primary" className="px-10 py-4 rounded flex items-center">
                  Войти в myLUK
                </Button>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center items-end">
                <img
                  src={MYLUK_IMAGE}
                  alt="Интерфейс приложения"
                  className="rounded-lg shadow-xl translate-y-10 rotate-3 border-4 border-white dark:border-gray-800 w-full max-w-[280px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon="verified_user"
                title="Гарантия качества"
                description="Отраслевые программы обеспечения качества для совершенства на фермах."
              />
              <FeatureCard
                icon="fingerprint"
                title="Система идентификации"
                description="Система прослеживаемости перемещения скота в Казахстане."
              />
              <FeatureCard
                icon="description"
                title="Электронные ТТН"
                description="Цифровое оформление документов для ускорения процессов."
              />
              <FeatureCard
                icon="analytics"
                title="Мясные стандарты"
                description="Анализ качества туш и обратная связь через myLUK."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20 relative overflow-hidden" aria-labelledby="export-heading">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h2 id="export-heading" className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Растущий спрос на казахстанский скот на мировых рынках
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Мы связываем наших производителей с развивающимися рынками Азии и Европы, гарантируя
              высокие стандарты качества и прослеживаемости.
            </p>
            <button
              type="button"
              className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-emerald-50 transition-colors"
            >
              Исследовать мировые рынки
            </button>
          </div>
          <div className="flex justify-center relative">
            <div className="w-full max-w-md aspect-square bg-emerald-700/30 rounded-full flex items-center justify-center border border-emerald-400/20">
              <div className="w-4/5 h-4/5 border-2 border-dashed border-emerald-400/40 rounded-full animate-spin-slow flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-emerald-600/50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-emerald-300/30" aria-hidden>
                    public
                  </span>
                </div>
              </div>
              <div className="absolute top-1/4 right-0 bg-secondary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Ближний Восток $240M
              </div>
              <div className="absolute bottom-1/3 left-0 bg-secondary text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Восточная Азия $185M
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute -bottom-10 -right-10 text-[200px] font-black opacity-[0.03] pointer-events-none select-none uppercase"
          aria-hidden
        >
          ЭКСПОРТ
        </div>
      </section>
    </>
  );
}

export const HomePage = memo(HomePageInner);
