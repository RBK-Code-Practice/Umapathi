import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsSlice = createApi({
  reducerPath: 'api',
  refetchOnFocus:true,
  refetchOnReconnect:true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  //Defaults to 60 (this value is in seconds)
  keepUnusedDataFor: 10,
  // refetchOnMountOrArgChange: 30,
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      //Overrides the api-wide definition of keepUnusedDataFor for this endpoint only. (This value is in seconds.)
      keepUnusedDataFor: 5,
      
    }),
    listProducts: builder.query({
      query: (page = 1) => `products?limit=5&page=${page}`,
    }),
  }),
});

export const { useGetProductByIdQuery,useListProductsQuery } = productsSlice;