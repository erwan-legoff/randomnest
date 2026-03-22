import { IContextStat } from '../context/IContextStat';

export interface IScoreComputeService {
  computeNormalizedCountScore(contexStat: IContextStat, count: number): number;
}
