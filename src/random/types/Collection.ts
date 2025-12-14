import { Item } from './Item';

export interface Collection {
  id: number;
  lastReadDate: Date;
  lastItemId: number;
  readCount: number;
  readDuration: number;
  items: Item[];
}
