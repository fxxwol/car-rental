import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars } from "./carsThunk";

export const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        filters: {
            make: "",
            rentalPrice: "",
            startMileage: "",
            endMileage: ""
        },
        isLoading: false,
        error: null,
        page: 1,
        limit: 12,
        hasMore: true
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    cars: [...payload],
                    isLoading: false,
                    hasMore: payload.length === state.limit
                }
            })
            .addCase(fetchAllCars.pending, (state) => {
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            })
            .addCase(fetchAllCars.rejected, (state, { payload }) => {
                return {
                    ...state,
                    isLoading: false,
                    error: payload
                }
            })
    }
});

export const { setFilters, setPage } = carsSlice.actions;
