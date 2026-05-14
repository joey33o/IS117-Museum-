export type EraRoute = '/eras/earthbound-observers' | '/eras/cosmic-instruments';

export type EraAnchorCard = {
  title: string;
  label: string;
  description: string;
  href: string;
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
  heroImageSrc: string;
  heroImageAlt: string;
  anchorCards: EraAnchorCard[];
  featureCards: EraFeatureCard[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const publicAsset = (path: string) => `${basePath}${path}`;

export const earthboundEra: EraPageContent = {
  id: 'earthbound-observers',
  route: '/eras/earthbound-observers',
  eyebrow: 'Era 1',
  title: 'Earthbound Observers',
  summary:
    'A focused exhibit on how early telescopes turned seeing into repeatable evidence through method, observatory discipline, and instrument standards.',
  readingTime: '6-9 minutes',
  heroImageSrc: publicAsset('/eras/era1-hero.png'),
  heroImageAlt: 'Archival-style observatory room with brass telescopes, star charts, and candlelit work tables.',
  anchorCards: [
    {
      title: 'First lenses make proof public',
      label: 'Visual evidence',
      description: 'Telescopic contradictions become arguments that can be redrawn, repeated, and disputed.',
      href: '#era1-first-lenses',
    },
    {
      title: 'Observatories organize trust',
      label: 'Record culture',
      description: 'Logs, schedules, and shared routines turn individual sightings into collective evidence.',
      href: '#era1-observatory-culture',
    },
    {
      title: 'Standards expose terrestrial limits',
      label: 'Instrument discipline',
      description: 'Calibration makes small differences meaningful while revealing the constraints of Earth-based observation.',
      href: '#era1-instrument-standard',
    },
  ],
  featureCards: [
    {
      title: 'Galileo Galilei',
      kicker: 'Public telescopic argument',
      description: 'Popularized telescopic evidence in planetary observation and public scientific argument.',
      imageSrc: publicAsset('/eras/era1-galileo.png'),
      imageAlt: 'Archival-style portrait scene of Galileo with an early telescope and astronomical sketches.',
    },
    {
      title: 'Thomas Harriot',
      kicker: 'Recorded lunar evidence',
      description: 'Produced early telescopic lunar drawings that reinforced the evidentiary value of recorded observation.',
      imageSrc: publicAsset('/eras/era1-harriot-moon.png'),
      imageAlt: 'Early telescope observer recording lunar sketches beside a refracting telescope.',
    },
    {
      title: 'Christiaan Huygens',
      kicker: 'Optical practice',
      description: 'Improved optical practice and shaped instrument-centered methods in early modern astronomy.',
      imageSrc: publicAsset('/eras/era1-observatory-culture.png'),
      imageAlt: 'Classical observatory with astronomers recording observations among instruments and logs.',
    },
    {
      title: 'Giovanni Cassini',
      kicker: 'Institutional astronomy',
      description: 'Expanded observatory routines that linked recurring measurements to institutional astronomy.',
      imageSrc: publicAsset('/eras/era1-refractor.png'),
      imageAlt: 'Close-up of a brass refractor telescope assembly and lens hardware.',
    },
  ],
};

export const cosmicEra: EraPageContent = {
  id: 'cosmic-instruments',
  route: '/eras/cosmic-instruments',
  eyebrow: 'Era 2',
  title: 'Cosmic Instruments',
  summary:
    'A focused exhibit on how astronomy moved beyond one site, one spectrum, and one instrument toward orbital systems and networked evidence.',
  readingTime: '6-9 minutes',
  heroImageSrc: publicAsset('/eras/era2-hero.png'),
  heroImageAlt: 'Modern space telescope above Earth with deep space in the background.',
  anchorCards: [
    {
      title: 'Orbit removes atmospheric interference',
      label: 'Orbital shift',
      description: 'Space-based instruments gain stability, continuity, and cleaner signals beyond atmospheric limits.',
      href: '#era2-orbital-shift',
    },
    {
      title: 'Spectra reveal hidden processes',
      label: 'Expanded vision',
      description: 'Infrared, X-ray, and radio observations make non-visible cosmic phenomena legible.',
      href: '#era2-spectrum-expansion',
    },
    {
      title: 'Networks become evidence systems',
      label: 'Shared infrastructure',
      description: 'Linked observatories coordinate data, timing, and interpretation across institutions.',
      href: '#era2-networked-observatories',
    },
  ],
  featureCards: [
    {
      title: 'Hubble Space Telescope',
      kicker: 'Orbital clarity',
      description: 'A long-duration orbital observatory that made high-resolution space-based observation central to modern astronomy.',
      imageSrc: publicAsset('/eras/era2-hubble.png'),
      imageAlt: 'Hubble-like orbital telescope above Earth.',
    },
    {
      title: 'Chandra X-ray Observatory',
      kicker: 'High-energy evidence',
      description: 'A precision X-ray mission that made extreme environments and compact-object physics more visible.',
      imageSrc: publicAsset('/eras/era2-xray-observatory.png'),
      imageAlt: 'X-ray observatory spacecraft against a high-energy nebula-like background.',
    },
    {
      title: 'James Webb Space Telescope',
      kicker: 'Deep infrared sensitivity',
      description: 'A segmented infrared observatory built to study early galaxies, star formation, and planetary chemistry.',
      imageSrc: publicAsset('/eras/era2-jwst.png'),
      imageAlt: 'James Webb-style segmented mirror telescope in deep space.',
    },
    {
      title: 'Radio Observatory Networks',
      kicker: 'Distributed observation',
      description: 'Linked radio observatories show how separate sites can expand astronomy beyond a single instrument or location.',
      imageSrc: publicAsset('/eras/era2-radio-array.png'),
      imageAlt: 'Radio telescope array under a night sky.',
    },
  ],
};

export const ERA_PAGES = [earthboundEra, cosmicEra];
