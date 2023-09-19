import {all, spawn, takeLatest as takeLatestOriginal} from 'redux-saga/effects';
import {API_URL, APIInstance, createAPI} from '../../api';
import {cars} from "./cars";
import {CARS_ACTIONS} from "../reducers/cars";

const API = createAPI({
    baseURL: API_URL ?? '',
    headers: {'X-Api-Key': 'P22/WqJ9nwApgmA+5jpNOA==Tp79Eic1vRGl9rxn'},
});

const takeLatestWithAPI = (APIInstance: APIInstance) => {
    // @ts-ignore
    return (...firstArgs) => {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return takeLatestOriginal(...firstArgs, APIInstance);
    };
};

const takeLatest = takeLatestWithAPI(API);

const TRIGGERS = [
    [CARS_ACTIONS.GET_CARS_TRIGGER.type, cars],
];

function* spawnTriggers() {
    yield all(
        TRIGGERS.map((trigger) => {
            return takeLatest(...trigger);
        }),
    );
}

export function* rootSaga() {
    yield spawn(spawnTriggers);
}
