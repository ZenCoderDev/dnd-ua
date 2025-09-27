import { MagicItem } from "@/types/MagicItem";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MagicItemFilters {
  rarity?: string;
  type?: string;
  search?: string;
}

export const magicItemsApi = createApi({
  reducerPath: "magicItemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getAllMagicItems: builder.query<MagicItem[], MagicItemFilters | void>({
      query: (params) => {
        if (!params) return "api/magic-items";

        const queryString = new URLSearchParams(
          Object.entries(params).reduce<Record<string, string>>(
            (acc, [key, value]) => {
              if (value !== undefined) acc[key] = String(value);
              return acc;
            },
            {}
          )
        ).toString();

        return `api/magic-items?${queryString}`;
      },
    }),
  }),
});

export const { useGetAllMagicItemsQuery } = magicItemsApi;
