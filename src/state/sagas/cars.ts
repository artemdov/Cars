import {call, put} from 'redux-saga/effects';
import {APIInstance} from '../../api';
import {CARS_ACTIONS} from "../reducers/cars";
import {PayloadAction} from "@reduxjs/toolkit";
import {GetCarsActionType} from "../reducers/types";

export function* cars(API: APIInstance, action: PayloadAction<GetCarsActionType>) {
    yield put(CARS_ACTIONS.GET_CARS_REQUEST());
    yield put(CARS_ACTIONS.GET_CARS_FAILURE(''));

    try {
        const {model} = action.payload;


        const data: Awaited<ReturnType<typeof API.getCars>> = yield call(API.getCars, {
            limit: 10,
            model,
        });

        if (data.status === 200) {

            // @ts-ignore
            yield put(CARS_ACTIONS.GET_CARS_SUCCESS(data.data));
        }
    } catch (error) {
        yield put(
            // @ts-ignore
            CARS_ACTIONS.GET_CARS_FAILURE(error ?? ''),
        );
    } finally {
        yield put(CARS_ACTIONS.GET_CARS_FULFILL());
    }
}
