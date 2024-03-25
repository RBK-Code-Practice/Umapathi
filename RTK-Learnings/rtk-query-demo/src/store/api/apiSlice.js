import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//without basequery
const fetchProducts = async () => {
  const response = await axios.get("http://localhost:8000/products");
  const data = await response.data;
  return data;
};

// const transformProducts = (response) => {
//   return response.map((product) => ({
//     id: product.id,
//     title: product.title.toUpperCase(),
//   }));
// };
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Products"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
        getProducts: builder.query({
          query: () => "/products",
          // transformResponse: transformProducts,
          providesTags: ["Products"],
        }),

    // getProducts: builder.query({
    //   async queryFn() {
    //     const data = await fetchProducts();
    //     console.log("data", data);
    //     return { data };
    //   },
    //   providesTags: ['Products']
    // }), //get by id, tagtype ,cache
    addProduct: builder.mutation({
      invalidatesTags: ["Products"],
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});


//other slices
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
      count: 0,
    },
    reducers: {
      increment: (state) => {
        state.count += 1;
      }
    },
  });

export const { increment,decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const { useGetProductsQuery, useAddProductMutation } = apiSlice;
