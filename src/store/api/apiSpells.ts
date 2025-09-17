// store/api/apiSpells.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const filesWithLevels: Array<[file: string, level: number]> = [
  ["cantrips", 0],
  ["first-level", 1],
  ["second-level", 2],
  ["third-level", 3],
  ["fourth-level", 4],
  ["fifth-level", 5],
  ["sixth-level", 6],
  ["seventh-level", 7],
  ["eighth-level", 8],
  ["ninth-level", 9],
];

export const spellsApi = createApi({
  reducerPath: "spellsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getAllSpells: builder.query<Record<number, SpellObj[]>, void>({
      async queryFn(_arg, _api, _extra, fetchWithBQ) {
        const grouped: Record<number, SpellObj[]> = {};

        for (const [file, level] of filesWithLevels) {
          const res = await fetchWithBQ(`data/spells/${file}.json`);
          if (res.error) return { error: res.error };

          grouped[level] = res.data as SpellObj[];
        }

        return { data: grouped };
      },
    }),
  }),
});

export const { useGetAllSpellsQuery } = spellsApi;
