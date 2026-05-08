"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { clearScrollTheme, setScrollThemeProgress, setSpaceEra } from '@/lib/theme/scroll-theme';

export function TransitionTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isErasRoute = /\/eras\/?$/.test(pathname);
    const eraOneSection = document.getElementById('earthbound-observers');
    const eraBridge = document.getElementById('era1-bridge');
    const cosmicSection = document.getElementById('cosmic-instruments');
    const eraTwoMidpoint = document.getElementById('era2-spectrum-expansion');

    if (!isErasRoute || !eraOneSection || !cosmicSection) {
      setSpaceEra(false);
      setScrollThemeProgress(0);
      return () => {
        setSpaceEra(false);
        clearScrollTheme();
      };
    }

    const bootstrapTrigger = ScrollTrigger.create({
      id: 'transition-bootstrap',
      trigger: eraBridge ?? eraOneSection,
      start: 'top 82%',
      endTrigger: eraTwoMidpoint ?? cosmicSection,
      end: 'top 35%',
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
      clearScrollTheme();
      bootstrapTrigger.kill();
    };
  }, [pathname]);

  return null;
}
