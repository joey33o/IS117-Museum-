'use client';

import { useEffect, useState } from 'react';

export function ConstellationProgress({ slidesCount }: { slidesCount: number }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updatePosition = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-constellation-slide]')
      );

      if (!sections.length) {
        return;
      }

      const viewportHeight = window.innerHeight;
      let nextPosition = 0;

      sections.forEach((section, index) => {
        const top = section.getBoundingClientRect().top;

        if (top <= viewportHeight) {
          const normalizedTop = Math.min(Math.max(top, 0), viewportHeight);
          nextPosition = Math.max(nextPosition, index - normalizedTop / viewportHeight);
        }
      });

      const clampedPosition = Math.min(sections.length - 1, Math.max(0, nextPosition));
      setPosition((current) => (
        Math.abs(current - clampedPosition) < 0.001 ? current : clampedPosition
      ));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updatePosition);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [slidesCount]);

  const activeIndex = Math.round(position);

  const goToSlide = (index: number) => {
    const slide = document.querySelector<HTMLElement>(`[data-constellation-index="${index}"]`);
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
