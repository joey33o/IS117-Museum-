import { HeroOpening } from '@/components/content/home/hero-opening';
import { TimelineRail } from '@/components/content/home/timeline-rail';
import { getMilestoneStats } from '@/lib/content/selectors';
import Link from 'next/link';

export default function Home() {
  const stats = getMilestoneStats();
  const eraEntryCards = [
    {
      title: 'First Lenses and Proof',
      description: 'How observation became credible evidence through repeatability and method.',
      href: '/eras/earthbound-observers#era1-first-lenses',
      era: 'Earthbound Observers',
    },
    {
      title: 'Observatory Culture',
      description: 'The record-keeping discipline that changed astronomy from episodes to systems.',
      href: '/eras/earthbound-observers#era1-observatory-culture',
      era: 'Earthbound Observers',
    },
    {
      title: 'Instrument Standards',
      description: 'Calibration, precision, and the limits that defined the end of terrestrial-only observing.',
      href: '/eras/earthbound-observers#era1-instrument-standard',
      era: 'Earthbound Observers',
    },
    {
      title: 'Orbital Shift',
      description: 'Why moving beyond atmosphere fundamentally changed what telescopes could measure.',
      href: '/eras/cosmic-instruments#era2-orbital-shift',
      era: 'Cosmic Instruments',
    },
    {
      title: 'New Spectra',
      description: 'How infrared and X-ray observatories expanded the universe beyond visible-light assumptions.',
      href: '/eras/cosmic-instruments#era2-spectrum-expansion',
      era: 'Cosmic Instruments',
    },
    {
      title: 'Networked Observatories',
      description: 'Global coordination, linked arrays, and shared data pipelines as modern evidence practice.',
      href: '/eras/cosmic-instruments#era2-networked-observatories',
      era: 'Cosmic Instruments',
    },
  ];

  return (
    <section className="space-y-10">
      <HeroOpening />

      <section className="responsive-section-grid grid gap-4 md:grid-cols-12 md:gap-8" aria-labelledby="home-chronology-heading">
        <div className="space-y-3 md:col-span-4 lg:col-span-3">
          <h2 id="home-chronology-heading" className="editorial-section-title font-semibold">
            Orientation Timeline
          </h2>
          <p className="responsive-lead text-sm text-black/70">
            Follow the arc from early evidence culture to networked observatories, then jump into the matching reading sections.
          </p>
        </div>
        <div className="md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5">
          <TimelineRail />
        </div>
      </section>

      <section aria-labelledby="overview-heading" className="responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8">
        <aside className="space-y-4 md:col-span-4 md:pt-2 lg:col-span-3">
          <h2 id="overview-heading" className="editorial-section-title font-semibold">
            Start With the Eras
          </h2>
          <p className="responsive-lead text-sm text-black/70">
            Home now serves as orientation. Follow a card into a dedicated exhibition section and continue through Era 1 and Era 2 in sequence.
          </p>
          <h3 className="eyebrow-label text-black/65">Collection Snapshot</h3>
          <div className="space-y-3">
            <article className="rounded-md border border-black/10 bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">Eras</p>
              <p className="mt-1 text-2xl font-semibold">{stats.eraCount}</p>
            </article>
            <article className="rounded-md border border-black/10 bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">Milestones</p>
              <p className="mt-1 text-2xl font-semibold">{stats.milestoneCount}</p>
            </article>
            <article className="rounded-md border border-black/10 bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">Major Milestones</p>
              <p className="mt-1 text-2xl font-semibold">{stats.majorMilestones}</p>
            </article>
          </div>
        </aside>

        <ul className="grid gap-3 md:col-span-8 md:col-start-5 md:grid-cols-2 lg:col-span-7 lg:col-start-5" aria-label="Era section entry cards">
          {eraEntryCards.map((card) => (
            <li key={card.href} className="responsive-card rounded-md border border-black/10 bg-white/45 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">{card.era}</p>
              <h3 className="mt-1 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-black/80">{card.description}</p>
              <Link href={card.href} className="eyebrow-label mt-3 inline-block text-black/75">
                Read this section
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="responsive-section-grid grid gap-4 md:grid-cols-12 md:gap-8" aria-labelledby="reading-guidance-heading">
        <div className="space-y-3 md:col-span-4 lg:col-span-3">
          <h2 id="reading-guidance-heading" className="editorial-section-title font-semibold">
            Reading Guidance
          </h2>
        </div>
        <article className="reading-bridge md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5">
          <h3 className="reading-bridge-heading">Recommended Path</h3>
          <p className="reading-bridge-copy">
            Begin with Earthbound Observers framing, then continue in order through instrument standards before entering the orbital and networked sections.
            Each era is written as a complete chapter with optional deeper context, designed for approximately five to ten minutes of reading time.
          </p>
        </article>
      </section>

      <section className="era-end-nav" aria-label="Begin exhibition">
        <Link href="/eras/earthbound-observers" className="era-button era-button--primary">
          Begin Exhibition
        </Link>
      </section>
    </section>
  );
}
