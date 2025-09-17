import { configureStore } from "@reduxjs/toolkit";
import { racesApi } from "./api/apiSlice";
import { classesApi } from "./api/apiClasses"
import { backgroundsApi } from "./api/apiBackgrounds";
import { spellsApi } from "./api/apiSpells";

export const store = configureStore({
  reducer: {
    [racesApi.reducerPath]: racesApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [backgroundsApi.reducerPath]: backgroundsApi.reducer,
    [spellsApi.reducerPath]: spellsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(racesApi.middleware, classesApi.middleware, backgroundsApi.middleware, spellsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;