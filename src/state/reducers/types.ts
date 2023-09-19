export type GetCarsActionType = {
    model: string;
};

export type CarsInitialState = {
    error: string;
    isLoading: boolean;
    cars: CarsResponse[];
};

export type CarsResponse = {
    city_mpg: 14,
    class: string,
    combination_mpg: 15,
    cylinders: 6,
    displacement: 3,
    drive: string,
    fuel_type: string,
    highway_mpg: 16,
    make: string,
    model: string,
    transmission: string,
    year: number
}
