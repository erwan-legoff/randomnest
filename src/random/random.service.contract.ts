import { Item } from './types/Item';

export interface RandomServiceContract {
  getNextRandomItem(collectionId: number): Promise<Item>;
}
