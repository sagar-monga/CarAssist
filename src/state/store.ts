import { create } from 'zustand';
import { CarSlice, createCarSlice } from './slices/carSlice';

type Global = CarSlice;

export const useGlobalStore = create<Global>((...a) => ({
  ...createCarSlice(...a),
}));
