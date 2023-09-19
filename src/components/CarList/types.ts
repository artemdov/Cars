import {CarsResponse} from "../../state/reducers/types";
import {ChangeEvent} from "react";

export type CarListPropsType = {
    isLoad: boolean;
    cars: CarsResponse[];
    model: CarsResponse['model'];

    handleModelChange(e: ChangeEvent<HTMLInputElement>): void;
    handleSearch(): void;
}
