import { memo, useCallback, useState } from 'react';
import { Button } from './Button';
import { HERO_IMAGE_URL } from '@/assets/constants';

function HeroInner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section
      className="relative bg-accent-light dark:bg-accent-dark overflow-hidden min-h-[500px] flex items-center"
      aria-label="Главный баннер"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
        <div className="py-16 pr-12 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white leading-tight mb-6">
            Развитие животноводства <br />
            Казахстана
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            Стимулирование устойчивого роста и глобальной конкурентоспособности казахстанских
            производителей мяса и молока через инновации и международные стандарты.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" className="px-8 py-3 rounded flex items-center shadow-sm">
              Стать участником{' '}
              <span className="material-symbols-outlined ml-2 text-lg" aria-hidden>
                person_add
              </span>
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded flex items-center">
              Подробнее
            </Button>
          </div>
          <div className="mt-16 flex space-x-2" role="tablist" aria-label="Слайды">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Слайд ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === activeSlide ? 'bg-primary' : 'border border-primary'
                }`}
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </div>
        </div>
        <div className="relative h-[500px] lg:h-auto">
          <img
            src={HERO_IMAGE_URL}
            alt="Пастбища Казахстана"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute bottom-6 right-6 flex space-x-4">
            <button
              type="button"
              onClick={goPrev}
              className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white/20 transition-colors focus:ring-2 focus:ring-white"
              aria-label="Предыдущий слайд"
            >
              <span className="material-symbols-outlined" aria-hidden>
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white/20 transition-colors focus:ring-2 focus:ring-white"
              aria-label="Следующий слайд"
            >
              <span className="material-symbols-outlined" aria-hidden>
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroInner);
