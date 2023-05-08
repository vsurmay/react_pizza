import React from "react";
import classes from "./SwitchOption.module.scss";
import { pizzaTypes, pizzaSizes } from "./switchData";

type SwitchOption = {
  handleClickSize: (val: number) => void;
  activeSize: number;
  availableSizes: number[];
  activeType: number;
  handleClickType: (val: number) => void;
  availableTypes: number[];
  form?: boolean;
  activeSizes?: number[];
  activeTypes?: number[];
};

const SwitchOption: React.FC<SwitchOption> = ({
  handleClickSize,
  handleClickType,
  availableTypes,
  activeType,
  activeSize,
  availableSizes,
  form,
  activeTypes,
  activeSizes,
}) => {
  return (
    <div className={classes.switchWrapper}>
      <ul className={classes.list}>
        {pizzaTypes.map((option) => (
          <li
            key={option.value}
            onClick={(e: React.MouseEvent<HTMLLIElement>): void => {
              e.preventDefault();
              e.stopPropagation();
              handleClickType(option.value);
            }}
            className={`${
              !form
                ? `${classes.item} ${
                    availableTypes.includes(option.value) && classes.available
                  } ${option.value === activeType && classes.active}`
                : `${classes.item} ${classes.available} ${
                    activeTypes &&
                    activeTypes.includes(option.value) &&
                    classes.active
                  }`
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
      <ul className={classes.list}>
        {pizzaSizes.map((option) => (
          <li
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClickSize(option.value);
            }}
            className={`${
              !form
                ? `${classes.item} ${
                    availableSizes.includes(option.value) && classes.available
                  } ${option.value === activeSize && classes.active}`
                : `${classes.item} ${classes.available} ${
                    activeSizes &&
                    activeSizes.includes(option.value) &&
                    classes.active
                  }`
            }`}
            key={option.value}
          >
            {option.label} см.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwitchOption;
