import { timelineDataset } from './timeline-data';
import type { EraId, Milestone, MilestonesByEra } from './types';

export const getSortedMilestones = (): Milestone[] =>
  [...timelineDataset.milestones].sort((left, right) => left.year - right.year);

export const groupMilestonesByEra = (): MilestonesByEra => {
  const grouped: MilestonesByEra = {
    'pre-telescope': [],
    'early-optics': [],
    'classical-observatories': [],
    'space-age': [],
    'modern-era': [],
  };

  getSortedMilestones().forEach((milestone) => {
    grouped[milestone.eraId].push(milestone);
  });

  return grouped;
};

export const getMilestonesForEra = (eraId: EraId): Milestone[] =>
  groupMilestonesByEra()[eraId];

export const getMilestoneStats = () => ({
  eraCount: timelineDataset.eras.length,
  milestoneCount: timelineDataset.milestones.length,
  majorMilestones: timelineDataset.milestones.filter((item) => item.importance === 'major').length,
});
