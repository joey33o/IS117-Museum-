import { HeroOpening } from '@/components/content/home/hero-opening';
import { timelineDataset } from '@/lib/content/timeline-data';
import { getMilestoneStats, getSortedMilestones } from '@/lib/content/selectors';

export default function Home() {
  const stats = getMilestoneStats();
  const milestones = getSortedMilestones();

  return (
    <section className="space-y-10">
      <HeroOpening />

      <section className="grid gap-6 md:grid-cols-12 md:gap-8">
        <aside className="space-y-4 md:col-span-4 md:pt-2 lg:col-span-3">
          <h2 className="eyebrow-label text-black/65">Collection Metrics</h2>
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

        <section className="space-y-3 md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5">
          <h2 className="editorial-section-title font-semibold">Chronology Preview</h2>
          <ul className="chronology-list">
            {milestones.slice(0, 6).map((milestone) => (
              <li key={milestone.id} className="chronology-card rounded-md border border-black/10 bg-white/40 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-black/60">{milestone.year}</p>
                <h3 className="editorial-card-title text-lg font-semibold">{milestone.title}</h3>
                <p className="editorial-card-copy text-sm text-black/80">{milestone.summary}</p>
                <p className="mt-1 text-xs text-black/60">
                  Era: {timelineDataset.eras.find((era) => era.id === milestone.eraId)?.title ?? milestone.eraId}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}
