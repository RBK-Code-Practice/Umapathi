import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  refetchOnFocus:true,
  tagTypes:['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
          query: () => "/products",
          providesTags:'Products'
        }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery, usePrefetch } = apiSlice;




