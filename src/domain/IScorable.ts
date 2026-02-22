import { ScoreContext } from './ScoreContext';

export interface IScorable {
  calculateScore(context: ScoreContext): number;
  getScoreDependencies(): Array<IScorable>;
}
