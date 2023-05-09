import { ReactNode } from "react";
import classes from "./OutLineBtn.module.scss";

type OutLineBtnProps = {
  children: ReactNode[];
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const OutLibeBtn: React.FC<OutLineBtnProps> = ({ children, handleClick }) => {
  return (
    <button
      onClick={(e) => {
        handleClick && handleClick(e);
      }}
      className={classes.btn}
    >
      {children}
    </button>
  );
};

export default OutLibeBtn;
