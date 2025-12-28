import { IScoreConfig } from '../score/types/IScoreConfig';

export class SkipRatioScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 0;
  readonly weightingFactor = -1;
}
