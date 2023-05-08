import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import pizzaSlice from "./slices/pizzaSlice";

const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    basket: basketSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
