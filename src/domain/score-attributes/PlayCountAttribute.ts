import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from '../IScorable';
import { ScoreComputeService } from '../scores/ScoreComputeService';
import { ScoreContext } from '../context/ScoreContext';

export class PlayCountAttribute implements IScoreAttribute {
  getName(): string {
    return 'Play Count';
  }

  calculateScore(context: ScoreContext): number {
    return new ScoreComputeService().computeNormalizedCountScore(
      context.collection.playCounts,
      context.current.playCounts,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return [];
  }
}
