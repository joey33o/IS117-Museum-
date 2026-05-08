'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function progressBetween(progress: number, start: number, end: number) {
  if (end <= start) {
    return 1;
  }

  return clamp01((progress - start) / (end - start));
}

function mix(start: number, end: number, progress: number) {
  return start + (end - start) * clamp01(progress);
}

function goToSlide(index: number) {
  const slide = document.querySelector<HTMLElement>(`[data-constellation-index="${index}"]`);
  slide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ConstellationsTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    if (!/^\/constellations\/?$/.test(pathname)) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-constellation-slide]'));

    if (!sections.length) {
      return;
    }

    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      const caption = section.querySelector<HTMLElement>('[data-constellation-caption]');
      const background = section.querySelector<HTMLImageElement>('[data-constellation-bg]');
      const image = section.querySelector<HTMLImageElement>('[data-constellation-image]');
      const tone = section.querySelector<HTMLElement>('[data-constellation-tone]');
      const vignette = section.querySelector<HTMLElement>('[data-constellation-vignette]');
      if (!caption || !background || !image || !tone || !vignette) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(caption, { clearProps: 'all', opacity: 1, y: 0, scale: 1 });
        gsap.set(background, {
          clearProps: 'all',
          opacity: 0.92,
          yPercent: 0,
          scale: 1.1,
          filter: 'brightness(0.82) contrast(1.06) saturate(0.9) blur(1px)',
        });
        gsap.set(image, { clearProps: 'all', opacity: 1, y: 0, scale: 1 });
        gsap.set([tone, vignette], { clearProps: 'all', opacity: 1 });
        return;
      }

      const isFirst = index === 0;

      gsap.set(caption, {
        opacity: isFirst ? 1 : 0,
        y: isFirst ? 0 : 34,
        scale: isFirst ? 1 : 0.965,
        transformOrigin: '50% 60%',
      });
      gsap.set(background, {
        opacity: isFirst ? 0.92 : 0,
        yPercent: -8,
        scale: isFirst ? 1.12 : 1.16,
        filter: 'brightness(0.96) contrast(1.02) saturate(0.94) blur(0px)',
        transformOrigin: '50% 50%',
      });
      gsap.set(image, {
        opacity: isFirst ? 1 : 0,
        y: isFirst ? 0 : 28,
        scale: isFirst ? 1 : 1.08,
        transformOrigin: '50% 50%',
      });
      gsap.set(tone, { opacity: isFirst ? 0.12 : 0 });
      gsap.set(vignette, { opacity: isFirst ? 0.2 : 0 });

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.65,
        onUpdate: (self) => {
          const slideProgress = clamp01(self.progress);
          const imageIn = isFirst ? 1 : progressBetween(slideProgress, 0.04, 0.42);
          const mediaProgress = progressBetween(slideProgress, 0.08, 1);
          const cardProgress = isFirst ? 1 : progressBetween(slideProgress, 0.52, 0.9);
          const foregroundProgress = progressBetween(slideProgress, 0.54, 0.92);

          const blur = mix(0, 1.4, mediaProgress);
          const brightness = mix(0.96, 0.74, mediaProgress);
          const contrast = mix(1.02, 1.08, mediaProgress);
          const saturation = mix(0.94, 0.84, mediaProgress);

          gsap.set(background, {
            opacity: imageIn * 0.92,
            yPercent: mix(-8, 8, mediaProgress),
            scale: mix(1.16, 1.08, mediaProgress),
            filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturation}) blur(${blur}px)`,
          });

          gsap.set(tone, {
            opacity: imageIn * mix(0.1, 0.34, mediaProgress),
          });

          gsap.set(vignette, {
            opacity: imageIn * mix(0.18, 0.42, mediaProgress),
          });

          gsap.set(image, {
            opacity: imageIn * mix(0.74, 1, foregroundProgress),
            y: mix(28, 0, foregroundProgress),
            scale: mix(1.08, 1, foregroundProgress),
          });

          gsap.set(caption, {
            opacity: cardProgress,
            y: mix(34, 0, cardProgress),
            scale: mix(0.965, 1, cardProgress),
          });
        },
      });

      triggers.push(trigger);
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const activeIndex = sections.reduce((current, section, index) => {
        const rect = section.getBoundingClientRect();
        return Math.abs(rect.top) < Math.abs(sections[current].getBoundingClientRect().top)
          ? index
          : current;
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

    const refresh = () => ScrollTrigger.refresh();
    const images = sections.flatMap((section) => (
      Array.from(section.querySelectorAll<HTMLImageElement>('img'))
    ));

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener('load', refresh, { once: true });
      }
    });

    window.addEventListener('keydown', handleKeyDown);
    ScrollTrigger.refresh();

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', refresh);
      });
      window.removeEventListener('keydown', handleKeyDown);
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
