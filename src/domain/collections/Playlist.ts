import { IScorableCollection } from './IScorableCollection';
import { IScorableItem } from '../items/IScorableItem';

export class Playlist implements IScorableCollection {
  public items: Array<IScorableItem> = [];

  getItems(): Array<IScorableItem> {
    throw new Error('Method not implemented.');
  }
}
