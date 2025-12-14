import { Injectable } from '@nestjs/common';
import { RandomServiceContract } from './random.service.contract';
import { Item } from './types/Item';
import { ItemRepository } from './item.repository';

@Injectable()
export class RandomService implements RandomServiceContract {
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
}
