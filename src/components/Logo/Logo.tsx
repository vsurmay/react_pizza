import React from "react";
import classes from "./Logo.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

type LogoProps = {
  subtitle: string;
};

const Logo: React.FC<LogoProps> = ({ subtitle }) => {
  return (
    <>
      <Link to={"/"}>
        <div className={classes.wrapper}>
          <img src={logo} alt="logo" />
          <div className={classes.describtion}>
            <h3 className={classes.title}>REACT PIZZA</h3>
            <p className={classes.subtitle}>{subtitle}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
