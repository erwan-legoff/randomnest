import { Item } from './Item';

export interface Collection {
  id: number;
  averageLastReadHours: number;
  lastReadDate: Date;
  lastItemId: number;
  readCount: number;
  readDuration: number;
  averageSkipRatio: number;
  items: Item[];
}
