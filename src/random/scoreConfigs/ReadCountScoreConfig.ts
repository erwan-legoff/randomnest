import { Injectable } from '@nestjs/common';
import { IScoreConfig } from '../score/types/IScoreConfig';

@Injectable()
export class ReadCountScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 1000;
  readonly weightingFactor = 1;
}
