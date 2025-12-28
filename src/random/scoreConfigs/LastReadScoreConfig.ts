import { IScoreConfig } from '../score/types/IScoreConfig';

export class LastReadScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 1000;
  readonly weightingFactor = 1;
}
