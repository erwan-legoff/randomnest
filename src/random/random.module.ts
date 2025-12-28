import { Module } from '@nestjs/common';
import { RandomService } from './random.service';
import { ItemRepository } from './item.repository';
import { ReadCountScoreConfig } from './scoreConfigs/ReadCountScoreConfig';
import { LastReadScoreConfig } from './scoreConfigs/LastReadScoreConfig';
import { SkipRatioScoreConfig } from './scoreConfigs/SkipRatioScoreConfig';

@Module({
  providers: [
    RandomService,
    ItemRepository,
    ReadCountScoreConfig,
    LastReadScoreConfig,
    SkipRatioScoreConfig,
  ],
  exports: [RandomService],
})
export class RandomModule {}
