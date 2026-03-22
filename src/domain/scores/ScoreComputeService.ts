import { addDays, differenceInDays } from 'date-fns';
import { IContextStatCount, IContextStatDate } from '../context/IContextStat';
import { IScoreComputeService } from './IScoreComputeService';
import { substractionInDays } from '../tools/dates.tools';

export class ScoreComputeService implements IScoreComputeService {
  computeNormalizedCountScore(
    contextStat: IContextStatCount,
    count: number,
  ): number {
    return count / contextStat.average;
  }

  computeNormalizedDateScore(
    contextStat: IContextStatDate,
    date: Date,
    moreRecentIsBetter: boolean,
  ): number {
    let dateInDays = substractionInDays(contextStat.min, date);
    if (dateInDays < 0) dateInDays = 0;
    const averageInDays = substractionInDays(
      contextStat.min,
      contextStat.average,
    );
    const sign = moreRecentIsBetter ? 1 : -1;
    return sign * (dateInDays - averageInDays);
  }
}
