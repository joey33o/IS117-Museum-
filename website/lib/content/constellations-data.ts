export type ConstellationId = 'orion' | 'cygnus' | 'cassiopeia' | 'ursa-major';

export type ConstellationSlide = {
  id: ConstellationId;
  title: string;
  myth: string;
  imageSrc: string;
  imageAlt: string;
};

export const CONSTELLATION_SLIDES: ConstellationSlide[] = [
  {
    id: 'orion',
    title: 'Orion',
    myth: 'Orion was a famed hunter who boasted that nothing on Earth could escape his skill, provoking a giant scorpion to end his chase. After his death, Artemis asked Zeus to place Orion among the stars, with Scorpius set opposite so the two never meet in the same sky.',
    imageSrc: '/constellations/orion.png',
    imageAlt: 'Constellation illustration of Orion.',
  },
  {
    id: 'cygnus',
    title: 'Cygnus',
    myth: 'One story tells of a young friend who begged Zeus to turn him into a swan so he could dive into a river and save his companion. Moved by loyalty and courage, Zeus later placed the swan in the heavens as Cygnus.',
    imageSrc: '/constellations/cygnus.png',
    imageAlt: 'Constellation illustration of Cygnus.',
  },
  {
    id: 'cassiopeia',
    title: 'Cassiopeia',
    myth: 'Cassiopeia, a queen, claimed she surpassed the sea nymphs in beauty, and the gods punished that pride with disaster for her kingdom. In the sky she is bound to her throne and, for part of the year, turns upside down as a lasting warning.',
    imageSrc: '/constellations/cassiopeia.png',
    imageAlt: 'Constellation illustration of Cassiopeia.',
  },
  {
    id: 'ursa-major',
    title: 'Ursa Major',
    myth: 'In one Roman telling, the nymph Callisto is transformed into a bear through jealousy and forced to wander the wilderness. When her son nearly strikes her down, Jupiter intervenes and sets them among the stars as the Great Bear.',
    imageSrc: '/constellations/big-dipper.png',
    imageAlt: 'Constellation illustration of Ursa Major (Big Dipper).',
  },
];
