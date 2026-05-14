import Link from 'next/link';

import { ERA_PAGES } from '@/lib/content/era-pages-data';

export default function ErasHubPage() {
  return (
    <section className="era-exhibit era-hub">
      <div className="era-exhibit-inner">
        <header className="era-runway" aria-labelledby="eras-page-heading">
          <div className="era-runway-heading">
            <p className="eyebrow-label era-meta">Exhibitions</p>
            <h1 id="eras-page-heading" className="editorial-display font-semibold leading-[1.1]">
              Two ways astronomy learned to prove the sky
            </h1>
            <p className="editorial-lead era-meta">
              Choose a focused exhibition. Start with Earthbound Observers for the evidence culture that made telescope claims credible,
              then continue to Cosmic Instruments for orbital, spectral, and networked observation.
            </p>
          </div>

          <div className="era-anchor-grid" aria-label="Era exhibition options">
            {ERA_PAGES.map((era) => (
              <article key={era.id} className="era-wide-card era-hub-card">
                <p className="era-note-label">{era.eyebrow}</p>
                <h2 className="text-2xl font-semibold leading-tight">{era.title}</h2>
                <p className="era-body text-sm leading-6">{era.summary}</p>
                <p className="eyebrow-label era-meta">Estimated reading time: {era.readingTime}</p>
                <Link className="era-button era-button--primary" href={era.route}>
                  Open exhibit
                </Link>
              </article>
            ))}
          </div>
        </header>

        <section className="era-wide-callout" aria-labelledby="recommended-path-heading">
          <p className="era-note-label">Recommended Path</p>
          <h2 id="recommended-path-heading" className="editorial-section-title font-semibold">
            Read Era 1, continue into Era 2, then move into Constellations.
          </h2>
          <p className="era-body era-measure text-[15px] leading-7">
            The exhibitions now behave like separate exhibit rooms. Each page stands alone, but the end buttons preserve the intended museum path.
          </p>
        </section>
      </div>
    </section>
  );
}
