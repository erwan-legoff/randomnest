import { Injectable } from '@nestjs/common';
import { Collection } from './types/Collection';
import type { ItemRepository as ItemRepositoryContract } from './item-repository.contract';
import { Item } from './types/Item';

@Injectable()
export class ItemRepository implements ItemRepositoryContract {
  private itemCollections: Map<number, Collection> = new Map();

  async getCollection(id: number): Promise<Collection> {
    const collection = this.itemCollections.get(id);
    if (!collection) throw new Error(`Collection with id ${id} not found`);
    return Promise.resolve(collection);
  }

  createCollection(collection: Omit<Collection, 'id'>): Promise<number> {
    const id = this.itemCollections.size;
    this.itemCollections.set(id, { ...collection, id });
    return Promise.resolve(id);
  }

  async getItem(id: number, collectionId: number): Promise<Item> {
    const collection = await this.getCollection(collectionId);
    const item = collection.items.find((item) => item.id === id);
    if (!item)
      throw new Error(
        `Item with id ${id} not found in collection ${collectionId}`,
      );
    return Promise.resolve(item);
  }

  async addItem(item: Omit<Item, 'id'>, collectionId: number): Promise<number> {
    const collection = await this.getCollection(collectionId);
    const id = collection.items.length;
    collection.items.push({ ...item, id });
    return Promise.resolve(id);
  }

  async updateItem(item: Item): Promise<void> {
    const collection = await this.getCollection(item.collectionId);
    const idx = collection.items.findIndex((i) => i.id === item.id);
    if (idx === -1)
      throw new Error(
        `Item with id ${item.id} not found in collection ${item.collectionId}`,
      );
    collection.items[idx] = item;
    return Promise.resolve();
  }
}
