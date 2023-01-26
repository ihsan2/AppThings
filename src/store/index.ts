import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';
import { createThingsSlice, IThingsSlice } from './thingsSlice';
import {createUserSlice, IUserSlice} from './userSlice';

/**
 * Make sure to enforce type for each slice
 */

interface IStore extends IUserSlice, IThingsSlice {}

export const useStore = create<IStore>()(
  devtools(
    persist(
      (set, get, api) => ({
        ...createUserSlice(set, get, api),
        ...createThingsSlice(set, get, api),
      }),
      {
        name: 'appStorage',
        getStorage: () => AsyncStorage
      },
    ),
  ),
);
