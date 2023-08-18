import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
})
// export const fetchCategoryProducts = createAsyncThunk('fetchProducts', async (category)=>{
//     const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//     return res.json();
// })

const productsSlice = createSlice({
    name:'products',
    initialState: {
        isLoading: false,
        isError: false,
        products: [],
        menProducts: [],
        womenProducts: [],
    },
    reducers:{
        
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isError= true;
            console.log(action.payload);
        })

    }
})

export default productsSlice;