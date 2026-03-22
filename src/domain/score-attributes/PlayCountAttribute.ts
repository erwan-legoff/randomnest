import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from '../IScorable';
import { ScoreComputeService } from '../scores/ScoreComputeService';
import { ScoreContext } from '../context/ScoreContext';

export class PlayCountAttribute implements IScoreAttribute {
  getName(): string {
    throw new Error('Method not implemented.');
  }

  calculateScore(_context: ScoreContext): number {
    return new ScoreComputeService().computeNormalizedCountScore(
      _context.collection.playCounts,
      _context.current.playCounts,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
}
