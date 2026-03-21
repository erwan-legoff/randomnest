import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from './IScorable';
import { ScoreComputeService } from './ScoreComputeService';
import { ScoreContext } from './ScoreContext';

export class LikeAttribute implements IScoreAttribute {
  getName(): string {
    throw new Error('Method not implemented.');
  }

  calculateScore(_context: ScoreContext): number {
    return new ScoreComputeService().computeNormalizedCountScore(
      _context.collection.likes,
      _context.current.likes,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
}
