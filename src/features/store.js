import { configureStore } from "@reduxjs/toolkit";
import cakeSlices from "./cakeSlices";

export const store = configureStore({
  reducer: {
    cakeCart: cakeSlices,
  },
});
