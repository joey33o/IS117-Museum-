# Scrollytelling / Slide Transitions in `refgithub/bseai_degree`

This note explains how the `refgithub/bseai_degree` project implements a **scroll-driven slide deck** with **transitions that resolve based on scroll progress**.

## 1) What counts as a “slide” (content model)

Slides are authored as a single Markdown document and split into slide chunks by **horizontal rules** (`---`). The parser also supports lightweight directives for backgrounds and split layouts.

Source: `refgithub/bseai_degree/lib/content/parser.ts`

```ts
// Split by horizontal rules that are on their own lines.
const chunks = content.split(/\n\s*---\s*(?:\n|$)/);

// Marp-style directives inside a slide:
//   ![bg](url)
//   ![bg 50% 65%](url)       // optional focal point
//   ![split](url)
//   ![split-reverse](url)
```

The output is a `SlideNode`:

```ts
export interface SlideNode {
  cleanContent: string;          // markdown without directives
  backgroundSrc: string | null;  // per-slide background image
  backgroundFocal: string | null; // CSS object-position like "50% 65%"
  splitSrc: string | null;       // split layout media
  splitReverseSrc: string | null;
}
```

## 2) The slide engine: sticky “stage” + oversized sections

Each slide is rendered as a `<section>` that is **taller than the viewport** (170vh or 200vh), containing a **sticky 100vh stage**.

Source: `refgithub/bseai_degree/components/motion/PresentationSlide.tsx`

```tsx
const slideHeight = hasBackground ? "200vh" : "170vh";

return (
  <section
    ref={sectionRef}
    data-presentation-slide="true"
    style={{ height: slideHeight, position: "relative", zIndex: index }}
  >
    <div
      className="presentation-slide__stage"
      style={{ height: "100vh", position: "sticky", top: 0 }}
    >
      {children}
    </div>
  </section>
);
```

Why this matters:

- The **sticky stage** makes each slide behave like a “panel” that stays pinned while you scroll.
- The extra section height (the part beyond 100vh) creates a **pin range** where you can drive *within-slide* animations (reveals, parallax, drift) without immediately advancing to the next slide.

The CSS reinforces the 100vh stage behavior and avoids nested scrolling:

Source: `refgithub/bseai_degree/app/globals.css`

```css
.presentation-slide__stage {
  height: 100vh;
  position: sticky;
  top: 0;
  /* No inner scroll container ... slide-to-slide advancement continues */
  overflow: hidden;
}
```

## 3) How scroll becomes an animation timeline (`scrollYProgress`)

Each slide section creates a Framer Motion `scrollYProgress` value with `useScroll`.

Source: `refgithub/bseai_degree/components/motion/PresentationSlide.tsx`

```ts
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end end"],
});
```

Interpretation of the offsets:

- Progress starts when the **slide top** hits the **viewport bottom**.
- Progress ends when the **slide bottom** hits the **viewport bottom**.

That `scrollYProgress` is placed into a React context (`SlideContext`) so any child component can read it.

Source: `refgithub/bseai_degree/components/motion/SlideContext.tsx`

```ts
export const SlideContext = createContext({ scrollYProgress: null });
```

…and provided per slide:

```tsx
<SlideContext.Provider value={{ scrollYProgress }}>
  ...
</SlideContext.Provider>
```

One special-case: the first slide disables the context so load-in is clean.

```ts
const contextValue = index === 0 ? { scrollYProgress: null } : { scrollYProgress };
```

## 4) The “transition” primitives: Reveal + SceneCard + DriftMedia

### 4.1 `Reveal`: opacity + translate mapped to slide progress

`Reveal` decides between two modes:

- **Slide mode**: if `scrollYProgress` exists, it maps progress → opacity/position.
- **Viewport mode**: otherwise, it uses `useInView` and runs a one-time reveal.

Source: `refgithub/bseai_degree/components/motion/Reveal.tsx`

```tsx
if (slideContext?.scrollYProgress) {
  return <SlideReveal scrollYProgress={slideContext.scrollYProgress} ... />;
}
return <ViewportReveal ... />;
```

In slide mode, the “transition” is not a single time-based tween; it’s a **function of scroll progress**:

```ts
const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

const opacity = useTransform(smoothProgress, [startThreshold, endThreshold], [0, 1]);
const x = useTransform(smoothProgress, [startThreshold, endThreshold], [xDist, 0]);
const y = useTransform(smoothProgress, [startThreshold, endThreshold], [yDist, 0]);
```

Key detail: thresholds depend on `sequence` and `delay`.

```ts
const startThreshold = sequence === "delayed"
  ? 0.5 + (delay * 0.1)
  : Math.min(delay * 0.5, 0.5);
const endThreshold = sequence === "delayed" ? 0.9 : 0.8;
```

Meaning:

- `sequence="delayed"` pushes reveals into the **later half** of the slide’s pin range.
- `delay` becomes “stagger by progress”, not “stagger by milliseconds”.

### 4.2 `SceneCard`: opacity + translate + scale (card entrance)

`SceneCard` is the same pattern as `Reveal`, but includes scale and variants.

Source: `refgithub/bseai_degree/components/motion/SceneCard.tsx`

```ts
const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
const y = useTransform(smoothProgress, [start, end], [yStart, 0]);
const scale = useTransform(smoothProgress, [start, end], [scaleStart, 1]);
```

Variants simply pick different entrance parameters:

```ts
const variantSettings = {
  section: { yStart: 34, scaleStart: 0.965 },
  emphasis: { yStart: 22, scaleStart: 0.98 },
  cta: { yStart: 28, scaleStart: 0.975 },
};
```

### 4.3 `DriftMedia`: subtle media drift synced to progress

Source: `refgithub/bseai_degree/components/motion/DriftMedia.tsx`

```ts
const opacity = useTransform(smoothProgress, [start, end], [0.72, 1]);
const y = useTransform(smoothProgress, [start, end], [range, 0]);
const scale = useTransform(smoothProgress, [start, end], [scaleStart, 1]);
```

This gives media (images/video) a “settling into place” feel while the slide is pinned.

### 4.4 Reduced-motion support

All these primitives respect `prefers-reduced-motion` by turning off transform-driven styles and/or skipping initial animated states:

```ts
const prefersReducedMotion = useReducedMotion();
style={prefersReducedMotion ? undefined : { opacity, y, scale }}
```

## 5) Background transitions: per-slide parallax + velocity blur

Slides can opt into a background image via Markdown (`![bg](...)`). The background is rendered behind content and animated with `scrollYProgress`.

Source: `refgithub/bseai_degree/components/motion/ParallaxBackground.tsx`

```ts
const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1.08]);

// Motion blur tied to scroll velocity
const scrollVelocity = useVelocity(scrollY);
const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
const velocityBlur = useTransform(smoothVelocity, [-1000, 0, 1000], [8, 0, 8]);

const filter = useMotionTemplate`brightness(${brightness}) contrast(${contrast}) saturate(${saturation}) blur(${blurValue}px)`;
```

This is a classic scrollytelling trick:

- **Parallax** (background y/scale)
- **Atmosphere** (brightness/contrast/saturation curves)
- **Cinematic momentum** (blur driven by scroll velocity)

## 6) How the app composes slides (where it all comes together)

The `PresentationLayout`:

1. Splits the page Markdown into slides (`splitMarkdownIntoSlides`).
2. Renders each slide via `PresentationSlide`.
3. Wraps slide content in transition primitives (`SceneCard`, `LayeredRevealGroup`, `DriftMedia`).

Source: `refgithub/bseai_degree/components/layouts/PresentationLayout.tsx`

```tsx
const slides = splitMarkdownIntoSlides(page.content);

{slides.map((slide, index) => (
  <PresentationSlide
    key={index}
    index={index}
    hasBackground={!!slide.backgroundSrc}
    backgroundColor={slide.backgroundSrc ? "#000" : "#f5f1ea"}
  >
    {slide.backgroundSrc && (
      <ParallaxBackground src={slide.backgroundSrc} mode={index === 0 ? "opening" : "standard"} />
    )}

    {(slide.splitSrc || slide.splitReverseSrc)
      ? <SplitLayoutBlock ... />
      : <StandardLayoutBlock ... />}
  </PresentationSlide>
))}
```

### Staggering within a slide

`LayeredRevealGroup` is a convenience wrapper that turns a list of children into a staggered reveal sequence by passing increasing `delay` values.

Source: `refgithub/bseai_degree/components/motion/LayeredRevealGroup.tsx`

```tsx
{items.map((child, index) => (
  <Reveal key={index} delay={index * stagger} sequence={sequence}>
    {child}
  </Reveal>
))}
```

Because `Reveal` interprets `delay` as part of the progress thresholds, the stagger stays consistent even if the user scrolls quickly.

## 7) Slide navigation: jump-to-slide that respects the sticky pin range

The system includes a progress rail and keyboard shortcuts that can jump to a slide.

The jump logic is careful: it scrolls near the **end** of the slide’s pin range so that all progress-driven reveals are fully resolved.

Source: `refgithub/bseai_degree/components/motion/presentation-nav.ts`

```ts
const vh = window.innerHeight;
const pinRange = Math.max(0, target.offsetHeight - vh);
const offset = Math.max(0, pinRange - vh * 0.1);
window.scrollTo({ top: target.offsetTop + offset, behavior: "smooth" });
```

This is subtle but important: if you jumped to `target.offsetTop` exactly, you’d land at progress ≈ 0 and see half-hidden content.

## 8) The mental model to reuse in your own project

If you want the same pattern in another site:

- Use **oversized sections** (`170–200vh`) with a **sticky 100vh stage**.
- Use `useScroll({ target, offset })` to create a `scrollYProgress` timeline.
- Put `scrollYProgress` in context so any component can implement progress-based transitions.
- Write transition primitives that map `scrollYProgress` to opacity/x/y/scale, smoothed with `useSpring`.
- For authoring: keep slide content simple (Markdown chunks, plus minimal directives).

That’s the core of how `bseai_degree` gets “slides” and “transitions” without a heavy slideshow framework.
