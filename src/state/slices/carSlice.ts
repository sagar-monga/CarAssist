import { StateCreator } from 'zustand';

type CarFunctions = {
  addCar: (make: string, model: string, year: number) => void;
};

export type CarSlice = CarFunctions & {
  cars: Car[];
};

export const createCarSlice: StateCreator<CarSlice> = (set, get) => ({
  cars: [],
  addCar: (make, model, year) => {
    const newCar: Car = {
      make: make,
      model: model,
      year: year,
    };

    set(state => ({
      cars: [...state.cars, newCar],
    }));
  },
});
