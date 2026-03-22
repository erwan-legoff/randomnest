import { IScorable } from '../IScorable';
import { IScorableItem } from './IScorableItem';
import { ScoreContext } from '../context/ScoreContext';

export class Artist implements IScorableItem {
  calculateScore(context: ScoreContext): number {
    return this.getScoreDependencies().reduce(
      (score, dependency) => score + dependency.calculateScore(context),
      0,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return [];
  }

  getId(): string {
    throw new Error('Method not implemented.');
  }

  getName(): string {
    return 'Artist';
  }
}
