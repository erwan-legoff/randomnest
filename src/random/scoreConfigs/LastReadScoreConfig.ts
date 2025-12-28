import { Injectable } from '@nestjs/common';
import { IScoreConfig } from '../score/types/IScoreConfig';

@Injectable()
export class LastReadScoreConfig implements IScoreConfig {
  readonly defaultSafeValue = 1000;
  readonly weightingFactor = 1;
}
