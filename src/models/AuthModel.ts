import { UserProfileModel } from './UserProfileModel';

export interface SignInFormModel {
  readonly email: string;
  readonly password: string;
}

export interface SignUpFormModel extends UserProfileModel {
  readonly email: string;
  readonly password: string;
  readonly passwordConfirm: string;
  readonly storyFile: File | null;
  readonly storyTitle: string;
}
