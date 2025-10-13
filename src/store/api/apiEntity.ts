// store/entitiesApi.ts
import { EntityViewModel } from "@/types/Entity";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const entitiesApi = createApi({
  reducerPath: "entitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getEntityBySlug: builder.query<EntityViewModel, string>({
      query: (slug) => `entity/${slug}`,
      transformResponse: (response: { data: EntityViewModel }) => response.data,
    }),
  }),
});

export const { useGetEntityBySlugQuery } = entitiesApi;
