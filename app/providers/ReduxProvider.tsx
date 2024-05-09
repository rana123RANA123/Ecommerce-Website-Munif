"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ReduxProviderProps } from "../types/types";

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
