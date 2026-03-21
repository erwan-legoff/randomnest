import { IContextStat } from './IContextStat';
import { IScoreComputeService } from './IScoreComputeService';

export class ScoreComputeService implements IScoreComputeService {
  computeNormalizedCountScore(
    _contexStat: IContextStat,
    count: number,
  ): number {
    return count / _contexStat.average;
  }
}
