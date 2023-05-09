import React from "react";
import classes from "./SwitchOptionProduct.module.scss";
import { ValueOptionsType } from "../SwitchOption/switchData";

type SwitchKindProps = {
  avilableOption: number[];
  allTypes: ValueOptionsType[];
  activeOption: number;
  setActiveOption: (val: number) => void;
  setQuantity: (val: number) => void;
};

const SwitchKind: React.FC<SwitchKindProps> = ({
  avilableOption,
  allTypes,
  activeOption,
  setActiveOption,
  setQuantity,
}) => {
  return (
    <ul className={classes.wrapper}>
      {allTypes.map((type) => (
        <li
          onClick={() => {
            if (avilableOption.includes(type.value)) {
              setActiveOption(type.value);
              setQuantity(1);
            }
          }}
          className={`${classes.option} ${
            avilableOption.includes(type.value) && classes.availableOption
          } ${type.value === activeOption && classes.active}`}
          key={type.value}
        >
          {type.label}
        </li>
      ))}
    </ul>
  );
};

export default SwitchKind;
