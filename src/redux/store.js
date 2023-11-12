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

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

const carsPersistConfig = {
    key: 'car',
    storage,
    whitelist: ['filteredCars', 'isFiltered', 'filters'],
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
        // favoritre: fav.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);