import { Injectable } from '@nestjs/common';
import { IScoreConfig } from '../score/types/IScoreConfig';

@Injectable()
export class SkipRatioScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 0;
  readonly weightingFactor = -1;
}
