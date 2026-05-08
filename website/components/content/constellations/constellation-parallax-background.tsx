'use client';

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

import { useConstellationSlideContext } from './constellation-slide-context';

export function ConstellationParallaxBackground({
  src,
  alt,
  mode = 'standard',
}: {
  src: string;
  alt: string;
  mode?: 'standard' | 'opening';
}) {
  const slideContext = useConstellationSlideContext();
  const fallbackProgress = useMotionValue(0.5);
  const { scrollY } = useScroll();
  const scrollYProgress = slideContext.scrollYProgress ?? fallbackProgress;

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0, 0.35, 1] : [0, 1],
    mode === 'opening' ? [1.12, 1.08, 1.02] : [1.16, 1.08]
  );

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityBlur = useTransform(smoothVelocity, [-1000, 0, 1000], [8, 0, 8]);
  const cinematicBlur = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0, 0.45, 0.75, 1] : [0, 1],
    mode === 'opening' ? [0, 0, 1.5, 2] : [0, 0.8]
  );
  const blurValue = useTransform(() => velocityBlur.get() + cinematicBlur.get());
  const brightness = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0, 0.32, 0.68, 1] : [0, 1],
    mode === 'opening' ? [1, 1, 0.72, 0.64] : [0.96, 0.78]
  );
  const contrast = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0, 0.65, 1] : [0, 1],
    mode === 'opening' ? [1, 1.02, 1.08] : [1.02, 1.06]
  );
  const saturation = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0, 0.65, 1] : [0, 1],
    mode === 'opening' ? [1, 0.92, 0.82] : [0.94, 0.86]
  );
  const tonalOverlayOpacity = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0.28, 0.62, 1] : [0.15, 1],
    mode === 'opening' ? [0, 0.22, 0.4] : [0.1, 0.28]
  );
  const vignetteOpacity = useTransform(
    scrollYProgress,
    mode === 'opening' ? [0.25, 0.7, 1] : [0.2, 1],
    mode === 'opening' ? [0, 0.38, 0.55] : [0.18, 0.32]
  );
  const filter = useMotionTemplate`brightness(${brightness}) contrast(${contrast}) saturate(${saturation}) blur(${blurValue}px)`;

  return (
    <div className="constellation-reference-bg">
      <motion.img
        className="constellation-reference-bg-image"
        style={{
          y,
          scale,
          filter,
        }}
        src={src}
        alt={alt}
      />
      <motion.div
        aria-hidden="true"
        className="constellation-reference-tonal"
        style={{ opacity: tonalOverlayOpacity }}
      />
      <motion.div
        aria-hidden="true"
        className="constellation-reference-vignette"
        style={{ opacity: vignetteOpacity }}
      />
    </div>
  );
}
