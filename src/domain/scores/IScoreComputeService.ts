import { IContextStat } from '../context/IContextStat';
import { IContextStatDate } from '../context/IContextStat';

export interface IScoreComputeService {
  computeNormalizedCountScore(contexStat: IContextStat, count: number): number;
  computeNormalizedDateScore(
    contextStat: IContextStatDate,
    date: Date,
    moreRecentIsBetter: boolean,
  ): number;
}
