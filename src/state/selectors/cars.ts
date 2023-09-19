import {RootState} from "../index";

export const getCars = (state: RootState) => state.cars.cars;

export const selectedCar = (state: RootState, model: string) => (state.cars.cars.find(car => car.model === model))

export const isLoading = (state: RootState) => state.cars.isLoading;
