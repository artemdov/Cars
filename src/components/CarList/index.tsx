import React, {useEffect, useState} from 'react';
import {CARS_ACTIONS} from "../../state/reducers/cars";
import {useDispatch, useSelector} from "react-redux";
import {getCars, isLoading} from "../../state/selectors/cars";
import {CarListComponent} from "./CarListComponent";

export const CarList: React.FC = () => {
    const dispatch = useDispatch();
    const cars = useSelector(getCars);
    const isLoad = useSelector(isLoading);

    const [model, setModel] = useState('');

    useEffect(() => {
        if (!!model) {
            dispatch(CARS_ACTIONS.GET_CARS_TRIGGER({model}));
        }
    }, [dispatch]);

    const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    };

    const handleSearch = () => {
        dispatch(CARS_ACTIONS.GET_CARS_TRIGGER({model}));
    };

    return CarListComponent({
        isLoad,
        cars,
        model,
        handleModelChange,
        handleSearch,
    });
};
