"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Loading from "@/app/loading";


interface ReduxProviderProps {
  children: ReactNode;
}

/***
 * Wraps the app with Redux and redux-persist providers, showing a loading state 
 * during store rehydration.
 */

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
