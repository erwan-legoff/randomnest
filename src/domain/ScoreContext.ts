import { IContextStat } from './IContextStat';

export class ScoreContext {
  current: {
    likes: number;
    playCounts: number;
    lastPlayed: number;
  };
  collection: {
    likes: IContextStat;
    playCounts: IContextStat;
    lastPlayed: IContextStat;
  };
}
