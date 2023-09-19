import React from 'react';
import {TRANSMISSION} from "../constants/carDescription";

export const getDriveTransmission = (transmission: string) => {
    switch (transmission) {
        case TRANSMISSION.FRONT:
            return 'передняя'
        case TRANSMISSION.REAR:
            return 'задняя'
        case TRANSMISSION.FULL:
            return 'полная'

        default:
            return '';
    }
};
