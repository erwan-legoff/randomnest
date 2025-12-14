import { Item } from './Item';

export interface Collection {
  id: number;
  readCount: number;
  readDuration: number;
  items: Item[];
}
