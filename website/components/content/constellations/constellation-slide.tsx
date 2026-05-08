'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';

import type { ConstellationSlide as ConstellationSlideType } from '@/lib/content/constellations-data';
import { resolvePublicAsset } from '@/lib/public-asset';

import { ConstellationParallaxBackground } from './constellation-parallax-background';
import { ConstellationSceneCard } from './constellation-scene-card';
import { ConstellationSlideContext } from './constellation-slide-context';

export function ConstellationSlide({ slide, index }: { slide: ConstellationSlideType; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelId = `constellation-${slide.id}-heading`;
  const imageSrc = resolvePublicAsset(slide.imageSrc);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  return (
    <ConstellationSlideContext.Provider value={{ scrollYProgress }}>
      <section
        ref={sectionRef}
        id={`constellation-slide-${index + 1}`}
        data-constellation-slide
        data-constellation-index={index}
        className="constellation-reference-slide"
        style={{ zIndex: index }}
        aria-labelledby={labelId}
      >
        <img
          aria-hidden="true"
          src={imageSrc}
          alt=""
          className="constellation-reference-section-fill"
        />
        <div className="constellation-reference-stage">
          <ConstellationParallaxBackground src={imageSrc} alt={slide.imageAlt} mode={index === 0 ? 'opening' : 'standard'} />

          <div className="constellation-reference-copy">
            <div className="mx-auto w-full max-w-[78rem] px-4">
              <ConstellationSceneCard sequence="delayed">
                <div className="constellation-caption w-full max-w-[60ch] space-y-3 p-5">
                  <p className="eyebrow-label">Constellation {index + 1}</p>
                  <h2 id={labelId} className="constellation-title">
                    {slide.title}
                  </h2>
                  <p className="text-[15px] leading-7">{slide.myth}</p>
                </div>
              </ConstellationSceneCard>
            </div>
          </div>
        </div>
      </section>
    </ConstellationSlideContext.Provider>
  );
}
