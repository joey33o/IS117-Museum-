import { EraEndNav } from '@/components/content/eras/era-end-nav';
import { EraExhibitCard } from '@/components/content/eras/era-exhibit-card';
import {
  CuratorNote,
  DebateCard,
  MilestoneRibbon,
  PullQuote,
  SectionAnchor,
} from '@/components/content/eras/era-page-elements';
import { EraRunway } from '@/components/content/eras/era-runway';
import { cosmicEra } from '@/lib/content/era-pages-data';
import { timelineDataset } from '@/lib/content/timeline-data';

const keyMissions = timelineDataset.milestones
  .filter((milestone) => milestone.year >= 1990)
  .sort((left, right) => left.year - right.year)
  .slice(0, 5);

export default function CosmicInstrumentsPage() {
  return (
    <article id="cosmic-instruments" className="era-exhibit era-exhibit--cosmic">
      <div className="era-exhibit-inner">
        <EraRunway content={cosmicEra} />

        <section className="era-core-grid" aria-label="Cosmic Instruments core narrative">
          <SectionAnchor id="era2-framing" title="Curatorial Framing">
            <p>
              Cosmic Instruments marks a structural transformation in how astronomy produces truth. Observation no longer depends on a single site
              or wavelength. Instead, it becomes a coordinated infrastructure of orbital telescopes, terrestrial arrays, and data systems that combine
              many forms of evidence. This era is less about one device changing everything and more about interoperability across instruments.
            </p>
            <p>
              The curatorial thesis is straightforward: when telescopes moved beyond atmospheric limits and beyond visible-light dependence,
              the universe became both broader and more precise. New spectra exposed phenomena that earlier observers could not detect,
              while linked observatories increased temporal and spatial continuity. Astronomy became a networked reading practice.
            </p>
            <PullQuote>"The modern shift is not one telescope replacing another, but many instruments becoming one evidence system."</PullQuote>
          </SectionAnchor>

          <aside className="era-wide-card era-key-insight" aria-label="Key insight">
            <p className="era-note-label">Key Insight</p>
            <h2 className="text-2xl font-semibold leading-tight">Modern astronomy is an evidence system, not a single heroic instrument.</h2>
            <p className="era-body text-sm leading-6">
              Orbit, spectrum, timing, calibration, and shared data standards all become part of the instrument.
            </p>
          </aside>
        </section>

        <SectionAnchor id="era2-orbital-shift" title="Orbital Shift">
          <MilestoneRibbon
            year="20th c."
            title="Orbital Observation Infrastructure"
            impact="Measurements gained stability by escaping atmospheric interference."
          />
          <p>
            Launching telescopes into orbit answered a long-standing Earthbound problem: atmospheric distortion and absorption.
            In space, instruments avoid much of the blur and filtering that complicate ground observation, enabling cleaner signals
            and longer uninterrupted sessions. The change is not simply visual sharpness. It is methodological stability across time,
            especially for faint and distant targets.
          </p>
          <p>
            Orbital systems also changed institutional collaboration. Mission planning required coordination among engineers, scientists,
            agencies, and international partners long before a telescope produced its first image. This expanded telescope history from
            optical craft into mission architecture. The museum story should therefore include operations, maintenance windows, and calibration cycles,
            not only iconic output images.
          </p>
          <CuratorNote>
            The key curatorial point is operational: orbital success depends as much on calibration and coordination as on launch itself.
          </CuratorNote>
        </SectionAnchor>

        <SectionAnchor id="era2-spectrum-expansion" title="Spectrum Expansion">
          <div className="era-spectrum-grid" role="list" aria-label="Spectrum key">
            <article className="era-surface p-3" role="listitem">
              <p className="era-meta text-xs uppercase tracking-[0.12em]">Infrared</p>
              <p className="era-body mt-1 text-sm">Reveals thermal structure and dust-obscured regions invisible to optical telescopes.</p>
            </article>
            <article className="era-surface p-3" role="listitem">
              <p className="era-meta text-xs uppercase tracking-[0.12em]">X-ray</p>
              <p className="era-body mt-1 text-sm">Maps high-energy events and extreme environments around compact objects.</p>
            </article>
            <article className="era-surface p-3" role="listitem">
              <p className="era-meta text-xs uppercase tracking-[0.12em]">Radio</p>
              <p className="era-body mt-1 text-sm">Tracks large-scale structures and emissions not detectable in visible wavelengths.</p>
            </article>
          </div>
          <p>
            One of the defining achievements of this era is the move beyond visible light into infrared, X-ray, radio, and other bands.
            Each spectrum reveals different physical processes: thermal structures, high-energy events, magnetic interactions,
            and signatures of material otherwise hidden to the human eye. Together, these bands produce a layered account of cosmic phenomena.
          </p>
          <p>
            Spectrum expansion also introduces interpretive complexity. Data is often translated into color mappings that support analysis,
            which can create tension between scientific convention and public expectation. A strong curatorial approach explains that images are
            not deceptive but interpretive instruments themselves, designed to make non-visible information legible.
            This is where museum education and scientific literacy intersect most clearly.
          </p>
        </SectionAnchor>

        <section className="era-card-row" aria-labelledby="era2-instruments-heading">
          <div className="era-section-heading">
            <p className="era-note-label">Instrument Stack</p>
            <h2 id="era2-instruments-heading" className="editorial-section-title font-semibold">
              Landmark Instruments
            </h2>
          </div>
          <div className="era-feature-grid">
            {cosmicEra.featureCards.map((instrument) => (
              <EraExhibitCard key={instrument.title} {...instrument} />
            ))}
          </div>
        </section>

        <SectionAnchor id="era2-networked-observatories" title="Networked Observatories">
          <p>
            Modern astronomy increasingly relies on networked observatories that coordinate observations across continents and platforms.
            Interferometry, synchronized scheduling, and shared protocols allow multiple telescopes to behave as a single larger instrument.
            This networked model improves coverage, triangulation, and confidence, especially for transient events or complex targets.
          </p>
          <p>
            The cultural implication is significant: no single institution can fully claim ownership of contemporary cosmic evidence.
            Discovery now depends on interoperability, open standards, and collaborative interpretation pipelines.
            Curatorially, this reframes progress as collective capacity rather than isolated genius.
          </p>
          <DebateCard
            title="Prestige Instrument vs Networked Evidence"
            claim="Breakthrough authority should remain tied to singular iconic instruments."
            response="Coordinated arrays and shared data standards now produce the most reliable and reproducible findings."
          />
        </SectionAnchor>

        <section id="era2-landmark-missions" className="era-card-stack section-anchor-target" aria-labelledby="era2-landmark-missions-heading">
          <div className="era-section-heading">
            <p className="era-note-label">Landmark Missions</p>
            <h2 id="era2-landmark-missions-heading" className="editorial-section-title font-semibold">
              Landmark Missions and Outcomes
            </h2>
            <p className="era-body era-measure text-[15px] leading-7">
              The following milestones illustrate how mission diversity expanded both method and meaning in this era.
            </p>
          </div>
          <ul className="era-mission-list">
            {keyMissions.map((mission, index) => (
              <li key={mission.id} className={`era-accent-card p-3 ${index % 3 === 2 ? 'era-mission-emphasis' : ''}`}>
                <p className="era-meta text-xs uppercase tracking-[0.12em]">{mission.year}</p>
                <p className="text-base font-semibold">{mission.title}</p>
                <p className="era-body text-sm">{mission.summary}</p>
                <p className="era-meta mt-1 text-xs">What changed: {mission.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <SectionAnchor id="era2-open-questions" title="Open Questions and Future Threshold">
          <p>
            Despite major advances, this era is defined as much by unresolved questions as by solved ones. How should evidence from different
            spectra be weighted when interpretations conflict? How can long-term observatory collaborations remain sustainable under changing
            political and funding contexts? Which unknowns require entirely new instrument classes rather than better versions of existing ones?
          </p>
          <p>
            The future threshold likely depends on maintaining three linked commitments: precision in measurement, transparency in data pipelines,
            and collaboration at planetary scale. These themes connect directly back to Era 1. The difference is magnitude. What began as a local
            struggle over reliable seeing has become a global system for coordinated interpretation of the cosmos.
          </p>
          <section className="era-question-panel" aria-label="Future questions">
            <h3 className="text-base font-semibold">Questions Guiding the Next Era</h3>
            <ul className="mt-2 space-y-1">
              <li className="era-body text-sm">How should cross-spectrum evidence be weighted when interpretations conflict?</li>
              <li className="era-body text-sm">Which observatory collaborations remain sustainable over multi-decade timescales?</li>
              <li className="era-body text-sm">What observations require new instrument classes rather than incremental upgrades?</li>
            </ul>
          </section>
        </SectionAnchor>

        <EraEndNav
          primaryHref="/constellations"
          primaryLabel="Explore Constellations"
          secondaryHref="/eras/earthbound-observers"
          secondaryLabel="Back to Earthbound Observers"
        />
      </div>
    </article>
  );
}
