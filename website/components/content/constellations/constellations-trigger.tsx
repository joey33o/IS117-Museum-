'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function goToSlide(index: number) {
  const slide = document.querySelector<HTMLElement>(`[data-constellation-slide][data-constellation-index="${index}"]`);
  slide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ConstellationsTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    if (!/^\/constellations\/?$/.test(pathname)) {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-constellation-slide]'));

    if (!sections.length) {
      return;
    }

    let frameId = 0;

    const publishPosition = () => {
      const viewportHeight = window.innerHeight;
      let nextPosition = 0;

      for (let index = 1; index < sections.length; index += 1) {
        const top = sections[index].getBoundingClientRect().top;

        if (top <= viewportHeight) {
          const normalizedTop = Math.min(Math.max(top, 0), viewportHeight);
          nextPosition = Math.max(nextPosition, index - normalizedTop / viewportHeight);
        }
      }

      const position = Math.min(sections.length - 1, Math.max(0, nextPosition));
      window.dispatchEvent(new CustomEvent('constellation:position', {
        detail: {
          position,
          activeIndex: Math.round(position),
        },
      }));
    };

    const requestPosition = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(publishPosition);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const activeIndex = sections.reduce((current, section, index) => {
        const rect = section.getBoundingClientRect();
        const currentRect = sections[current].getBoundingClientRect();
        return Math.abs(rect.top) < Math.abs(currentRect.top) ? index : current;
      }, 0);

      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault();
        goToSlide(Math.min(sections.length - 1, activeIndex + 1));
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        goToSlide(Math.max(0, activeIndex - 1));
      }
    };

    publishPosition();
    window.addEventListener('scroll', requestPosition, { passive: true });
    window.addEventListener('resize', requestPosition);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestPosition);
      window.removeEventListener('resize', requestPosition);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pathname]);

  return null;
}
