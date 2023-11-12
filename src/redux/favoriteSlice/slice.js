import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: []
    },
    reducers: {
        addToFavoriteList(state, action) {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFavoriteList(state, action) {
            state.favorites = state.favorites.filter(car => car !== action.payload);
        },
    }
});
export const { addToFavoriteList, removeFavoriteList } = favoriteSlice.actions;