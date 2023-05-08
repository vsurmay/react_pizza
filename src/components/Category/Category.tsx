import React from "react";
import classes from "./Category.module.scss";
import categories from "../../assets/categories";
import { useSelector } from "react-redux";
import {
  changeCategory,
  changePagination,
} from "../../redux/slices/filterSlice";
import { RootState, useAppDispatch } from "../../redux/store";

const Category: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.filter.category
  );

  return (
    <ul className={classes.list}>
      {categories.map((category) => (
        <li key={category.key}>
          <button
            onClick={() => {
              dispatch(changeCategory(category));
              dispatch(changePagination(1));
            }}
            className={`${classes.btn} ${
              activeCategory.key === category.key ? classes.active : null
            }`}
          >
            {category.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
