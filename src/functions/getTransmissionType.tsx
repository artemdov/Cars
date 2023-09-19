import React from 'react';
import {TRANSMISSION, TRANSMISSION_TYPE} from "../constants/carDescription";

export const getTransmissionType = (transmissionType: string) => {
    switch (transmissionType) {
        case TRANSMISSION_TYPE.MANUAL:
            return 'механика'
        case TRANSMISSION_TYPE.AUTO:
            return 'автомат'

        default:
            return '';
    }
};
