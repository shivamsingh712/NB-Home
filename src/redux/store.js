import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/index";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
