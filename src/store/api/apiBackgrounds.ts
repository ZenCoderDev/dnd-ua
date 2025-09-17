import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const backgroundsApi = createApi({
  reducerPath: "backgroundsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBackgrounds: builder.query<BackgroundsDesc[], void>({
      query: () => "backgrounds",
    }),
  }),
});

export const { useGetBackgroundsQuery } = backgroundsApi;
