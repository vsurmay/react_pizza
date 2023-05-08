import React from "react";
import BasketIcon from "../BasketIcon/BasketIcon";
import Logo from "../Logo/Logo";
import classes from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import Search from "../Search/Search";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const switchLogoSubtitle = (): string => {
    if (pathname === "/") return "найсмачніша піца у всесвіті";
    return "сама реативна піца";
  };

  return (
    <div className={classes.wrapper}>
      <Logo subtitle={switchLogoSubtitle()} />

      {pathname !== "/basket" && (
        <>
          {pathname === "/" && <Search />}
          <BasketIcon />
        </>
      )}
    </div>
  );
};

export default Header;
