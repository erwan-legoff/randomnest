import { Module } from '@nestjs/common';
import { RandomService } from './random.service';
import { ItemRepository } from './item.repository';

@Module({
  providers: [RandomService, ItemRepository],
  exports: [RandomService],
})
export class RandomModule {}
