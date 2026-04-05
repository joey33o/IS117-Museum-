import { HeroOpening } from '@/components/content/home/hero-opening';
import { TimelineRail } from '@/components/content/home/timeline-rail';
import { getMilestoneStats } from '@/lib/content/selectors';

export default function Home() {
  const stats = getMilestoneStats();

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

        <TimelineRail />
      </section>
    </section>
  );
}
