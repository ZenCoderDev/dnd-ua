import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roadmapApi = createApi({
  reducerPath: "roadmapApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getPlans: builder.query<Roadmap[], void>({
      query: () => "roadmap",
    }),
  }),
});

export const { useGetPlansQuery } = roadmapApi;
