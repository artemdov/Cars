import React from 'react';
import {CarDetails} from "../../components/CarDetails";
import styles from './styles.module.css';

export const CarDetailsPage = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>CAR DETAILS</h1>
            <CarDetails />
        </div>
    );
};
