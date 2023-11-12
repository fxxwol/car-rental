import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarsPage } from "./carsThunk";

export const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        filteredCars: [],
        allCars: [],
        cars: [],
        filters: {
            make: "",
            rentalPrice: "",
            startMileage: "",
            endMileage: ""
        },
        isFiltered: false,
        isLoading: false,
        error: null,
        page: 1,
        limit: 12,
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setIsFiltered: (state, action) => {
            state.isFiltered = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setFilteredCars: (state, action) => {
            state.filteredCars = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarsPage.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    cars: [...payload],
                    isLoading: false,
                }
            })
            .addCase(fetchCarsPage.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            })
            .addCase(fetchCarsPage.rejected, (state, { payload }) => {
                return {
                    ...state,
                    isLoading: false,
                    error: payload
                }
            })
            .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    allCars: payload
                }
            })
            .addCase(fetchAllCars.rejected, (state, { payload }) => {
                return {
                    ...state,
                    error: payload
                }
            })
    }
});

export const { setFilters, setFilteredCars, setPage, setIsFiltered, setIsLoading } = carsSlice.actions;
