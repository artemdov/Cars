import type {AxiosInstance} from 'axios';
import {URLS} from "../../../constants/urls";
import {GetCarsRequestParamsType} from "./types";
import {CarsResponse} from "../../../state/reducers/types";

export const createCarsModule = (axiosInstance: AxiosInstance) => {
    const getCars = (params: GetCarsRequestParamsType) => {
        return axiosInstance.get<CarsResponse[]>(URLS.CARS, {params});
    };

    return {
        getCars,
    };
};
