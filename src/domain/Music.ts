import { Style } from 'util';
import { Artist } from './Artist';
import { IScorable } from './IScorable';
import { IScorableItem } from './IScorableItem';
import { ScoreContext } from './ScoreContext';
import { IscoreAttribute } from './IScoreAttribute';

export class Music implements IScorableItem {
  artist: Artist;
  style: Style;
  attributes: Array<IscoreAttribute>;
  constructor(artist: Artist) {
    this.artist = artist;
  }
  calculateScore(context: ScoreContext): number {
    throw new Error('Method not implemented.');
  }
  getScoreDependencies(): Array<IScorable> {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
}
