import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SpellFilters {
  level?: number;
  school?: string;
  search?: string;
}

export const spellsApi = createApi({
  reducerPath: "spellsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getAllSpells: builder.query<SpellObj[], SpellFilters | void>({
      query: (params) => {
        if (!params) return "api/spells";

        const queryString = new URLSearchParams(
          Object.entries(params).reduce<Record<string, string>>((acc, [key, value]) => {
            if (value !== undefined) acc[key] = String(value);
            return acc;
          }, {})
        ).toString();

        return `api/spells?${queryString}`;
      },
    }),
  }),
});

export const { useGetAllSpellsQuery } = spellsApi;
