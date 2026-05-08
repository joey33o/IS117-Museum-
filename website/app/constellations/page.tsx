import { CONSTELLATION_SLIDES } from '@/lib/content/constellations-data';
import { ConstellationDeckLoader } from '@/components/content/constellations/constellation-deck-loader';

export default function ConstellationsPage() {
  return (
    <section aria-labelledby="constellations-page-heading">
      <header className="constellation-intro responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="space-y-3 md:col-span-8">
          <p className="eyebrow-label era-meta">Scrollytelling Gallery</p>
          <h1 id="constellations-page-heading" className="editorial-display font-semibold leading-[1.1]">
            Constellations and the Stories We Fixed to Them
          </h1>
        </div>

        <div className="space-y-4 md:col-span-4 md:col-start-9">
          <p className="editorial-lead era-meta text-sm">
            Scroll through four mythic star patterns as each image blurs at the edges of attention and snaps into focus at center.
          </p>
        </div>
      </header>

      <ConstellationDeckLoader />
    </section>
  );
}
