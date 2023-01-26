import {ILoginRequest} from '../models/api/login';
import { IRegisterRequest } from '../models/api/register';
import {apiClient} from './client';

export class ApiService {
  doLogin = async ({login, password}: ILoginRequest) => {
    const response = await apiClient().request.post<any>('/users/login', {
      login,
      password,
    });
    return response.data;
  };

  doRegister = async ({name, email, password}: IRegisterRequest) => {
    const response = await apiClient('').request.post<any>('/users/register', {
      name,
      email,
      password,
    });
    return response.data;
  };

  getDataThings = async (token: string) => {
    const response = await apiClient(token).request.get<any>('/data/things');
    return response.data;
  };
}
