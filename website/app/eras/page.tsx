import { timelineDataset } from '@/lib/content/timeline-data';

const eraOneSections = [
  { id: 'era1-framing', label: 'Curatorial Framing' },
  { id: 'era1-first-lenses', label: 'First Lenses and Proof' },
  { id: 'era1-observatory-culture', label: 'Observatory Culture' },
  { id: 'era1-instrument-standard', label: 'Instrument Standards' },
  { id: 'era1-people', label: 'People and Institutions' },
  { id: 'era1-bridge', label: 'Bridge to Era 2' },
];

const eraTwoSections = [
  { id: 'era2-framing', label: 'Curatorial Framing' },
  { id: 'era2-orbital-shift', label: 'Orbital Shift' },
  { id: 'era2-spectrum-expansion', label: 'Spectrum Expansion' },
  { id: 'era2-networked-observatories', label: 'Networked Observatories' },
  { id: 'era2-landmark-missions', label: 'Landmark Missions' },
  { id: 'era2-open-questions', label: 'Open Questions' },
];

const keyMissions = timelineDataset.milestones
  .filter((milestone) => milestone.year >= 1990)
  .sort((left, right) => left.year - right.year)
  .slice(0, 5);

const eraOneFigures = [
  {
    name: 'Galileo Galilei',
    role: 'Popularized telescopic evidence in planetary observation and public scientific argument.',
  },
  {
    name: 'Thomas Harriot',
    role: 'Produced early telescopic lunar drawings that reinforced the evidentiary value of recorded observation.',
  },
  {
    name: 'Christiaan Huygens',
    role: 'Improved optical practice and shaped instrument-centered methods in early modern astronomy.',
  },
  {
    name: 'Giovanni Cassini',
    role: 'Expanded observatory routines that linked recurring measurements to institutional astronomy.',
  },
];

function SectionAnchor({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-anchor-target space-y-3 scroll-mt-28" aria-labelledby={`${id}-heading`}>
      <h3 id={`${id}-heading`} className="text-xl font-semibold leading-tight md:text-2xl">
        {title}
      </h3>
      <div className="era-body space-y-3 text-[15px] leading-7">{children}</div>
    </section>
  );
}

function CuratorNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="era-note" aria-label="Curator note">
      <p className="era-note-label">Curator Note</p>
      <p className="era-body text-sm leading-7">{children}</p>
    </aside>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="era-pull-quote era-breakout">{children}</blockquote>;
}

function DebateCard({ title, claim, response }: { title: string; claim: string; response: string }) {
  return (
    <article className="era-debate-card era-breakout" aria-label={title}>
      <p className="era-note-label">Debate at the Time</p>
      <h4 className="text-base font-semibold">{title}</h4>
      <div className="era-debate-grid">
        <section>
          <p className="era-meta text-xs uppercase tracking-[0.12em]">Claim</p>
          <p className="era-body mt-1 text-sm leading-6">{claim}</p>
        </section>
        <section>
          <p className="era-meta text-xs uppercase tracking-[0.12em]">Evidence Response</p>
          <p className="era-body mt-1 text-sm leading-6">{response}</p>
        </section>
      </div>
    </article>
  );
}

function MilestoneRibbon({ year, title, impact }: { year: string; title: string; impact: string }) {
  return (
    <div className="era-milestone-ribbon era-breakout" role="note" aria-label="Milestone ribbon">
      <span className="era-meta text-xs uppercase tracking-[0.12em]">{year}</span>
      <span className="text-sm font-semibold">{title}</span>
      <span className="era-body text-sm">{impact}</span>
    </div>
  );
}

function ObjectLabel({ title, details }: { title: string; details: string }) {
  return (
    <aside className="era-object-label" aria-label="Object label">
      <p className="era-note-label">Object Label</p>
      <h4 className="text-base font-semibold leading-tight">{title}</h4>
      <p className="era-body mt-1 text-sm leading-6">{details}</p>
    </aside>
  );
}

export default function ErasPage() {
  return (
    <section className="space-y-12">
      <header className="responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8" aria-labelledby="eras-page-heading">
        <div className="space-y-3 md:col-span-12">
          <p className="eyebrow-label era-meta">Dedicated Reading Route</p>
          <h1 id="eras-page-heading" className="editorial-display font-semibold leading-[1.1]">
            Earthbound Observers to Cosmic Instruments
          </h1>
        </div>

        <div className="space-y-3 md:col-span-3">
          <p className="responsive-lead era-meta text-sm">
            Two connected chapters designed for sustained reading. Each era offers a five-to-ten-minute narrative with optional deeper context.
          </p>
          <aside className="era-surface p-3" aria-label="Page signals">
            <p className="era-note-label">Page Signals</p>
            <ul className="mt-2 space-y-1">
              <li className="era-body text-sm">Era 1: method, evidence, observatory discipline</li>
              <li className="era-body text-sm">Era 2: orbital systems, spectra, networked interpretation</li>
              <li className="era-body text-sm">Transition begins at the end of Era 1</li>
            </ul>
          </aside>
        </div>

        <div className="space-y-4 md:col-span-9 md:col-start-4">
          <article className="reading-bridge">
            <h2 className="reading-bridge-heading">How to Use This Page</h2>
            <p className="reading-bridge-copy">
              Read each era in sequence for full continuity, or jump from Home cards into specific sections using anchors.
              The page preserves a single narrative arc while supporting targeted entry points.
            </p>
          </article>
        </div>
      </header>

      <section id="earthbound-observers" className="section-anchor-target responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8" aria-labelledby="earthbound-observers-heading">
        <aside className="era-sidebar space-y-3 md:col-span-3">
          <h2 id="earthbound-observers-heading" className="editorial-section-title font-semibold">
            Era 1: Earthbound Observers
          </h2>
          <p className="era-meta text-sm">Estimated reading time: 6-9 minutes</p>
          <nav aria-label="Era 1 section table of contents" className="era-surface p-4">
            <p className="era-meta text-xs uppercase tracking-[0.12em]">Era 1 Contents</p>
            <ul className="mt-2 grid gap-2">
              {eraOneSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="era-link text-sm underline-offset-4 hover:underline focus-visible:underline">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <aside className="era-surface p-3" aria-label="Era 1 section signals">
            <p className="era-note-label">Section Signals</p>
            <p className="era-body mt-1 text-sm">Watch the shift from seeing more to proving more through repeatable method.</p>
          </aside>
          <aside className="era-surface p-3" aria-label="Era 1 object focus">
            <p className="era-note-label">Object Focus</p>
            <p className="text-sm font-semibold">Precision Refractor Assemblies</p>
            <p className="era-body mt-1 text-sm">Incremental lens and mount improvements made smaller differences scientifically meaningful.</p>
          </aside>
        </aside>
        <div className="era-reading-lane space-y-8 md:col-span-9 md:col-start-4">
          <SectionAnchor id="era1-framing" title="Curatorial Framing">
            <p>
              Earthbound observing did not begin as a triumph of machines alone. It began as a struggle over trust, method, and public proof.
              Early telescopes introduced a provocative possibility: one instrument held by one observer could challenge inherited models of the universe.
              Yet the true historical shift came when observation became repeatable. What mattered was no longer simply seeing something first,
              but demonstrating that others could see it too under comparable conditions.
            </p>
            <p>
              In this era, telescope history is also the history of evidence culture. Lens quality, field conditions, sketching conventions,
              and records of time and weather all became part of the argument. The sky remained distant, but method brought it closer.
              Astronomy moved from occasional marvels to disciplined comparison, and from singular claims to accountable documentation.
            </p>
            <CuratorNote>
              What changed here was not only what people saw, but what they could prove together. Era 1 should be read as a transition from
              personal witness to repeatable method.
            </CuratorNote>
          </SectionAnchor>

          <SectionAnchor id="era1-first-lenses" title="First Lenses and Proof">
            <div className="era-split-composition">
              <PullQuote>
                "A telescope did not end debate. It changed debate from authority to evidence plus method."
              </PullQuote>
              <div className="space-y-3">
                <p>
                  The first wave of telescopic observation transformed astronomy because it produced visible contradictions to accepted cosmology.
                  Lunar surface detail, planetary phases, and newly visible stars undermined the assumption of perfectly immutable heavens.
                  These were not abstract philosophical challenges; they were concrete visual findings that could be redrawn, rechecked, and disputed
                  in front of peers.
                </p>
                <p>
                  Still, proof remained fragile. Early optics introduced distortion, limited fields, and varying brightness. Observers had to decide
                  when a detail was celestial and when it was a fault of the lens or eye. That tension between discovery and artifact remains central
                  to curatorial interpretation.
                </p>
              </div>
            </div>
            <DebateCard
              title="Could one instrument overturn inherited cosmology?"
              claim="Early telescopic findings were treated by critics as optical tricks, artifacts, or overreach by individual observers."
              response="Repeated drawings, corroborated observations, and instrument-aware recording standards shifted disputes toward evidence quality."
            />
          </SectionAnchor>

          <SectionAnchor id="era1-observatory-culture" title="Observatory Culture">
            <p>
              Observatory culture turned isolated observation into an organized knowledge system. Once institutions prioritized recurring measurement,
              logs became as important as telescopes themselves. Dates, angles, environmental conditions, and comparative notes converted individual
              sightings into collective records. Over years, these records enabled patterns and anomalies to stand out with greater reliability.
            </p>
            <MilestoneRibbon
              year="17th-18th c."
              title="Routine Observatory Logs"
              impact="Recurring records converted episodic sightings into cumulative evidence."
            />
            <p>
              This discipline also introduced hierarchy and standardization. Apprentices and assistants were trained to record in consistent formats;
              instruments were maintained to comparable baselines; and observational routines were scheduled around celestial cycles.
              As a result, astronomy became less dependent on exceptional individuals and more dependent on stable practice.
              Curatorially, this is the point where the museum narrative shifts from heroic inventors to systems of labor and documentation.
            </p>
            <p>
              Not all observers agreed on interpretation, and institutional pressures often shaped what was emphasized or dismissed.
              Even so, observatory practice improved confidence by making disagreement legible. Conflicts could now be debated through records,
              not only through reputation.
            </p>
          </SectionAnchor>

          <SectionAnchor id="era1-instrument-standard" title="Instrument Standards">
            <div className="era-split-composition">
              <ObjectLabel
                title="Precision Refractor Assemblies"
                details="Incremental improvements in lens grinding, mount stability, and calibration practice turned small optical differences into usable scientific evidence."
              />
              <div className="space-y-3">
                <p>
                  Precision in this era emerged through gradual standardization: better lens grinding, more stable mounts, improved tracking,
                  and calibration routines that made one night comparable to another. Standardization was not glamorous, but it was transformative.
                  It allowed smaller differences in light and position to carry scientific meaning.
                </p>
                <p>
                  Standardization also made limits visible. Atmospheric turbulence, humidity, light pollution, and mechanical vibration imposed ceilings
                  on what Earth-based optics could deliver at the time. Curators should frame these limits as productive constraints.
                  They did not represent failure; they generated the next question: if atmosphere and geography restrict certainty, where must the next
                  instruments operate?
                </p>
              </div>
            </div>
            <p>
              By the close of Era 1, astronomy had become an instrument-dependent science with disciplined evidence standards, yet it remained bound
              by Earth itself. This contradiction sets the transition to the next chapter.
            </p>
          </SectionAnchor>

          <SectionAnchor id="era1-people" title="People and Institutions">
            <p>
              Figures such as Galileo Galilei and Thomas Harriot are often cited as icons of early telescopic seeing, but their legacy is best read
              in relation to wider institutional structures. Universities, patronage systems, academies, and later state-supported observatories
              determined what instruments could be built, which observations were funded, and how results circulated.
            </p>
            <ul className="era-profile-grid" aria-label="Era 1 figure highlights">
              {eraOneFigures.map((figure) => (
                <li key={figure.name} className="era-surface p-3">
                  <h4 className="text-base font-semibold">{figure.name}</h4>
                  <p className="era-body mt-1 text-sm leading-6">{figure.role}</p>
                </li>
              ))}
            </ul>
            <p>
              This social context matters for interpretation. Telescope history is not only a sequence of devices; it is a sequence of decisions about
              whose observations are trusted, archived, and taught. A strong museum account acknowledges both celebrated figures and the collaborative,
              often invisible, networks that made sustained observation possible.
            </p>
          </SectionAnchor>

          <SectionAnchor id="era1-bridge" title="Bridge to Era 2">
            <div className="era-transition-panel">
              <p>
                Era 1 leaves us with a mature evidence culture and increasingly precise tools, but with persistent terrestrial limits.
                Atmosphere blurs incoming light. Local weather interrupts continuity. Geographic placement limits shared visibility.
                The logical response was not merely stronger ground instruments; it was a rethinking of where instruments should be placed,
                what wavelengths they should detect, and how many observatories should work together.
              </p>
              <p>
                That transition leads directly to Cosmic Instruments, where astronomy expands from Earthbound proof into distributed,
                multi-spectral infrastructure.
              </p>
            </div>
          </SectionAnchor>
        </div>
      </section>

      <section id="cosmic-instruments" className="section-anchor-target responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8" aria-labelledby="cosmic-instruments-heading">
        <aside className="era-sidebar space-y-3 md:col-span-3">
          <h2 id="cosmic-instruments-heading" className="editorial-section-title font-semibold">
            Era 2: Cosmic Instruments
          </h2>
          <p className="era-meta text-sm">Estimated reading time: 6-9 minutes</p>
          <nav aria-label="Era 2 section table of contents" className="era-surface p-4">
            <p className="era-meta text-xs uppercase tracking-[0.12em]">Era 2 Contents</p>
            <ul className="mt-2 grid gap-2">
              {eraTwoSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="era-link text-sm underline-offset-4 hover:underline focus-visible:underline">
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <aside className="era-surface p-3" aria-label="Era 2 section signals">
            <p className="era-note-label">Section Signals</p>
            <p className="era-body mt-1 text-sm">Follow how one observatory era becomes a coordinated network of evidence systems.</p>
          </aside>
          <aside className="era-surface p-3" aria-label="Era 2 object focus">
            <p className="era-note-label">Object Focus</p>
            <p className="text-sm font-semibold">Multi-Spectral Mission Stack</p>
            <p className="era-body mt-1 text-sm">Infrared, X-ray, and radio layers made hidden processes legible across one shared cosmos.</p>
          </aside>
        </aside>
        <div className="era-reading-lane space-y-8 md:col-span-9 md:col-start-4">
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
            <PullQuote>
              "The modern shift is not one telescope replacing another, but many instruments becoming one evidence system."
            </PullQuote>
          </SectionAnchor>

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

          <SectionAnchor id="era2-landmark-missions" title="Landmark Missions and Outcomes">
            <p>
              The following milestones illustrate how mission diversity expanded both method and meaning in this era:
            </p>
            <ul className="space-y-2">
              {keyMissions.map((mission, index) => (
                <li key={mission.id} className={`era-accent-card p-3 ${index % 3 === 2 ? 'era-mission-emphasis' : ''}`}>
                  <p className="era-meta text-xs uppercase tracking-[0.12em]">{mission.year}</p>
                  <p className="text-base font-semibold">{mission.title}</p>
                  <p className="era-body text-sm">{mission.summary}</p>
                  <p className="era-meta mt-1 text-xs">What changed: {mission.details}</p>
                </li>
              ))}
            </ul>
          </SectionAnchor>

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
              <h4 className="text-base font-semibold">Questions Guiding the Next Era</h4>
              <ul className="mt-2 space-y-1">
                <li className="era-body text-sm">How should cross-spectrum evidence be weighted when interpretations conflict?</li>
                <li className="era-body text-sm">Which observatory collaborations remain sustainable over multi-decade timescales?</li>
                <li className="era-body text-sm">What observations require new instrument classes rather than incremental upgrades?</li>
              </ul>
            </section>
          </SectionAnchor>
        </div>
      </section>
    </section>
  );
}
