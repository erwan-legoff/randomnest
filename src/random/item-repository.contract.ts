import { Collection } from './types/Collection';
import { Item } from './types/Item';

export interface ItemRepository {
  getCollection(id: number): Promise<Collection>;
  createCollection(collection: Omit<Collection, 'id'>): Promise<number>;

  getItem(id: number, collectionId: number): Promise<Item>;
  addItem(item: Omit<Item, 'id'>, collectionId: number): Promise<number>;
  updateItem(item: Item): Promise<void>;
}
