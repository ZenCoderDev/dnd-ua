import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseEquipment } from "@/types/equipment";

export const equipmentApi = createApi({
  reducerPath: "equipmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/equipment" }),
  endpoints: (builder) => ({
    getEquipmentByCategory: builder.query<BaseEquipment[], string>({
      query: (category) => `${category}`,
    }),
  }),
});

export const { useGetEquipmentByCategoryQuery } = equipmentApi;
