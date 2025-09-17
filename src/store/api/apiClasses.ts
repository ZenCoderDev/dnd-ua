import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classesApi = createApi({
  reducerPath: "classesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getClasses: builder.query<ClassShort[], void>({
      query: () => "classes",
    }),
    getClassById: builder.query<ClassLong, string>({
      query: (id) => `classes/${id}`,
    }),
    getSubclasses: builder.query<SubclassType[], string>({
      query: (id) => `subclasses/${id}`,
    })
  }),
});

export const { useGetClassesQuery, useGetClassByIdQuery, useGetSubclassesQuery } = classesApi;
