/* eslint-disable @typescript-eslint/no-unused-vars */
import { IScorable } from './IScorable';
import { IScorableItem } from './IScorableItem';
import { ScoreContext } from './ScoreContext';

export class Artist implements IScorableItem {
  calculateScore(context: ScoreContext): number {
    throw new Error('Method not implemented.');
  }
  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
}
