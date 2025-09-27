import { GameRule } from "@/types/GameRule";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rulesApi = createApi({
  reducerPath: "rulesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getRulesByCategory: builder.query<GameRule[], string>({
      // category: "combat" | "magic" | ...
      query: (category) => `rules/${category}`,
    }),
  }),
});

export const { useGetRulesByCategoryQuery } = rulesApi;
