import { timelineDataset } from '@/lib/content/timeline-data';
import { getMilestoneStats, getSortedMilestones } from '@/lib/content/selectors';

export default function Home() {
  const stats = getMilestoneStats();
  const milestones = getSortedMilestones();

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.12em] text-black/70">Consumer Validation</p>
        <h1 className="text-4xl font-semibold leading-tight">The Celestial Eye Timeline Dataset</h1>
        <p className="max-w-3xl text-base text-black/80">
          This page validates typed data consumption from the shared timeline model before feature-level
          rendering is implemented.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
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
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Chronology Preview</h2>
        <ul className="space-y-2">
          {milestones.slice(0, 6).map((milestone) => (
            <li key={milestone.id} className="rounded-md border border-black/10 bg-white/40 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">{milestone.year}</p>
              <h3 className="text-lg font-semibold">{milestone.title}</h3>
              <p className="text-sm text-black/80">{milestone.summary}</p>
              <p className="mt-1 text-xs text-black/60">
                Era: {timelineDataset.eras.find((era) => era.id === milestone.eraId)?.title ?? milestone.eraId}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
