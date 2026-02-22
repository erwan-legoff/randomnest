import { IItem } from './IItem';

export interface ICollection {
  getItems(): Array<IItem>;
}
