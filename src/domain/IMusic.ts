import { Artist } from './Artist';
import { IScoreAttribute } from './IScoreAttribute';
import { IScorableItem } from './IScorableItem';
import { Style } from './Style';

export interface IMusic extends IScorableItem {
  getArtist(): Artist;
  getStyle(): Style;
  getAttributes(): Array<IScoreAttribute>;
}
