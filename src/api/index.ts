import axios, {AxiosRequestConfig} from 'axios';
import {createCarsModule} from "./modules/cars";

export const API_URL = 'https://api.api-ninjas.com/v1/';

export type APIInstance = ReturnType<typeof createAPI>;

export const createAPI = (config: AxiosRequestConfig) => {
    const axiosInstance = axios.create(config);

    const carsModule = createCarsModule(axiosInstance);


    return {
        ...carsModule,
        axiosInstance,
    };
};
