import React from 'react';
import {ENGINE_TYPE} from "../constants/carDescription";

export const getEngineType = (transmissionType: string) => {
    switch (transmissionType) {
        case ENGINE_TYPE.GAS:
            return 'газ'
        case ENGINE_TYPE.DIESEL:
            return 'бензин'
        case ENGINE_TYPE.ELECTRIC:
            return 'электрический'

        default:
            return '';
    }
};
