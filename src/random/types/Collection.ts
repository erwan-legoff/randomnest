import { Item } from './Item';

export interface Collection {
  id: number;
  averageLastReadHours: number;
  lastReadDate: Date;
  lastItemId: number;
  readCount: number;
  readDuration: number;
  items: Item[];
}
