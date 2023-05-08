import React, { ReactNode } from "react";
import classes from "./FillButton.module.scss";

type FillButtonProps = {
  children: ReactNode | ReactNode[];
  goBackFunc?: () => void;
};

const FillButton: React.FC<FillButtonProps> = ({ children, goBackFunc }) => {
  return (
    <button className={classes.btn} onClick={() => goBackFunc()}>
      {children}
    </button>
  );
};

export default FillButton;
