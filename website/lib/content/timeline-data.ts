import { resolveCitationIds, sourceCitations } from './source-map';
import type {
  Era,
  Milestone,
  SourceCitationId,
  TimelineDataset,
} from './types';

interface MilestoneSeed extends Omit<Milestone, 'citations'> {
  citationIds: SourceCitationId[];
}

export const eras: Era[] = [
  {
    id: 'pre-telescope',
    title: 'Pre-Telescope Astronomy',
    startYear: -400,
    endYear: 1607,
    summary: 'Astronomy relied on naked-eye observation, geometry, and long-duration sky records.',
  },
  {
    id: 'early-optics',
    title: 'Early Optical Revolution',
    startYear: 1608,
    endYear: 1700,
    summary: 'Lens-based instruments transformed observation and redefined evidence in astronomy.',
  },
  {
    id: 'classical-observatories',
    title: 'Classical Observatory Era',
    startYear: 1701,
    endYear: 1945,
    summary: 'Dedicated observatories expanded survey precision and standardized astronomical measurement.',
  },
  {
    id: 'space-age',
    title: 'Space Telescope Era',
    startYear: 1946,
    endYear: 2010,
    summary: 'Orbiting observatories bypassed atmospheric limits and widened the observable spectrum.',
  },
  {
    id: 'modern-era',
    title: 'Modern Multi-Observatory Era',
    startYear: 2011,
    summary: 'Global collaborations now combine optical, infrared, X-ray, and radio systems.',
  },
];

const milestoneSeeds: MilestoneSeed[] = [
  {
    id: 'lipperhey-1608',
    eraId: 'early-optics',
    year: 1608,
    title: 'Lipperhey Demonstrates the Telescope',
    summary:
      'Dutch spectacle maker Hans Lipperhey presented an instrument that made distant objects appear closer.',
    details:
      'This 1608 demonstration is the earliest well-documented evidence of telescope invention and marks the beginning of instrument-assisted visual science.',
    importance: 'major',
    citationIds: ['royal-observatory-history'],
  },
  {
    id: 'harriot-1609',
    eraId: 'early-optics',
    year: 1609,
    title: 'Thomas Harriot Draws the Moon',
    summary:
      'English astronomer Thomas Harriot produced one of the earliest telescopic drawings of the Moon.',
    details:
      'Harriot recorded light and shadow as mapped terrain, showing how telescopes could convert observation into comparative visual analysis.',
    importance: 'supporting',
    citationIds: ['royal-observatory-history'],
  },
  {
    id: 'galileo-1610',
    eraId: 'early-optics',
    year: 1610,
    title: 'Galileo Expands Telescopic Evidence',
    summary:
      'Galileo reported Jupiter’s moons and lunar terrain, challenging geocentric assumptions.',
    details:
      'His telescopic findings widened acceptance of observational proof in astronomy and helped reshape the scientific model of the universe.',
    importance: 'major',
    citationIds: ['royal-observatory-history'],
  },
  {
    id: 'observatory-standardization-1700s',
    eraId: 'classical-observatories',
    year: 1750,
    title: 'Observatory Networks Standardize Measurement',
    summary:
      'Institutional observatories expanded coordinated sky tracking and precision instrumentation.',
    details:
      'As telescopes spread through observatories, astronomical practices became more standardized, repeatable, and globally comparable.',
    importance: 'supporting',
    citationIds: ['royal-observatory-history'],
  },
  {
    id: 'hubble-1990',
    eraId: 'space-age',
    year: 1990,
    title: 'Hubble Begins Space-Based Observing',
    summary:
      'The Hubble Space Telescope launched in 1990 and transformed modern astronomy with high-clarity orbital observations.',
    details:
      'Hubble’s ultraviolet-to-near-infrared range and long mission lifetime produced more than a million observations and reshaped textbooks, cosmology, and planetary science.',
    importance: 'major',
    citationIds: ['nasa-hubble-overview'],
  },
  {
    id: 'chandra-1999',
    eraId: 'space-age',
    year: 1999,
    title: 'Chandra Advances X-Ray Astronomy',
    summary:
      'Chandra used precision iridium-coated mirror assemblies to observe high-energy X-ray sources.',
    details:
      'Its mirror system required extreme polishing and alignment tolerances, enabling observations of phenomena not visible with optical telescopes.',
    importance: 'major',
    citationIds: ['chandra-hardware'],
  },
  {
    id: 'webb-2021',
    eraId: 'modern-era',
    year: 2021,
    title: 'James Webb Extends Infrared Reach',
    summary:
      'JWST launched in 2021 with a segmented 6.5-meter mirror and deep infrared sensitivity.',
    details:
      'Webb’s instruments and sunshield architecture enable investigations into early galaxies, star formation, and planetary system chemistry at unprecedented depth.',
    importance: 'major',
    citationIds: ['nasa-webb-fact-sheet'],
  },
  {
    id: 'event-horizon-2019',
    eraId: 'modern-era',
    year: 2019,
    title: 'Event Horizon Telescope Images a Black Hole',
    summary:
      'A global telescope array produced the first direct image of a black hole environment.',
    details:
      'The Event Horizon Telescope demonstrated how distributed observatories can act as one instrument to resolve extreme-scale cosmic targets.',
    importance: 'major',
    citationIds: ['event-horizon'],
  },
];

export const milestones: Milestone[] = milestoneSeeds.map(({ citationIds, ...milestone }) => ({
  ...milestone,
  citations: resolveCitationIds(citationIds),
}));

export const timelineDataset: TimelineDataset = {
  eras,
  milestones,
};
