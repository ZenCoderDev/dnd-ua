import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const racesApi = createApi({
  reducerPath: "racesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getRaces: builder.query<RacesShort[], void>({
      query: () => "races", 
    }),
    getRaceById: builder.query<RacesLong, string>({
      query: (id) => `races/${id}`, 
    }),
    getSubraceById: builder.query<SubRacesLong[], string>({
      query: (id) => `subrace/${id}`, 
    }),
    getRaceTraitById: builder.query<TraitsLong[], string>({
      query: (id) => `traits/${id}`, 
    }),
  }),
});

export const { useGetRacesQuery, useGetRaceByIdQuery, useGetRaceTraitByIdQuery, useGetSubraceByIdQuery } = racesApi;
