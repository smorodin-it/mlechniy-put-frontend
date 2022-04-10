import { UserModel } from './UserModel';
import { StoryModel } from './StoryModel';

export interface ContestRateModel {
  readonly uuid: string;
  readonly rate: number;
  readonly adjudicator: UserModel;
  readonly story: StoryModel;
}
