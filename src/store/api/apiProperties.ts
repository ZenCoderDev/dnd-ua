import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Property {
  id: string;
  name: string;
  description: string;
}

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProperties: builder.query<Property[], void>({
      query: () => "properties",
    }),
  }),
});

export const { useGetPropertiesQuery } = propertiesApi;