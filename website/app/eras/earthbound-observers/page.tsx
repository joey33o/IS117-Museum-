import { EraEndNav } from '@/components/content/eras/era-end-nav';
import { EraExhibitCard } from '@/components/content/eras/era-exhibit-card';
import {
  CuratorNote,
  DebateCard,
  MilestoneRibbon,
  ObjectLabel,
  PullQuote,
  SectionAnchor,
} from '@/components/content/eras/era-page-elements';
import { EraRunway } from '@/components/content/eras/era-runway';
import { earthboundEra } from '@/lib/content/era-pages-data';

export default function EarthboundObserversPage() {
  return (
    <article id="earthbound-observers" className="era-exhibit era-exhibit--earthbound">
      <div className="era-exhibit-inner">
        <EraRunway content={earthboundEra} />

        <section className="era-core-grid" aria-label="Earthbound Observers core narrative">
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

          <aside className="era-wide-card era-key-insight" aria-label="Key insight">
            <p className="era-note-label">Key Insight</p>
            <h2 className="text-2xl font-semibold leading-tight">A telescope did not end debate. It changed what counted as evidence.</h2>
            <p className="era-body text-sm leading-6">
              The important shift is from authority to evidence plus method: seeing, recording, checking, and making disagreement legible.
            </p>
          </aside>
        </section>

        <SectionAnchor id="era1-first-lenses" title="First Lenses and Proof">
          <div className="era-split-composition">
            <PullQuote>"A telescope did not end debate. It changed debate from authority to evidence plus method."</PullQuote>
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

        <section id="era1-people" className="era-card-row section-anchor-target" aria-labelledby="era1-people-heading">
          <div className="era-section-heading">
            <p className="era-note-label">Key Figures</p>
            <h2 id="era1-people-heading" className="editorial-section-title font-semibold">
              People and Institutions
            </h2>
          </div>
          <div className="era-feature-grid">
            {earthboundEra.featureCards.map((figure) => (
              <EraExhibitCard key={figure.title} {...figure} />
            ))}
          </div>
          <p className="era-body era-measure text-[15px] leading-7">
            Telescope history is not only a sequence of devices; it is a sequence of decisions about whose observations are trusted,
            archived, and taught. A strong museum account acknowledges both celebrated figures and the collaborative, often invisible,
            networks that made sustained observation possible.
          </p>
        </section>

        <SectionAnchor id="era1-observatory-culture" title="Observatory Culture">
          <figure className="era-inline-image-frame">
            <img
              src={earthboundEra.featureCards[2].imageSrc}
              alt={earthboundEra.featureCards[2].imageAlt}
              className="era-inline-image"
            />
          </figure>
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
              <figure className="era-inline-image-frame">
                <img
                  src={earthboundEra.featureCards[3].imageSrc}
                  alt={earthboundEra.featureCards[3].imageAlt}
                  className="era-inline-image"
                />
              </figure>
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

        <EraEndNav
          primaryHref="/eras/cosmic-instruments"
          primaryLabel="Continue to Cosmic Instruments"
          secondaryHref="/eras"
          secondaryLabel="Back to Era hub"
        />
      </div>
    </article>
  );
}
