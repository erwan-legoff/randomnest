import { IScoreConfig } from './IScoreConfig';

export interface IScoreComputer {
  computeScore(config: IScoreConfig): number;
}
