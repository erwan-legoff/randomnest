import { ScoreContext } from './context/ScoreContext';

export interface IScorable {
  calculateScore(context: ScoreContext): number;
  getScoreDependencies(): Array<IScorable>;
}
