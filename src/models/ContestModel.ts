import { UserModel } from './UserModel';

export interface ContestModel {
  readonly uuid: string;
  readonly title: string;
  readonly description: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly published: string;
  readonly adjudicators: UserModel;
  readonly participants: UserModel;
}
