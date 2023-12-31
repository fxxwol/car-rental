import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsSlice } from './carSlice/slice';
import msgpack from 'msgpack-lite';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { favoriteSlice } from './favoriteSlice/slice';

const favoritePersistConfig = {
    key: 'favorite',
    storage,
    transforms: [
        {
            in: (state) => {
                return msgpack.encode(state);
            },
            out: (state) => {
                return msgpack.decode(state);
            },
        },
    ],
    stateReconciler: autoMergeLevel2,
};

const carsPersistConfig = {
    key: 'car',
    storage,
    whitelist: ['filteredCars', 'isFiltered', 'filters', 'page'],
    transforms: [
        {
            in: (state) => {
                return msgpack.encode(state);
            },
            out: (state) => {
                return msgpack.decode(state);
            },
        },
    ],
    stateReconciler: autoMergeLevel2,
};

export const store = configureStore({
    reducer: {
        cars: persistReducer(carsPersistConfig, carsSlice.reducer),
        favorite: persistReducer(favoritePersistConfig, favoriteSlice.reducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);