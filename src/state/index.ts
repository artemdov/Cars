import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import {rootSaga} from "./sagas";
import {rootReducer} from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
