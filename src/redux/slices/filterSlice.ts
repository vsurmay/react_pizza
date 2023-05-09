import { createSlice } from "@reduxjs/toolkit";
import options, { OptionsType } from "../../assets/options";
import categories, { CategoriesType } from "../../assets/categories";
import { FilterSliceState } from "../types";

const initialState: FilterSliceState = {
  select: options[0],
  currentPageNum: 1,
  category: categories[0],
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSelect: (state, action) => {
      state.select = action.payload;
    },

    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    changeSearch: (state, action) => {
      state.search = action.payload;
    },

    changePagination: (state, action) => {
      state.currentPageNum = action.payload;
    },

    setInnitialValue: (state, action) => {
      const currentCategory = categories.find(
        (el) => el.key === action.payload.category
      );
      const currentState = options.find(
        (el) => el.value === action.payload.sort
      );
      if (currentCategory) {
        state.category = currentCategory;
      }
      state.currentPageNum = Number(action.payload.page);
      if (currentState) {
        state.select = currentState;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeSelect,
  changeCategory,
  changeSearch,
  changePagination,
  setInnitialValue,
} = filterSlice.actions;

export default filterSlice.reducer;
