import { IScorable } from '../IScorable';
import { IScorableItem } from './IScorableItem';
import { ScoreContext } from '../context/ScoreContext';

export class Style implements IScorableItem {
  private id: string;
  private name: string;
  private scorables: IScorable[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  calculateScore(context: ScoreContext): number {
    return this.scorables.reduce(
      (score, scorable) => score + scorable.calculateScore(context),
      0,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return this.scorables;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  addScorable(scorable: IScorable): void {
    this.scorables.push(scorable);
  }
}
