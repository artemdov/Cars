import React from 'react';
import carImage from '../../assets/images/carImage.jpeg';
import {CarDetailsPropsType} from "./types";
import styles from './styles.module.css';
import {getDriveTransmission} from "../../functions/getDriveTransmission";
import {getTransmissionType} from "../../functions/getTransmissionType";
import {getEngineType} from "../../functions/getEngineType";

export const CarDetailsComponent: React.FC<CarDetailsPropsType> = (props) => {
    const {car} = props

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <div>
            <h3 className={styles.carTitle}>{car.make} {car.model}</h3>
            <img src={carImage} alt={`${car.make} ${car.model}`} className={styles.carImage}/>
            <p>Приводная трансмиссия: {getDriveTransmission(car.drive)}</p>
            <p>Год: {car.year}</p>
            <p>Тип передачи: {getTransmissionType(car.transmission)}</p>
            <p>Тип двигателя: {getEngineType(car.fuel_type)}</p>
        </div>
    );
};
