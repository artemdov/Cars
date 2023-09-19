import React from 'react';
import {CarList} from "../../components/CarList";
import styles from "../CarDetailsPage/styles.module.css";

export const CarListPage = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>CAR LIST</h1>
            <CarList/>
        </div>
    );
};
