export interface Item {
  id: number;
  collectionId: number;
  lastReadDate: Date;
  manualReadCount: number;
  readCount: number;
  skipCount: number;
  readDuration: number;
  userNotation: number;
  autoNotation: number;
}
