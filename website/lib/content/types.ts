export type EraId =
  | 'pre-telescope'
  | 'early-optics'
  | 'classical-observatories'
  | 'space-age'
  | 'modern-era';

export type MilestoneImportance = 'major' | 'supporting';

export type SourceCitationId =
  | 'royal-observatory-history'
  | 'cmu-telescope-history'
  | 'nasa-hubble-overview'
  | 'nasa-webb-fact-sheet'
  | 'chandra-hardware'
  | 'chandra-overview';

export interface SourceCitation {
  id: SourceCitationId;
  label: string;
  sourcePath: string;
  note?: string;
  accessedOn?: string;
}

export interface Era {
  id: EraId;
  title: string;
  startYear: number;
  endYear?: number;
  summary: string;
}

export interface Milestone {
  id: string;
  eraId: EraId;
  year: number;
  title: string;
  summary: string;
  details: string;
  importance: MilestoneImportance;
  citations: SourceCitation[];
}

export interface TimelineDataset {
  eras: Era[];
  milestones: Milestone[];
}

export type MilestonesByEra = Record<EraId, Milestone[]>;
