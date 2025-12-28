import { IScoreConfig } from '../score/types/IScoreConfig';

export class ReadCountScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 1000;
  readonly weightingFactor = 1;
}
