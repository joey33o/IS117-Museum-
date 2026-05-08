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
  anchorCards: EraAnchorCard[];
  featureCards: EraFeatureCard[];
};

export const earthboundEra: EraPageContent = {
  id: 'earthbound-observers',
  route: '/eras/earthbound-observers',
  eyebrow: 'Era 1',
  title: 'Earthbound Observers',
  summary:
    'A focused exhibit on how early telescopes turned seeing into repeatable evidence through method, observatory discipline, and instrument standards.',
  readingTime: '6-9 minutes',
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
    },
    {
      title: 'Thomas Harriot',
      kicker: 'Recorded lunar evidence',
      description: 'Produced early telescopic lunar drawings that reinforced the evidentiary value of recorded observation.',
    },
    {
      title: 'Christiaan Huygens',
      kicker: 'Optical practice',
      description: 'Improved optical practice and shaped instrument-centered methods in early modern astronomy.',
    },
    {
      title: 'Giovanni Cassini',
      kicker: 'Institutional astronomy',
      description: 'Expanded observatory routines that linked recurring measurements to institutional astronomy.',
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
    },
    {
      title: 'Chandra X-ray Observatory',
      kicker: 'High-energy evidence',
      description: 'A precision X-ray mission that made extreme environments and compact-object physics more visible.',
    },
    {
      title: 'James Webb Space Telescope',
      kicker: 'Deep infrared sensitivity',
      description: 'A segmented infrared observatory built to study early galaxies, star formation, and planetary chemistry.',
    },
    {
      title: 'Event Horizon Telescope',
      kicker: 'Distributed observation',
      description: 'A global array that showed how separate observatories can operate as one planetary-scale instrument.',
    },
  ],
};

export const ERA_PAGES = [earthboundEra, cosmicEra];
