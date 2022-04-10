import { AxiosResponse } from 'axios';
import { SignInFormModel, SignUpFormModel } from '../models/AuthModel';
import { $api } from '../https';
import { apiRoutes } from './helpers/apiRoutes';

export default class AuthService {
  static signIn(signInForm: SignInFormModel): Promise<AxiosResponse<unknown>> {
    return $api.post<unknown>(apiRoutes.auth.login(), signInForm);
  }
}
