import { Injectable } from '@nestjs/common';
import { RandomServiceContract } from './random.service.contract';
import { Item } from './types/Item';
import { ItemRepository } from './item.repository';
import { Collection } from './types/Collection';
import { differenceInMinutes } from 'date-fns';
import { safeRatio } from 'src/maths/mathsUtils';
import { ReadCountScoreConfig } from './scoreConfigs/ReadCountScoreConfig';
import { LastReadScoreConfig } from './scoreConfigs/LastReadScoreConfig';

@Injectable()
export class RandomService implements RandomServiceContract {
  private readonly readCountScoreConfig = new ReadCountScoreConfig();
  private readonly lastReadScoreConfig = new LastReadScoreConfig();

  constructor(private readonly itemRepository: ItemRepository) {}
  async getNextRandomItem(collectionId: number): Promise<Item> {
    const collection = await this.itemRepository.getCollection(collectionId);
    const items = collection.items;
    const probabilities: Map<number, number> = new Map();
    for (const item of items) {
      const probability = 1 / items.length;
      probabilities.set(item.id, probability);
    }
    const randomId = Math.random() * items.length - 1;
    return this.itemRepository.getItem(randomId, collectionId);
  }

  computeScore(item: Item, collection: Collection): number {
    let score = 1;
    if (item.id === collection.lastItemId) return 0;

    score += this.calculateLastReadScore(item, collection);

    score += this.calculateReadCountScore(collection, item);
    return score;
  }

  private calculateReadCountScore(collection: Collection, item: Item) {
    const averageReadCount = collection.readCount / collection.items.length;
    const readCountDifference = averageReadCount - item.readCount;
    return this.safeRatioWeigthed(
      readCountDifference,
      averageReadCount,
      this.readCountScoreConfig,
    );
  }

  private calculateLastReadScore(item: Item, collection: Collection) {
    const lastReadHours =
      differenceInMinutes(item.lastReadDate, new Date()) / 60;
    const deltaBetweenAverage = collection.averageLastReadHours - lastReadHours;
    return this.safeRatioWeigthed(
      deltaBetweenAverage,
      collection.averageLastReadHours,
      this.lastReadScoreConfig,
    );
  }

  private safeRatioWeigthed(
    numerator: number,
    denominator: number,
    config: { defaultSafeValue: number; weightingFactor: number },
  ): number {
    return (
      safeRatio(numerator, denominator, config.defaultSafeValue) *
      config.weightingFactor
    );
  }
}
