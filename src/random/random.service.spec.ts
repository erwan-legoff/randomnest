import { Test, TestingModule } from '@nestjs/testing';
import { RandomService } from './random.service';
import { ItemRepository } from './item.repository';
import { ReadCountScoreConfig } from './scoreConfigs/ReadCountScoreConfig';
import { LastReadScoreConfig } from './scoreConfigs/LastReadScoreConfig';
import { SkipRatioScoreConfig } from './scoreConfigs/SkipRatioScoreConfig';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RandomService,
        {
          provide: ItemRepository,
          useValue: {},
        },
        ReadCountScoreConfig,
        LastReadScoreConfig,
        SkipRatioScoreConfig,
      ],
    }).compile();

    service = module.get<RandomService>(RandomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
