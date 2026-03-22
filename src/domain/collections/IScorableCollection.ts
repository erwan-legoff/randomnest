import { ICollection } from './ICollection';
import { IScorableItem } from '../items/IScorableItem';

export interface IScorableCollection extends ICollection {
  getItems(): Array<IScorableItem>;
}
