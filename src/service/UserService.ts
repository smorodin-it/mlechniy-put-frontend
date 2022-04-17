import { UserModel } from '../models/UserModel';
import { AxiosResponse } from 'axios';
import $api from '../https';
import { ResponseAdd } from '../models/ResponeApiModel';
import { apiRoutes } from './helpers/apiRoutes';

export class UserService {
  static async retrieveUser(userId: string): Promise<AxiosResponse<UserModel>> {
    return $api.get<UserModel>(apiRoutes.users.retrieve(userId));
  }

  static async listParticipants(): Promise<AxiosResponse<UserModel[]>> {
    return $api.get<UserModel[]>(apiRoutes.users.listParticipants());
  }

  static async createParticipant(
    participant: UserModel
  ): Promise<AxiosResponse<ResponseAdd>> {
    return $api.post<ResponseAdd>(
      apiRoutes.users.createParticipant(),
      participant
    );
  }

  static async listAdjudicators(): Promise<AxiosResponse<UserModel[]>> {
    return $api.get<UserModel[]>(apiRoutes.users.listAdjudicators());
  }

  static async createAdjudicators(
    adjudicator: UserModel
  ): Promise<AxiosResponse<ResponseAdd>> {
    return $api.post<ResponseAdd>(
      apiRoutes.users.createAdjudicator(),
      adjudicator
    );
  }
}
