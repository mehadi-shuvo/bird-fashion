import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProductToCart: (state, {payload}) =>{

        },
        getProductsFromCart: (state, {payload}) =>{

        }
    }
});

export const {addProductToCart, getProductsFromCart} = cartSlice.actions;
export default cartSlice.reducer;