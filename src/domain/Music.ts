import { Style } from './Style';
import { Artist } from './Artist';
import { IScorable } from './IScorable';
import { ScoreContext } from './ScoreContext';
import { IScoreAttribute } from './IScoreAttribute';
import { IMusic } from './IMusic';

export class Music implements IMusic {
  public artist: Artist;
  public style: Style;
  public attributes: Array<IScoreAttribute>;

  constructor(
    artist: Artist,
    style: Style,
    attributes: Array<IScoreAttribute> = [],
  ) {
    this.artist = artist;
    this.style = style;
    this.attributes = attributes;
  }

  calculateScore(_context: ScoreContext): number {
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
    throw new Error('Method not implemented.');
  }

  getStyle(): Style {
    throw new Error('Method not implemented.');
  }

  getAttributes(): Array<IScoreAttribute> {
    throw new Error('Method not implemented.');
  }
}
