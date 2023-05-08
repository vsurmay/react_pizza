import React, { useState } from "react";
import SwitchOption from "../SwitchOption/SwitchOption";
// import OutLibeBtn from "../UI/Buttons/OutLineBtn";
import classes from "./PizzaCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { adedBasketProducts } from "../../redux/slices/basketSlice";
import { message } from "antd";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { PizzaItem } from "../../redux/types";

type PizzaCard = {
  pizza: PizzaItem;
};

const PizzaCard: React.FC<PizzaCard> = ({ pizza }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const basketItemUniqueIds = useSelector((state: RootState) =>
    state.basket.data.map((prod) => prod.uniqueId)
  );

  const [activeSize, setActiveSize] = useState<number>(pizza.pizzaSize[0]);
  const [activeType, setActiveType] = useState<number>(pizza.pizzaType[0]);
  const [imageUrl] = useState<string>(pizza.image);

  const dispatch = useDispatch();

  const handleClickType = (value: number): void => {
    if (pizza.pizzaType.includes(value)) {
      setActiveType(value);
    }
  };

  const handleClickSize = (value: number): void => {
    if (pizza.pizzaSize.includes(value)) {
      setActiveSize(value);
    }
  };

  const success = () => {
    messageApi.open({
      duration: 2,
      className: classes.message,
      type: "success",
      content: "This pizza is aded in the cart",
    });
  };

  const error = () => {
    messageApi.open({
      duration: 2,
      className: classes.message,
      type: "error",
      content: "This pizza is already in the cart",
    });
  };

  const adedProduct = () => {
    const uniqueId = pizza.name + activeSize + activeType;

    if (basketItemUniqueIds.includes(uniqueId)) {
      error();
    } else {
      success();
      dispatch(
        adedBasketProducts({
          ...pizza,
          pizzaSize: activeSize,
          pizzaType: activeType,
          quantity: 1,
          uniqueId: pizza.name + activeSize + activeType,
        })
      );
    }
  };

  return (
    <>
      {contextHolder}
      <Link to={`/pizza/${pizza.id}`}>
        <div className={classes.card}>
          {imageUrl && (
            <img className={classes.image} src={imageUrl} alt={pizza.name} />
          )}

          <h3 className={classes.name}>{pizza.name}</h3>
          <SwitchOption
            activeSize={activeSize}
            availableSizes={pizza.pizzaSize}
            handleClickSize={handleClickSize}
            activeType={activeType}
            handleClickType={handleClickType}
            availableTypes={pizza.pizzaType}
          />
          <div className={classes.cardBottom}>
            <p className={classes.price}>{`від ${pizza.price} ₴`}</p>
            {/* <OutLibeBtn
              onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                e.preventDefault();
                e.stopPropagation();
                adedProduct();
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="#EB5A1E"
                />
              </svg>
              <p>Додати</p>
            </OutLibeBtn> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PizzaCard;
