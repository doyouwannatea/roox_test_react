import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { User } from 'models/User';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = jsonPlaceholderApi;
