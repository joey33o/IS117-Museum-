import type { ConstellationSlide } from '@/lib/content/constellations-data';

export function ConstellationSlide({ slide, index }: { slide: ConstellationSlide; index: number }) {
  const labelId = `constellation-${slide.id}-heading`;

  return (
    <section
      data-constellation-slide
      data-constellation-index={index}
      className="constellation-slide relative"
      style={{ height: index === 0 ? '200vh' : '170vh', zIndex: index }}
      aria-labelledby={labelId}
    >
      <div className="constellation-stage sticky top-0 h-screen overflow-hidden">
        <div className="constellation-media absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            data-constellation-bg
            src={slide.imageSrc}
            alt=""
            className="constellation-media-bg"
          />
          <div data-constellation-tone className="constellation-tonal-overlay" />
          <div data-constellation-vignette className="constellation-vignette" />
          <img
            data-constellation-image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            className="constellation-media-image"
          />
        </div>

        <div className="constellation-copy relative z-10 flex h-full items-end justify-center px-4 pb-10 pt-16">
          <div className="mx-auto w-full max-w-[78rem]">
            <div
              data-constellation-caption
              className="constellation-caption w-full max-w-[60ch] space-y-3 p-5"
            >
              <p className="eyebrow-label">Constellation {index + 1}</p>
              <h2 id={labelId} className="constellation-title">
                {slide.title}
              </h2>
              <p className="text-[15px] leading-7">{slide.myth}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
