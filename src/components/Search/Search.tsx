import React, { useCallback, useState, useRef } from "react";
import classes from "./Search.module.scss";
import loop from "../../assets/img/loop.svg";
import close from "../../assets/img/close.svg";
import { changeSearch, changePagination } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../redux/store";

const Search = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef(null);

  const updateInput = useCallback(
    debounce((val: string) => {
      dispatch(changeSearch(val));
    }, 500),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changePagination(1));
    setInputValue(event.target.value);
    updateInput(event.target.value);
  };

  const handleClickCancel = (): void => {
    setInputValue("");
    dispatch(changeSearch(""));
    inputRef.current?.focus();
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.loop} src={loop} />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={inputValue}
        type={"text"}
        placeholder={"Введіть назву піци..."}
      />
      {inputValue && (
        <img
          className={classes.close}
          src={close}
          onClick={handleClickCancel}
        />
      )}
    </div>
  );
};

export default Search;
