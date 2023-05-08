import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getTotalPrice from "../../utils/getTotalPrice";
import getTotalQuantity from "../../utils/getTotalQuantity";
import { BasketItemType, BasketSliceState } from "../types";

const initialState: BasketSliceState = {
  data: [],
  totalQuantity: 0,
  totalPrice: 0,
  test: "",
};

export const basketSlice = createSlice({
  name: "basketTest",
  initialState,
  reducers: {
    getBasketProducts: (state, action: PayloadAction<BasketItemType[]>) => {
      state.data = action.payload;
      state.totalQuantity = getTotalQuantity(state.data);
      state.totalPrice = getTotalPrice(state.data);
    },
    adedBasketProducts: (state, action) => {
      state.data = [...state.data, action.payload];
      state.totalQuantity = getTotalQuantity(state.data);
      state.totalPrice = getTotalPrice(state.data);
    },
    deleteBasketProducts: (state, action) => {
      state.data = state.data.filter(
        (prod) => prod.uniqueId !== action.payload
      );
      state.totalQuantity = getTotalQuantity(state.data);
      state.totalPrice = getTotalPrice(state.data);
    },
    editBasketProducts: (state, action) => {
      state.data = state.data.map((prod) => {
        if (prod.uniqueId === action.payload.uniqueId) {
          return action.payload;
        } else {
          return prod;
        }
      });
      state.totalQuantity = getTotalQuantity(state.data);
      state.totalPrice = getTotalPrice(state.data);
    },
    deleteAllBasketProducst: (state) => {
      state.data = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  getBasketProducts,
  adedBasketProducts,
  editBasketProducts,
  deleteBasketProducts,
  deleteAllBasketProducst,
} = basketSlice.actions;

export default basketSlice.reducer;
