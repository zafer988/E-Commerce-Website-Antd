import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
}
export const fetchData = createAsyncThunk('products', async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
})
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})
export default productsSlice.reducer