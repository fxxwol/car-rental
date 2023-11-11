import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654cdfad77200d6ba85997c9.mockapi.io/api/adverts/';


export const fetchAllCars = createAsyncThunk(
    "adverts/fetchAll",
    async (page, { rejectWithValue }) => {
        try {
            const res = await axios.get('/adverts', {
                params: {
                    page, 
                    limit: 12
                }
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

