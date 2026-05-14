import type { SourceCitation, SourceCitationId } from './types';

export const sourceCitations: SourceCitation[] = [
  {
    id: 'royal-observatory-history',
    label: 'Royal Museums Greenwich - The history of the telescope',
    sourcePath: 'references/2Historyoftelescope.txt',
    note: 'Invention timeline, Galileo observations, and social adoption context.',
    accessedOn: '2026-04-05',
  },
  {
    id: 'cmu-telescope-history',
    label: 'Carnegie Mellon University - Encyclopedia of the History of Science: Telescope',
    sourcePath: 'references/telescopeHisotry.txt',
    note: 'Long-form telescope history, instrument practices, observatories, radio astronomy, and space telescopes.',
    accessedOn: '2026-04-05',
  },
  {
    id: 'nasa-hubble-overview',
    label: 'NASA - Hubble overview',
    sourcePath: 'references/hubbleTele.txt',
    note: 'Mission history, scientific impact, and instrument capability.',
    accessedOn: '2026-04-05',
  },
  {
    id: 'nasa-webb-fact-sheet',
    label: 'NASA - James Webb Space Telescope fact sheet',
    sourcePath: 'references/JamesWebbTele.txt',
    note: 'Mission scope, instrumentation, and engineering innovations.',
    accessedOn: '2026-04-05',
  },
  {
    id: 'chandra-hardware',
    label: 'NASA Chandra - Telescope system and mirrors',
    sourcePath: 'references/CLandraTele.txt',
    note: 'X-ray telescope mirror design and precision requirements.',
    accessedOn: '2026-04-05',
  },
  {
    id: 'chandra-overview',
    label: 'NASA - Overview: Chandra X-ray Observatory',
    sourcePath: 'references/MoreClandra.txt',
    note: 'Mission overview, X-ray astronomy context, and scientific role.',
    accessedOn: '2026-04-05',
  },
];

export const citationsById: Record<SourceCitationId, SourceCitation> =
  sourceCitations.reduce(
    (accumulator, citation) => {
      accumulator[citation.id] = citation;
      return accumulator;
    },
    {} as Record<SourceCitationId, SourceCitation>,
  );

export const resolveCitationIds = (ids: SourceCitationId[]): SourceCitation[] =>
  ids.map((id) => citationsById[id]);
