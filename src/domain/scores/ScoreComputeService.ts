import { IContextStat } from '../context/IContextStat';
import { IScoreComputeService } from './IScoreComputeService';

export class ScoreComputeService implements IScoreComputeService {
  computeNormalizedCountScore(
    contextStat: IContextStat,
    count: number,
  ): number {
    return count / contextStat.average;
  }
}
