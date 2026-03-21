import { IContextStat } from './IContextStat';

export interface IScoreComputeService {
  computeNormalizedCountScore(contexStat: IContextStat, count: number): number;
}
