import React from "react";
import classes from "./EmptyBasket.module.scss";
import imageEmpty from "../../assets/img/empty-basket.png";
import { useNavigate } from "react-router-dom";
// import FillButton from "../UI/Buttons/FillButton";

const EmptyBasket: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Корзина пуста 😕</h2>
      <p className={classes.describtion}>
        Скоріш за все, ви не замовляли піццу.
      </p>
      <p className={classes.describtion}>
        Для того, щоб додати піццу, перейдіть на головну сторінку
      </p>
      <img src={imageEmpty} alt={"basket empty"} />
      {/* <FillButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </FillButton> */}
    </div>
  );
};

export default EmptyBasket;
