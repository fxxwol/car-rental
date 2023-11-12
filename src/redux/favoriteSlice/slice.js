import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
        favFiltered:[],
        favFilters: {
            make: "",
            rentalPrice: "",
            startMileage: "",
            endMileage: ""
        },
        isFavFiltered: false
    },
    reducers: {
        setIsFavFiltered: (state, action) => {
            state.isFavFiltered = action.payload
        },
        setFavFilters: (state, action) => {
            state.favFilters = { ...state.favFilters, ...action.payload };
        },
        addToFavoriteList(state, action) {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFavoriteList(state, action) {
            state.favorites = state.favorites.filter(car => car !== action.payload);
        },
        setFavFiltered: (state, action) => {
            state.favFiltered = action.payload
        },
    }
});
export const { addToFavoriteList, setFavFiltered, removeFavoriteList, setFavFilters, setIsFavFiltered } = favoriteSlice.actions;