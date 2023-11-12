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
        hasMore: true,
        hasMoreFiltered: false
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
        seFilteredCars: (state, action) => {
            state.filteredCars = action.payload
            state.hasMoreFiltered = action.payload.length > state.limit
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarsPage.fulfilled, (state, { payload }) => {
                let updatedCars;
                if (state.page === 1) {
                    updatedCars = [...payload];
                } else {
                    updatedCars = [...state.cars, ...payload];
                }
                return {
                    ...state,
                    cars: updatedCars,
                    isLoading: false,
                    hasMore: payload.length === state.limit
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

export const { setFilters, setPage, setIsFiltered, seFilteredCars } = carsSlice.actions;
