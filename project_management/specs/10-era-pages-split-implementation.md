# 10 - Era Pages Split Implementation Notes

This document maps the code changes needed to split the existing combined `/eras` page into separate Era 1 and Era 2 pages with updated navigation, buttons, and wide editorial layout.

## 1. Target File Changes
### Add
- `website/app/eras/earthbound-observers/page.tsx`
- `website/app/eras/cosmic-instruments/page.tsx`
- `website/components/content/eras/era-exhibit-card.tsx`
- `website/components/content/eras/era-end-nav.tsx`
- `website/components/content/eras/era-runway.tsx`
- `website/lib/content/era-pages-data.ts`

### Change
- `website/app/eras/page.tsx`
- `website/app/page.tsx`
- `website/components/content/home/timeline-rail.tsx`
- `website/components/site/adaptive-nav.tsx`
- `website/components/site/transition-trigger.tsx`
- `website/app/globals.css`

## 2. Route Plan
Use the App Router folder structure:

```text
website/app/eras/
+-- page.tsx
+-- earthbound-observers/
|   +-- page.tsx
+-- cosmic-instruments/
    +-- page.tsx
```

The existing `website/app/eras/page.tsx` should become a hub page. The current Era 1 and Era 2 article content should move into the two child routes.

## 3. Data Model
Create `website/lib/content/era-pages-data.ts` so page content and route links are easier to maintain.

Recommended shape:

```ts
export type EraRoute = '/eras/earthbound-observers' | '/eras/cosmic-instruments';

export type EraAnchorCard = {
  title: string;
  label: string;
  description: string;
};

export type EraFeatureCard = {
  title: string;
  kicker: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type EraPageContent = {
  id: 'earthbound-observers' | 'cosmic-instruments';
  route: EraRoute;
  eyebrow: string;
  title: string;
  summary: string;
  readingTime: string;
  anchorCards: EraAnchorCard[];
  featureCards: EraFeatureCard[];
};
```

Start by moving existing copy into this file. Image fields can be optional until archival assets are selected.

## 4. Hub Page
Replace the current full article in `website/app/eras/page.tsx` with a lightweight chooser.

Expected structure:

```tsx
import Link from 'next/link';
import { ERA_PAGES } from '@/lib/content/era-pages-data';

export default function ErasHubPage() {
  return (
    <section className="era-hub responsive-section-grid grid gap-6 md:grid-cols-12 md:gap-8">
      <header className="md:col-span-7">
        <p className="eyebrow-label era-meta">Reading Routes</p>
        <h1 className="editorial-display font-semibold leading-[1.1]">
          Two ways astronomy learned to prove the sky
        </h1>
      </header>

      <div className="era-hub-card-grid md:col-span-12">
        {ERA_PAGES.map((era) => (
          <article key={era.id} className="era-wide-card">
            <p className="eyebrow-label">{era.eyebrow}</p>
            <h2>{era.title}</h2>
            <p>{era.summary}</p>
            <Link className="era-button" href={era.route}>
              Open exhibit
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
```

## 5. Era 1 Page
Create `website/app/eras/earthbound-observers/page.tsx`.

Required IDs to preserve deep links:
- `earthbound-observers`
- `era1-framing`
- `era1-first-lenses`
- `era1-observatory-culture`
- `era1-instrument-standard`
- `era1-people`
- `era1-bridge`

Recommended page structure:

```tsx
import { EraRunway } from '@/components/content/eras/era-runway';
import { EraEndNav } from '@/components/content/eras/era-end-nav';
import { earthboundEra } from '@/lib/content/era-pages-data';

export default function EarthboundObserversPage() {
  return (
    <article id="earthbound-observers" className="era-exhibit era-exhibit--earthbound">
      <EraRunway content={earthboundEra} />

      <section id="era1-framing" className="era-wide-section">
        {/* existing Curatorial Framing copy */}
      </section>

      <section id="era1-first-lenses" className="era-wide-section">
        {/* existing First Lenses and Proof copy */}
      </section>

      <section id="era1-observatory-culture" className="era-wide-section">
        {/* existing Observatory Culture copy */}
      </section>

      <section id="era1-instrument-standard" className="era-wide-section">
        {/* existing Instrument Standards copy */}
      </section>

      <section id="era1-people" className="era-card-row">
        {/* large figure cards */}
      </section>

      <section id="era1-bridge" className="era-wide-callout">
        {/* existing Bridge to Era 2 copy */}
      </section>

      <EraEndNav
        primaryHref="/eras/cosmic-instruments"
        primaryLabel="Continue to Cosmic Instruments"
        secondaryHref="/eras"
        secondaryLabel="Back to Era hub"
      />
    </article>
  );
}
```

## 6. Era 2 Page
Create `website/app/eras/cosmic-instruments/page.tsx`.

Required IDs to preserve deep links:
- `cosmic-instruments`
- `era2-framing`
- `era2-orbital-shift`
- `era2-spectrum-expansion`
- `era2-networked-observatories`
- `era2-landmark-missions`
- `era2-open-questions`

Recommended page structure:

```tsx
import { EraRunway } from '@/components/content/eras/era-runway';
import { EraEndNav } from '@/components/content/eras/era-end-nav';
import { cosmicEra } from '@/lib/content/era-pages-data';

export default function CosmicInstrumentsPage() {
  return (
    <article id="cosmic-instruments" className="era-exhibit era-exhibit--cosmic">
      <EraRunway content={cosmicEra} />

      <section id="era2-framing" className="era-wide-section">
        {/* existing Curatorial Framing copy */}
      </section>

      <section id="era2-orbital-shift" className="era-wide-section">
        {/* existing Orbital Shift copy */}
      </section>

      <section id="era2-spectrum-expansion" className="era-wide-section">
        {/* existing Spectrum Expansion copy */}
      </section>

      <section id="era2-networked-observatories" className="era-wide-section">
        {/* existing Networked Observatories copy */}
      </section>

      <section id="era2-landmark-missions" className="era-card-stack">
        {/* existing keyMissions content */}
      </section>

      <section id="era2-open-questions" className="era-wide-callout">
        {/* existing open questions copy */}
      </section>

      <EraEndNav
        primaryHref="/constellations"
        primaryLabel="Explore Constellations"
        secondaryHref="/eras/earthbound-observers"
        secondaryLabel="Back to Earthbound Observers"
      />
    </article>
  );
}
```

## 7. Shared Components
### `EraRunway`
Purpose: render the page title and three horizontal anchor cards.

Props:

```ts
type EraRunwayProps = {
  content: EraPageContent;
};
```

Behavior:
- Desktop: three cards in one row.
- Mobile: cards stack.
- Cards are links when they correspond to internal section IDs.

### `EraExhibitCard`
Purpose: render large figure/object/mission cards.

Props:

```ts
type EraExhibitCardProps = {
  title: string;
  kicker: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};
```

Behavior:
- If `imageSrc` exists, show a large image region above the text.
- If no image exists yet, render a strong text-only card without an empty image box.

### `EraEndNav`
Purpose: consistent end-of-page page-to-page navigation.

Example:

```tsx
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
```

## 8. Link Updates
### `website/components/site/adaptive-nav.tsx`
Change:

```ts
{ href: '/eras#earthbound-observers', label: 'Earthbound Observers' },
{ href: '/eras#cosmic-instruments', label: 'Cosmic Instruments' },
{ href: '/eras#era2-open-questions', label: 'Future Questions' },
```

To:

```ts
{ href: '/eras/earthbound-observers', label: 'Earthbound Observers' },
{ href: '/eras/cosmic-instruments', label: 'Cosmic Instruments' },
{ href: '/eras/cosmic-instruments#era2-open-questions', label: 'Future Questions' },
```

### `website/app/page.tsx`
Update milestone card links:

```ts
'/eras#era1-first-lenses'
'/eras#era2-orbital-shift'
```

To:

```ts
'/eras/earthbound-observers#era1-first-lenses'
'/eras/cosmic-instruments#era2-orbital-shift'
```

Also update the main "Start the reading route" link from:

```tsx
<Link href="/eras#era1-framing">
```

To:

```tsx
<Link href="/eras/earthbound-observers#era1-framing">
```

### `website/components/content/home/timeline-rail.tsx`
Update all `href` values:

Era 1:

```ts
'/eras/earthbound-observers#era1-first-lenses'
'/eras/earthbound-observers#era1-framing'
'/eras/earthbound-observers#era1-observatory-culture'
'/eras/earthbound-observers#era1-instrument-standard'
'/eras/earthbound-observers#era1-bridge'
```

Era 2:

```ts
'/eras/cosmic-instruments#era2-orbital-shift'
'/eras/cosmic-instruments#era2-spectrum-expansion'
'/eras/cosmic-instruments#era2-networked-observatories'
```

## 9. TransitionTrigger Update
Current logic only treats `/eras` as the era route. It must understand the new child routes.

Recommended behavior:
- `/eras/earthbound-observers`: terrestrial state.
- `/eras/cosmic-instruments`: celestial state.
- `/eras`: neutral hub; either no scroll-triggered era transition or a simple static terrestrial start.
- Home page keeps its existing transition behavior.

Implementation direction in `website/components/site/transition-trigger.tsx`:

```ts
const isEarthboundRoute = /\/eras\/earthbound-observers\/?$/.test(pathname);
const isCosmicRoute = /\/eras\/cosmic-instruments\/?$/.test(pathname);
const isErasHub = /\/eras\/?$/.test(pathname);

if (isCosmicRoute) {
  clearScrollTheme();
  setScrollThemeProgress(1);
  document.body.classList.add('is-space-era');
  return () => {
    document.body.classList.remove('is-space-era');
    clearScrollTheme();
  };
}

if (isEarthboundRoute || isErasHub) {
  document.body.classList.remove('is-space-era');
  setScrollThemeProgress(0);
  clearScrollTheme();
  return;
}
```

Keep this branching above any old combined-page ScrollTrigger logic. If a scroll transition is still desired within the hub later, add it as a separate sprint.

## 10. CSS Additions
Add route-scoped exhibit classes to `website/app/globals.css`.

Recommended class names:

```css
.era-exhibit {}
.era-exhibit--earthbound {}
.era-exhibit--cosmic {}
.era-runway {}
.era-anchor-grid {}
.era-wide-card {}
.era-card-row {}
.era-card-stack {}
.era-wide-section {}
.era-wide-callout {}
.era-end-nav {}
.era-button {}
.era-button--primary {}
.era-button--secondary {}
```

Design notes:
- Use max width closer to the third screenshot, for example `min(100% - 2rem, 112rem)`.
- Keep text columns constrained inside wide sections.
- Use card rows for figure/mission blocks.
- Use dark styles only under `.era-exhibit--cosmic`.
- Do not remove existing classes until the old combined page is no longer using them.

## 11. Implementation Order
1. Add data file and shared components.
2. Create Era 1 page by moving existing Era 1 content.
3. Create Era 2 page by moving existing Era 2 content.
4. Replace `/eras` with the hub page.
5. Update nav links.
6. Update home and timeline links.
7. Update `TransitionTrigger`.
8. Add CSS for wide editorial layout.
9. Run `npm run build`.
10. Manually check all routes and buttons.

## 12. Done Checklist
- [ ] `/eras` is a hub page.
- [ ] `/eras/earthbound-observers` renders Era 1.
- [ ] `/eras/cosmic-instruments` renders Era 2.
- [ ] Existing deep links route to the correct new pages.
- [ ] End-of-page buttons work.
- [ ] Header nav links work.
- [ ] Home page cards work.
- [ ] Timeline rail links work.
- [ ] Cosmic route applies the space-era visual state.
- [ ] Earthbound route stays terrestrial.
- [ ] `npm run build` succeeds from `website/`.
