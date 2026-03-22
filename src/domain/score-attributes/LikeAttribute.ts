import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from '../IScorable';
import { ScoreComputeService } from '../scores/ScoreComputeService';
import { ScoreContext } from '../context/ScoreContext';

export class LikeAttribute implements IScoreAttribute {
  getName(): string {
    return 'Likes';
  }

  calculateScore(context: ScoreContext): number {
    return new ScoreComputeService().computeNormalizedCountScore(
      context.collection.likes,
      context.current.likes,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return [];
  }
}
