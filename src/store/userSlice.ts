import {StateCreator} from 'zustand';
import {IUserResponse} from '../models/api/user';

export interface IUserSlice {
  isLoggedIn: boolean;
  user: IUserResponse;
  token: string;
  setUser: (isLoggedIn: boolean, user: IUserResponse, token: string) => void;
  logout: () => void;
}

export const createUserSlice: StateCreator<IUserSlice> = set => ({
  isLoggedIn: false,
  user: {
    userId: '',
    name: '',
    email: '',
  },
  token: '',
  setUser(isLoggedIn, user, token) {
    set({isLoggedIn, user, token});
  },
  logout() {
    set({
      isLoggedIn: false,
      token: '',
      user: {userId: '', name: '', email: ''},
    });
  },
});
