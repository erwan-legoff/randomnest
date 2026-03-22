import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from '../IScorable';
import { ScoreComputeService } from '../scores/ScoreComputeService';
import { ScoreContext } from '../context/ScoreContext';

export class LikeAttribute implements IScoreAttribute {
  getName(): string {
    return 'Likes';
  }

  calculateScore(_context: ScoreContext): number {
    return new ScoreComputeService().computeNormalizedCountScore(
      _context.collection.likes,
      _context.current.likes,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return [];
  }
}
