import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: 'productsApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getSpecificCategoryProducts: builder.query({
      query: (category) => `products/category/${category}`,
    })
  }),
});

export const { useGetAllProductsQuery, useGetSpecificCategoryProductsQuery } = productsApiSlice;