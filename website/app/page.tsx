import { HeroOpening } from '@/components/content/home/hero-opening';
import { TimelineRail } from '@/components/content/home/timeline-rail';
import { getMilestoneStats, getSortedMilestones } from '@/lib/content/selectors';

export default function Home() {
  const stats = getMilestoneStats();
  const milestones = getSortedMilestones();
  const cosmicHighlights = milestones.filter((milestone) => milestone.year >= 1990).slice(0, 3);
  const figures = [
    { name: 'Galileo Galilei', role: 'Established telescopic evidence in planetary observation.' },
    { name: 'Thomas Harriot', role: 'Produced early telescopic lunar drawings.' },
    { name: 'Nancy Grace Roman', role: 'Advanced space telescope mission strategy at NASA.' },
    { name: 'Riccardo Giacconi', role: 'Pioneered X-ray astronomy and influenced Chandra-era science.' },
  ];

  return (
    <section className="space-y-10">
      <HeroOpening />

      <section id="earthbound-observers" aria-labelledby="earthbound-heading" className="section-anchor-target responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8">
        <aside className="space-y-4 md:col-span-4 md:pt-2 lg:col-span-3">
          <h2 id="earthbound-heading" className="editorial-section-title font-semibold">
            Earthbound Observers
          </h2>
          <p className="responsive-lead text-sm text-black/70">
            From lens experiments to observatory discipline, these milestones map astronomy before full orbital infrastructure.
          </p>
          <h3 className="eyebrow-label text-black/65">Collection Metrics</h3>
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

        <div className="space-y-3 md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5">
          <TimelineRail />
          <article className="reading-bridge">
            <h3 className="reading-bridge-heading">What Changed</h3>
            <p className="reading-bridge-copy">
              As telescope craft matured, astronomy shifted from isolated sightings to disciplined comparison over time.
              The question was no longer only what appears in the sky, but how reliably the same instrument can prove it.
            </p>
          </article>
        </div>
      </section>

      <section id="cosmic-instruments" aria-labelledby="cosmic-heading" className="section-anchor-target responsive-section-grid grid gap-4 md:grid-cols-12 md:gap-8">
        <div className="space-y-3 md:col-span-4 lg:col-span-3">
          <h2 id="cosmic-heading" className="editorial-section-title font-semibold">
            Cosmic Instruments
          </h2>
          <p className="responsive-lead text-sm text-black/70">Space-based and distributed observatories pushed beyond atmospheric limits and expanded measurement across the electromagnetic spectrum.</p>
        </div>
        <ul className="space-y-2 md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5" aria-label="Cosmic instrument highlights">
          {cosmicHighlights.map((milestone) => (
            <li key={milestone.id} className="responsive-card rounded-md border border-black/10 bg-white/40 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">{milestone.year}</p>
              <h3 className="editorial-card-title text-lg font-semibold">{milestone.title}</h3>
              <p className="editorial-card-copy text-sm text-black/80">{milestone.summary}</p>
            </li>
          ))}
          <li className="reading-bridge">
            <h3 className="reading-bridge-heading">Why It Mattered</h3>
            <p className="reading-bridge-copy">
              Once observatories moved beyond Earth atmosphere and into global networks, evidence gained breadth and depth at once.
              The modern era is defined by connected instruments that read one universe through many coordinated lenses.
            </p>
          </li>
        </ul>
      </section>

      <section id="important-figures" aria-labelledby="figures-heading" className="section-anchor-target responsive-section-grid grid gap-4 md:grid-cols-12 md:gap-8">
        <div className="space-y-3 md:col-span-4 lg:col-span-3">
          <h2 id="figures-heading" className="editorial-section-title font-semibold">
            Important Figures
          </h2>
          <p className="responsive-lead text-sm text-black/70">Key contributors whose work shaped evidence standards, instruments, and observational method.</p>
        </div>
        <ul className="space-y-2 md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5" aria-label="Important figures in telescope history">
          {figures.map((figure) => (
            <li key={figure.name} className="responsive-card rounded-md border border-black/10 bg-white/40 p-4">
              <h3 className="text-lg font-semibold">{figure.name}</h3>
              <p className="text-sm text-black/80">{figure.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
