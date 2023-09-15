import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategoryProducts = createAsyncThunk('fetchCategoryProducts', async(category)=>{
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json();
})

const categoryProductSlice = createSlice({
    name: 'category',
    initialState:{
        isLoading: false,
        isError: false,
        products: [],
        men: false,
        women: false,
        jewellery: false,
    },

    reducers: {
        fetchCategoryProducts(state, action) {
            const category = action.payload
            if (category === "men's clothing") {
                state.men = true;
                state.women = false;
                state.jewellery = false;
            }
            else if (category === "women's clothing") {
                state.men = false;
                state.women = true;
                state.jewellery = false;
            } else {
                state.men = false;
                state.women = false;
                state.jewellery = true;
            }
            
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCategoryProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
            state.isError = true;
            console.log(action.payload);
        })

    }

})

export const categoryActions = categoryProductSlice.actions;
export default categoryProductSlice;