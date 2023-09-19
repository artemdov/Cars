import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CARS, SLICE_NAMES} from '../../constants/slices';
import {CarsInitialState, CarsResponse, GetCarsActionType} from "./types";

export const CARS_INITIAL_STATE: CarsInitialState = {
    error: '',
    isLoading: false,
    cars: []
};

const carsSlice = createSlice({
    initialState: CARS_INITIAL_STATE,
    name: SLICE_NAMES.CARS,
    reducers: {
        [CARS.GET_CARS_FAILURE](state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        [CARS.GET_CARS_FULFILL](state) {
            state.isLoading = false;
        },
        [CARS.GET_CARS_REQUEST](state) {
            state.isLoading = true;
        },
        [CARS.GET_CARS_SUCCESS](state, action: PayloadAction<CarsResponse[]>) {
            state.cars = action.payload
        },
        [CARS.GET_CARS_TRIGGER](_, __: PayloadAction<GetCarsActionType>) {
        },

    },
});

export const {actions: CARS_ACTIONS, reducer: carsReducer} = carsSlice;
