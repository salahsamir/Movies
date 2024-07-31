
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApiSlice=createApi({

  tagTypes: ["Product"],
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: (arg) => ({
        url: "/products",
      
      }),
    }),
    fetchSingleProduct: builder.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),
})

})
export const {useFetchProductQuery,useFetchSingleProductQuery}=productApiSlice
