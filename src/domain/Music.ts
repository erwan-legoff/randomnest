import { Style } from './Style';
import { Artist } from './Artist';
import { IScorable } from './IScorable';
import { ScoreContext } from './ScoreContext';
import { IScoreAttribute } from './IScoreAttribute';
import { IMusic } from './IMusic';

export class Music implements IMusic {
  artist: Artist;
  style: Style;
  attributes: Array<IScoreAttribute>;
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

  getArtist(): Artist {
    return this.artist;
  }

  getStyle(): Style {
    return this.style;
  }

  getAttributes(): Array<IScoreAttribute> {
    return this.attributes;
  }
}
