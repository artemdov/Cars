import React from 'react';
import carImage from '../../assets/images/carImage.jpeg';
import {Link} from "react-router-dom";
import {CarListPropsType} from "./types";
import styles from "./styles.module.css";

export const CarListComponent: React.FC<CarListPropsType> = (props) => {

    const {
        cars,
        handleModelChange,
        handleSearch,
        isLoad,
        model,
    } = props


    if (isLoad) {
        return <div className={styles.loader}>Loading...</div>;
    }

    return (
        <div>
            <h3>Enter the car name</h3>
            <input type="text" value={model} onChange={handleModelChange}/>
            <button className={styles.button} onClick={handleSearch}>Search</button>
            {cars.map((car) => (
                <div key={`${car.model}${car.make}`}>
                    <img src={carImage} alt={`${car.make} ${car.model}`}/>
                    <div>
                        <Link to={`/cars/${car.model}`}>
                            {car.make} {car.model} ({car.year})
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
