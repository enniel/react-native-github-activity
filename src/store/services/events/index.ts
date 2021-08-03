import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Events } from './types';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: builder => ({
    getEvents: builder.query<Events, number>({
      query: perPage => `events?per_page=${perPage}`,
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;

export const useEventsQueryState = eventsApi.endpoints.getEvents.useQueryState;
