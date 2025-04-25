// redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import userReducer from "./slices/userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage

// 1. Define which slices to persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // <-- only persist the `user` slice
};

// 2. Combine your reducers
const rootReducer = combineReducers({
  filters: filtersReducer,
  user: userReducer,
});

// 3. Create a persisted version of the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore these action types in serializability middleware
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create the persistor
export const persistor = persistStore(store);

// 6. Export types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
