import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product-slice";
import visitedSlice from "./visited-slice";


const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        visited: visitedSlice,
    }
});

export default store;