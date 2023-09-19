import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectedCar} from "../../state/selectors/cars";
import {RootState} from "../../state";
import {CarDetailsComponent} from "./CarDetailsComponent";

export const CarDetails: React.FC = () => {
    const { model = '' } = useParams<{ model: string }>();
    const car = useSelector((state: RootState) => selectedCar(state, model));

    return CarDetailsComponent({
        car,
    });
};
