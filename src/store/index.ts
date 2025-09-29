import { configureStore } from "@reduxjs/toolkit";
import { racesApi } from "./api/apiSlice";
import { classesApi } from "./api/apiClasses";
import { backgroundsApi } from "./api/apiBackgrounds";
import { spellsApi } from "./api/apiSpells";
import { magicItemsApi } from "./api/apiMagicItems";
import { equipmentApi } from "./api/apiEquipment";
import { propertiesApi } from "./api/apiProperties";
import { rulesApi } from "./api/apiRules"
import { roadmapApi } from "./api/apiRoadmap";

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [backgroundsApi.reducerPath]: backgroundsApi.reducer,
    [spellsApi.reducerPath]: spellsApi.reducer,
    [magicItemsApi.reducerPath] : magicItemsApi.reducer,
    [equipmentApi.reducerPath] : equipmentApi.reducer,
    [propertiesApi.reducerPath] : propertiesApi.reducer,
    [rulesApi.reducerPath] : rulesApi.reducer,
    [roadmapApi.reducerPath] : roadmapApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      racesApi.middleware,
      classesApi.middleware,
      backgroundsApi.middleware,
      spellsApi.middleware,
      magicItemsApi.middleware,
      equipmentApi.middleware,
      propertiesApi.middleware,
      rulesApi.middleware,
      roadmapApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
