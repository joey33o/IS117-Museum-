import type { EraFeatureCard } from '@/lib/content/era-pages-data';

export function EraExhibitCard({ title, kicker, description, imageSrc, imageAlt }: EraFeatureCard) {
  return (
    <article className="era-wide-card era-exhibit-card">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt ?? ''} className="era-exhibit-card-image" />
      ) : null}
      <div className="era-exhibit-card-copy">
        <p className="era-note-label">{kicker}</p>
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <p className="era-body text-sm leading-6">{description}</p>
      </div>
    </article>
  );
}
