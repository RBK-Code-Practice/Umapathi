import { apiSlice } from './apiSlice';

apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});


export const { useGetUsersQuery } = apiSlice;

