import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from '../IScorable';
import { ScoreContext } from '../context/ScoreContext';

export class RecencyAttribute implements IScoreAttribute {
  getName(): string {
    return 'Recency score';
  }

  calculateScore(_context: ScoreContext): number {
    return 5;
  }

  getScoreDependencies(): Array<IScorable> {
    return [];
  }
}
