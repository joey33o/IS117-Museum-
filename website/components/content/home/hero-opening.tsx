export function HeroOpening() {
  return (
    <header className="border-b border-black/15 pb-8 pt-2 sm:pb-10">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <p className="eyebrow-label text-black/70 md:col-span-3 md:self-start md:pt-2">
          The Celestial Eye Museum
        </p>
        <figure className="hero-atmospheric-frame md:col-span-4 md:row-span-2 md:row-start-2 lg:col-span-3 lg:col-start-1">
          <img
            src="telescope-pic.jpg"
            alt="Historic telescope instrument"
            className="hero-atmospheric-image"
          />
        </figure>
        <h1 className="editorial-display font-semibold md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-4">
          How Instruments Changed
          <br />
          the Way We See the Universe
        </h1>
        <p className="editorial-lead text-black/80 md:col-span-5 md:col-start-8">
          Explore the milestones that turned distant lights into measurable realities, and discover how
          astronomy evolved through precision, skepticism, and inquiry.
        </p>
      </div>
    </header>
  );
}
