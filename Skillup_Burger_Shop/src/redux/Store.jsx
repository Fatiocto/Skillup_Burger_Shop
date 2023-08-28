import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./Store";

export const store = configureStore({
  reducer: {
    burgerReducer,

  },
});

export default store;
