import Link from 'next/link';

import type { EraPageContent } from '@/lib/content/era-pages-data';

export function EraRunway({ content }: { content: EraPageContent }) {
  return (
    <header className="era-runway" aria-labelledby={`${content.id}-heading`}>
      <div className="era-runway-heading">
        <p className="eyebrow-label era-meta">{content.eyebrow}</p>
        <h1 id={`${content.id}-heading`} className="editorial-display font-semibold leading-[1.1]">
          {content.title}
        </h1>
        <p className="editorial-lead era-meta">{content.summary}</p>
        <p className="eyebrow-label era-meta">Estimated reading time: {content.readingTime}</p>
      </div>

      <figure className="era-hero-image-frame">
        <img src={content.heroImageSrc} alt={content.heroImageAlt} className="era-hero-image" />
      </figure>

      <nav className="era-anchor-grid" aria-label={`${content.title} exhibit sections`}>
        {content.anchorCards.map((card) => (
          <Link key={card.href} href={card.href} className="era-wide-card era-anchor-card">
            <p className="era-note-label">{card.label}</p>
            <h2 className="text-xl font-semibold leading-tight">{card.title}</h2>
            <p className="era-body text-sm leading-6">{card.description}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}
