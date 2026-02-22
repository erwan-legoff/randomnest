import { IScorable } from './IScorable';

export interface IScoreAttribute extends IScorable {
  getName(): string;
}
