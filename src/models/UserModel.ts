import { UserProfileModel } from './UserProfileModel';

export interface UserModel {
  email: string;
  uuid: string;
  profile: UserProfileModel;
}
