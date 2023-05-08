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
      state.category = categories.find(
        (el) => el.key === action.payload.category
      );
      state.select = options.find((el) => el.value === action.payload.sort);
      state.currentPageNum = Number(action.payload.page);
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
