import Link from 'next/link';

export function EraEndNav({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <nav className="era-end-nav" aria-label="Era navigation">
      <Link className="era-button era-button--primary" href={primaryHref}>
        {primaryLabel}
      </Link>
      <Link className="era-button era-button--secondary" href={secondaryHref}>
        {secondaryLabel}
      </Link>
    </nav>
  );
}
