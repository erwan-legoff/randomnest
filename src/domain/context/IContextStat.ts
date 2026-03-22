// export interface IContextStat {
//   total: number;
//   average: number;
//   median?: number;
//   min: number;
//   max: number;
//   ecartype?: number;
// }

export type IContextStat = IContextStatCount | IContextStatDate;

export interface IContextStatCount {
  total: number;
  average: number;
  median?: number;
  min: number;
  max: number;
  ecartype?: number;
}

export interface IContextStatDate {
  average: Date;
  min: Date;
  max: Date;
}
