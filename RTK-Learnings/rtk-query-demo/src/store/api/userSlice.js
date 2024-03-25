import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: () => `/users`,
      }),
    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useGetUserByIdQuery ,useGetUsersQuery} = userSlice;
