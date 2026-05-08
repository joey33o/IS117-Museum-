'use client';

import { useEffect, useState } from 'react';

export function ConstellationProgress({ slidesCount }: { slidesCount: number }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = (event: Event) => {
      const detail = (event as CustomEvent<{ position: number }>).detail;
      if (!detail) {
        return;
      }

      const clampedPosition = Math.min(slidesCount - 1, Math.max(0, detail.position));
      setPosition((current) => (Math.abs(current - clampedPosition) < 0.001 ? current : clampedPosition));
    };

    window.addEventListener('constellation:position', updatePosition);

    return () => {
      window.removeEventListener('constellation:position', updatePosition);
    };
  }, [slidesCount]);

  const activeIndex = Math.round(position);

  const goToSlide = (index: number) => {
    const slide = document.querySelector<HTMLElement>(`[data-constellation-slide][data-constellation-index="${index}"]`);
    slide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="constellation-progress"
      aria-label={`Slide ${activeIndex + 1} of ${slidesCount}`}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={slidesCount}
      aria-valuenow={activeIndex + 1}
    >
      <button
        type="button"
        className="constellation-progress-count"
        onClick={() => goToSlide(activeIndex)}
        aria-label={`Slide ${activeIndex + 1} of ${slidesCount}`}
      >
        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
        <span aria-hidden="true">/</span>
        <span>{String(slidesCount).padStart(2, '0')}</span>
      </button>

      <div className="constellation-progress-dots" aria-label="Constellation slide navigation">
        {Array.from({ length: slidesCount }, (_, index) => {
          const distance = Math.abs(index - position);
          const opacity = Math.max(0.42, 1 - distance * 0.22);
          const scale = Math.max(0.82, 1.1 - distance * 0.08);

          return (
            <button
              key={index}
              type="button"
              className={`constellation-progress-dot${activeIndex === index ? ' is-active' : ''}`}
              style={{ opacity, transform: `scale(${scale})` }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeIndex === index}
            />
          );
        })}
      </div>
    </div>
  );
}
