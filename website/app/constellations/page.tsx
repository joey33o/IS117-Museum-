import { CONSTELLATION_SLIDES } from '@/lib/content/constellations-data';
import { ConstellationSlide } from '@/components/content/constellations/constellation-slide';
import { ConstellationProgress } from '@/components/content/constellations/constellation-progress';
import { ConstellationsTrigger } from '@/components/content/constellations/constellations-trigger';

export default function ConstellationsPage() {
  return (
    <section className="constellation-deck full-bleed" aria-labelledby="constellations-page-heading">
      <ConstellationsTrigger />
      <ConstellationProgress slidesCount={CONSTELLATION_SLIDES.length} />

      <div aria-label="Constellation slides">
        {CONSTELLATION_SLIDES.map((slide, index) => (
          <ConstellationSlide key={slide.id} slide={slide} index={index} />
        ))}
      </div>
    </section>
  );
}
