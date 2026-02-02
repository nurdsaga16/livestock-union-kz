import { memo } from 'react';

function FeedbackTabInner() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40" aria-hidden>
      <button
        type="button"
        className="bg-primary text-white text-[10px] font-bold py-4 px-2 feedback-tab uppercase tracking-widest hover:pr-4 transition-all rounded-l"
        aria-label="Обратная связь"
      >
        Обратная связь
      </button>
    </div>
  );
}

export const FeedbackTab = memo(FeedbackTabInner);
