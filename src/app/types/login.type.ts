import { FortesUserResponse } from './user.type';

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  user: FortesUserResponse;
}
