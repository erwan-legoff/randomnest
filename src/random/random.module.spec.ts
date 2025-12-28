import { Test, TestingModule } from '@nestjs/testing';
import { RandomModule } from './random.module';
import { RandomService } from './random.service';

describe('RandomModule', () => {
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [RandomModule],
    }).compile();
  });

  it('exposes RandomService', () => {
    const service = moduleRef.get(RandomService);
    expect(service).toBeDefined();
  });
});
