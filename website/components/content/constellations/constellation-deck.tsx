'use client';

import { CONSTELLATION_SLIDES } from '@/lib/content/constellations-data';

import { ConstellationProgress } from './constellation-progress';
import { ConstellationSlide } from './constellation-slide';
import { ConstellationsTrigger } from './constellations-trigger';

export function ConstellationDeck() {
  return (
    <div className="constellation-deck full-bleed" aria-label="Constellation slides">
      <ConstellationsTrigger />
      <ConstellationProgress slidesCount={CONSTELLATION_SLIDES.length} />
      {CONSTELLATION_SLIDES.map((slide, index) => (
        <ConstellationSlide key={slide.id} slide={slide} index={index} />
      ))}
    </div>
  );
}
