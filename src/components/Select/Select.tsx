import React, { useState, useRef } from "react";
import classes from "./Select.module.scss";
import options from "../../assets/options";
import { useDispatch, useSelector } from "react-redux";
import { changeSelect } from "../../redux/slices/filterSlice";
import { useEffect } from "react";
import { RootState } from "../../redux/store";

const Select: React.FC = () => {
  const selectRef = useRef();

  const [showPopup, setShowPopup] = useState<boolean>(false);

  const dispatch = useDispatch();
  const activeOption = useSelector((state: RootState) => state.filter.select);

  useEffect(() => {
    const handleClickBody = (event: any) => {
      if (showPopup) {
        if (!event.composedPath().includes(selectRef.current)) {
          setShowPopup(false);
        }
      }
    };

    document.body.addEventListener("click", handleClickBody);

    return () => {
      document.body.removeEventListener("click", handleClickBody);
    };
  }, [showPopup]);

  return (
    <div
      ref={selectRef}
      onClick={() => {
        setShowPopup(!showPopup);
      }}
      className={classes.wrapper}
    >
      <svg
        className={`${classes.icon} ${showPopup ? classes.activeIcon : null}`}
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6206 5.28047C10.5851 5.3547 10.525 5.41815 10.4479 5.46279C10.3708 5.50743 10.2802 5.53125 10.1875 5.53125H0.812503C0.719792 5.53126 0.629163 5.50743 0.552077 5.46279C0.47499 5.41815 0.414909 5.35471 0.37943 5.28047C0.343952 5.20624 0.33467 5.12456 0.352759 5.04575C0.370848 4.96695 0.415494 4.89456 0.481053 4.83775L5.16855 0.775247C5.25646 0.699064 5.37569 0.656265 5.5 0.656265C5.62432 0.656265 5.74354 0.699064 5.83145 0.775247L10.519 4.83775C10.5845 4.89456 10.6292 4.96695 10.6472 5.04575C10.6653 5.12456 10.6561 5.20624 10.6206 5.28047Z"
          fill="black"
        />
      </svg>
      <div className={classes.text}>
        Сортування по:{" "}
        <span className={classes.optionText}>{activeOption.label}</span>
        <ul className={`${classes.popup} ${showPopup && classes.activePopup}`}>
          {options.map((option) => (
            <li
              className={`${classes.option} ${
                option.value === activeOption.value && classes.activeOption
              }`}
              onClick={() => {
                dispatch(changeSelect(option));
              }}
              key={option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
