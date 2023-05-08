import React from "react";
import classes from "./PizzaEmty.module.scss";

type PizzaEmptyProps = {
  category: string;
  serchValue: string;
};

const PizzaEmpty: React.FC<PizzaEmptyProps> = ({ category, serchValue }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Піц не знайдено :(</h1>

      {serchValue ? (
        <p className={classes.text}>
          {" "}
          Піц у катгорії <span>{category}</span>, та з назвою:{" "}
          <span>{serchValue}</span> не знайдено :(
        </p>
      ) : (
        <p className={classes.text}>
          {" "}
          Піц у катгорії <span>{category}</span> не знайдено :(
        </p>
      )}
    </div>
  );
};

export default PizzaEmpty;
