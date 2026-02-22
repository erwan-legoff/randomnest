import { ICollection } from './ICollection';
import { IScorableItem } from './IScorableItem';

export interface IScorableCollection extends ICollection {
  getItems(): Array<IScorableItem>;
}
