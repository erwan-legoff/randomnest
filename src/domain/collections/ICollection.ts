import { IItem } from '../items/IItem';

export interface ICollection {
  getItems(): Array<IItem>;
}
