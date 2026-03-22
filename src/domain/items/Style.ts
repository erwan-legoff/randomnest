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

  calculateScore(_context: ScoreContext): number {
    return this.scorables.reduce(
      (score, scorable) => score + scorable.calculateScore(_context),
      0,
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return this.scorables;
  }

  getId(): string {
    throw new Error('Method not implemented.');
  }

  getName(): string {
    throw new Error('Method not implemented.');
  }

  addScorable(_scorable: IScorable): void {
    throw new Error('Method not implemented.');
  }
}
