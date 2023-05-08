import React from "react";
import classes from "./NotFound.module.scss";
import { Link } from "react-router-dom";
// import FillButton from "../../components/UI/Buttons/FillButton";

const NotFound: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1>На жаль, нічого не знайдено :(</h1>
      <Link to={"/"}>{/* <FillButton>На головну</FillButton> */}</Link>
    </div>
  );
};

export default NotFound;
