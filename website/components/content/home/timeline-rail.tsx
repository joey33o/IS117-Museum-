"use client";

import { useEffect, useState } from 'react';

import { timelineDataset } from '@/lib/content/timeline-data';
import { getSortedMilestones } from '@/lib/content/selectors';

export function TimelineRail() {
  const milestones = getSortedMilestones();
  const renderedMilestones = milestones.slice(0, 6);
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(renderedMilestones[0]?.id ?? null);

  useEffect(() => {
    const observedItems = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline-id]'));
    if (!observedItems.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const nextId = visibleEntries[0].target.getAttribute('data-timeline-id');
          if (nextId) {
            setActiveMilestoneId(nextId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    );

    observedItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section aria-labelledby="timeline-rail-heading" className="timeline-rail-shell space-y-4">
      <h2 id="timeline-rail-heading" className="editorial-section-title font-semibold">
        Chronology Preview
      </h2>
      <ul className="timeline-rail-list" aria-label="Telescope history milestones">
        {renderedMilestones.map((milestone) => (
          <li
            key={milestone.id}
            className={`timeline-rail-item ${activeMilestoneId === milestone.id ? 'is-active' : ''}`}
            data-timeline-id={milestone.id}
          >
            <span className="timeline-rail-marker" aria-hidden="true" />
            <article
              className={`chronology-card chronology-summary-card timeline-hover-card rounded-md border border-black/10 bg-white/40 p-4 ${activeMilestoneId === milestone.id ? 'is-active' : ''}`}
              tabIndex={0}
              aria-label={`${milestone.title} milestone`}
            >
              <p className="chronology-meta-row text-xs uppercase tracking-[0.12em] text-black/60">
                <span>{milestone.year}</span>
                <span className="chronology-meta-divider" aria-hidden="true">
                  /
                </span>
                <span>{timelineDataset.eras.find((era) => era.id === milestone.eraId)?.title ?? milestone.eraId}</span>
              </p>
              <h3 className="editorial-card-title text-lg font-semibold">{milestone.title}</h3>
              <p className="editorial-card-copy text-sm text-black/80">{milestone.summary}</p>
              <p className="chronology-importance text-xs uppercase tracking-[0.1em] text-black/65">
                {milestone.importance === 'major' ? 'Major Milestone' : 'Supporting Milestone'}
              </p>
              <p className="timeline-hover-preview text-sm text-black/75">{milestone.details}</p>
              <details className="timeline-expand-control">
                <summary className="timeline-expand-summary">Read deeper context</summary>
                <p className="timeline-expand-body text-sm text-black/80">{milestone.details}</p>
              </details>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
