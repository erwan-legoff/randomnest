import { IScoreAttribute } from './IScoreAttribute';
import { IScorable } from './IScorable';
import { ScoreContext } from './ScoreContext';

export class RecencyAttribute implements IScoreAttribute {
  getName(): string {
    throw new Error('Method not implemented.');
  }

  calculateScore(_context: ScoreContext): number {
    throw new Error('Method not implemented.');
  }

  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
}
