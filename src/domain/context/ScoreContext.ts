import { IContextStatCount, IContextStatDate } from './IContextStat';

export class ScoreContext {
  current: {
    likes: number;
    playCounts: number;
    lastPlayed: number;
  };
  collection: {
    likes: IContextStatCount;
    playCounts: IContextStatCount;
    lastPlayed: IContextStatDate;
  };
}
