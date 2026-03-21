import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from './IScorable';
import { ScoreContext } from './ScoreContext';

export class PlayCountAttribute implements IScoreAttribute {
  getName(): string {
    throw new Error('Method not implemented.');
  }

  calculateScore(_context: ScoreContext): number {
    return 2;
  }

  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
}
