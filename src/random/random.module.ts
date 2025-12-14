import { Module } from '@nestjs/common';
import { RandomService } from './random.service';

@Module({
  providers: [RandomService]
})
export class RandomModule {}
