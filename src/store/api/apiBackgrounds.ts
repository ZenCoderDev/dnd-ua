import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const backgroundsApi = createApi({
  reducerPath: "backgroundsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBackgrounds: builder.query<BackgroundsDesc[], void>({
      query: () => "backgrounds",
    }),
    getFeats: builder.query<FeatDesc[], void>({
      query: () => "feats",
    }),
  }),
});

export const { useGetBackgroundsQuery, useGetFeatsQuery } = backgroundsApi;
