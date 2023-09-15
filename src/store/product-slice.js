import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isError: false,
        products: [],
    },
    reducers: {
       
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true;
            console.log(action.payload);
        })

    }
})

export const productsActions = productsSlice.actions;

export default productsSlice;