"use client";

import { useEffect, useState } from 'react';

export function TimelineRail() {
  const timelineStops = [
    {
      id: 'home-era1-first-lenses',
      year: '1609',
      title: 'Telescopic Observation Breakthrough',
      summary: 'Visual evidence begins to challenge inherited cosmology.',
      href: '/eras#era1-first-lenses',
      eraLabel: 'Earthbound Observers',
      importance: 'major' as const,
    },
    {
      id: 'home-era1-framing',
      year: '1610s',
      title: 'Evidence Recording Practices',
      summary: 'Observation starts shifting from witness to method.',
      href: '/eras#era1-framing',
      eraLabel: 'Earthbound Observers',
      importance: 'supporting' as const,
    },
    {
      id: 'home-era1-observatory-culture',
      year: '17th-18th c.',
      title: 'Observatory Discipline',
      summary: 'Recurring logs convert sightings into cumulative evidence.',
      href: '/eras#era1-observatory-culture',
      eraLabel: 'Earthbound Observers',
      importance: 'major' as const,
    },
    {
      id: 'home-era1-instrument-standard',
      year: '18th-19th c.',
      title: 'Instrument Standardization',
      summary: 'Calibration and precision make smaller differences meaningful.',
      href: '/eras#era1-instrument-standard',
      eraLabel: 'Earthbound Observers',
      importance: 'major' as const,
    },
    {
      id: 'home-era1-bridge',
      year: 'Late Era 1',
      title: 'Transition Threshold',
      summary: 'Earthbound limits push astronomy toward new infrastructures.',
      href: '/eras#era1-bridge',
      eraLabel: 'Earthbound Observers',
      importance: 'supporting' as const,
    },
    {
      id: 'home-era2-orbital-shift',
      year: '20th c.',
      title: 'Orbital Shift',
      summary: 'Space-based measurement gains stability and continuity.',
      href: '/eras#era2-orbital-shift',
      eraLabel: 'Cosmic Instruments',
      importance: 'major' as const,
    },
    {
      id: 'home-era2-spectrum-expansion',
      year: 'Late 20th c.',
      title: 'Spectrum Expansion',
      summary: 'New wavelengths reveal hidden cosmic processes.',
      href: '/eras#era2-spectrum-expansion',
      eraLabel: 'Cosmic Instruments',
      importance: 'major' as const,
    },
    {
      id: 'home-era2-networked-observatories',
      year: 'Contemporary',
      title: 'Networked Evidence Era',
      summary: 'Coordinated observatories redefine discovery as shared infrastructure.',
      href: '/eras#era2-networked-observatories',
      eraLabel: 'Cosmic Instruments',
      importance: 'supporting' as const,
    },
  ];

  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(timelineStops[0]?.id ?? null);

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
      <header className="space-y-2">
        <h2 id="timeline-rail-heading" className="editorial-section-title font-semibold">
          Chronology Preview
        </h2>
        <p className="eyebrow-label text-black/65">From Earthbound Proof to Cosmic Networks</p>
        <p className="text-sm text-black/75">
          Each milestone opens a focused section in the dedicated eras reading route.
        </p>
      </header>
      <ul className="timeline-rail-list" aria-label="Telescope history milestones">
        {timelineStops.map((milestone) => (
          <li
            key={milestone.id}
            className={`timeline-rail-item ${activeMilestoneId === milestone.id ? 'is-active' : ''}`}
            data-timeline-id={milestone.id}
          >
            <span className="timeline-rail-marker" aria-hidden="true" />
            <a
              href={milestone.href}
              className={`chronology-card chronology-summary-card timeline-hover-card rounded-md border border-black/10 bg-white/40 p-4 ${activeMilestoneId === milestone.id ? 'is-active' : ''}`}
              aria-label={`${milestone.title} milestone`}
            >
              <p className="chronology-meta-row text-xs uppercase tracking-[0.12em] text-black/60">
                <span>{milestone.year}</span>
                <span className="chronology-meta-divider" aria-hidden="true">
                  /
                </span>
                <span>{milestone.eraLabel}</span>
              </p>
              <h3 className="editorial-card-title text-lg font-semibold">{milestone.title}</h3>
              <p className="editorial-card-copy text-sm text-black/80">{milestone.summary}</p>
              <p className="chronology-importance text-xs uppercase tracking-[0.1em] text-black/65">
                {milestone.importance === 'major' ? 'Major Milestone' : 'Supporting Milestone'}
              </p>
              <p className="timeline-hover-preview text-sm text-black/75">Read this section in the full eras route.</p>
              <span className="timeline-expand-summary mt-1 inline-block">Read this section</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
