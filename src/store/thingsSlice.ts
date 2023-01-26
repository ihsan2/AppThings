import {StateCreator} from 'zustand';
import {IThingsResponse} from '../models/api/things';

export interface IThingsSlice {
  things: IThingsResponse[];
  setListThings: (things: IThingsResponse[]) => void;
}

export const createThingsSlice: StateCreator<IThingsSlice> = set => ({
  things: [],
  setListThings(things) {
    set({things});
  },
});
