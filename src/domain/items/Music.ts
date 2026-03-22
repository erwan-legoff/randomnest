import { IScorable } from '../IScorable';
import { ScoreContext } from '../context/ScoreContext';
import { IScoreAttribute } from '../score-attributes/IScoreAttribute';
import { Artist } from './Artist';
import { IMusic } from './IMusic';
import { Style } from './Style';

export class Music implements IMusic {
  private id: string;
  private name: string;
  private artist: Artist;
  private style: Style;
  private attributes: Array<IScoreAttribute>;

  constructor(
    id: string,
    artist: Artist,
    style: Style,
    name: string = 'untitled',
    attributes: Array<IScoreAttribute> = [],
  ) {
    this.id = id;
    this.artist = artist;
    this.style = style;
    this.name = name;
    this.attributes = attributes;
  }

  calculateScore(context: ScoreContext): number {
    return (
      this.artist.calculateScore(context) +
      this.style.calculateScore(context) +
      this.attributes.reduce(
        (score, attribute) => score + attribute.calculateScore(context),
        0,
      )
    );
  }

  getScoreDependencies(): Array<IScorable> {
    return [this.artist, this.style];
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
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
