import { UserModel } from './UserModel';
import { ContestModel } from './ContestModel';

export interface StoryModel {
  readonly uuid: string;
  readonly title: string;
  readonly file: string;
  readonly author: UserModel;
  readonly contest: ContestModel;
}
