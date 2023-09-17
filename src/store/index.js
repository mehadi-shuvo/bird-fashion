import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product-slice";
import visitedSlice from "./visited-slice";
import categoryProductSlice from "./category-product";
import { productsApiSlice } from "./products-slice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        visited: visitedSlice,
        category: categoryProductSlice.reducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
        userSlice : userSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});

export default store;