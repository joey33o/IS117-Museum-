"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function TransitionTrigger() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const rootBody = document.body;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cosmicSection = document.getElementById('cosmic-instruments');

    const toRgb = (hex: string) => {
      const normalized = hex.replace('#', '');
      const value = normalized.length === 3
        ? normalized
            .split('')
            .map((char) => char + char)
            .join('')
        : normalized;
      return {
        r: parseInt(value.slice(0, 2), 16),
        g: parseInt(value.slice(2, 4), 16),
        b: parseInt(value.slice(4, 6), 16),
      };
    };

    const mixColor = (fromHex: string, toHex: string, progress: number) => {
      const from = toRgb(fromHex);
      const to = toRgb(toHex);
      const ratio = Math.max(0, Math.min(1, progress));
      const r = Math.round(from.r + (to.r - from.r) * ratio);
      const g = Math.round(from.g + (to.g - from.g) * ratio);
      const b = Math.round(from.b + (to.b - from.b) * ratio);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const setSpaceEra = (enabled: boolean) => {
      rootBody.classList.toggle('is-space-era', enabled);
    };

    const setScrollThemeProgress = (progress: number) => {
      const clamped = Math.max(0, Math.min(1, progress));
      let textProgress = 0;
      if (clamped > 0.58) {
        textProgress = Math.min(1, (clamped - 0.58) / 0.42);
      }
      rootBody.style.setProperty('--scroll-progress', clamped.toFixed(4));
      rootBody.style.setProperty('--scroll-bg-color', mixColor('#f1e7d0', '#000000', clamped));
      rootBody.style.setProperty('--scroll-text-color', mixColor('#2b2622', '#ffffff', textProgress));
      rootBody.style.setProperty('--scroll-nav-blur', `${(1 - clamped) * 4}px`);
    };

    const bootstrapTrigger = ScrollTrigger.create({
      id: 'transition-bootstrap',
      trigger: cosmicSection ?? document.body,
      start: cosmicSection ? 'top 70%' : 'top top',
      end: cosmicSection ? 'bottom top' : 'bottom bottom',
      scrub: false,
      onEnter: () => {
        setSpaceEra(true);
      },
      onEnterBack: () => {
        setSpaceEra(true);
      },
      onLeaveBack: () => {
        setSpaceEra(false);
        setScrollThemeProgress(0);
      },
      onLeave: () => {
        setSpaceEra(true);
        setScrollThemeProgress(1);
      },
      onUpdate: (self) => {
        if (prefersReducedMotion) {
          const isSpace = self.progress >= 0.5 || self.isActive;
          setSpaceEra(isSpace);
          setScrollThemeProgress(isSpace ? 1 : 0);
          return;
        }

        setScrollThemeProgress(self.progress);
      },
    });

    setScrollThemeProgress(0);

    return () => {
      setSpaceEra(false);
      rootBody.style.removeProperty('--scroll-progress');
      rootBody.style.removeProperty('--scroll-bg-color');
      rootBody.style.removeProperty('--scroll-text-color');
      rootBody.style.removeProperty('--scroll-nav-blur');
      bootstrapTrigger.kill();
    };
  }, []);

  return null;
}
