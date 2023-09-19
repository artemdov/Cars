import {combineReducers} from '@reduxjs/toolkit';
import {SLICE_KEYS} from '../../constants/slices';
import {carsReducer} from "./cars";

export const rootReducer = combineReducers({
    [SLICE_KEYS.CARS]: carsReducer,

});
