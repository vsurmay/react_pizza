import React, { useEffect, useState } from "react";
import classes from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPizzaProduct } from "../../redux/slices/pizzaSlice";
import { InputNumber, message } from "antd";
import NotFound from "../NotFound/NotFound";
import SwitchOptionProduct from "../../components/SwitchOptionProduct/SwitchOptionProduct";
import {
  pizzaTypes,
  pizzaSizes,
} from "../../components/SwitchOption/switchData";
import OutLibeBtn from "../../components/UI/Buttons/OutLineBtn";
import { adedBasketProducts } from "../../redux/slices/basketSlice";
import { FadeLoader } from "react-spinners";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/store";

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pizzaId } = useParams();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    dispatch(getPizzaProduct(pizzaId));
  }, []);

  const { item: pizzaItem, itemStatus: status } = useSelector(
    (state: RootState) => state.pizza
  );
  const allUniqueIds = useSelector((state: RootState) =>
    state.basket.data.map((el) => el.uniqueId)
  );

  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  useEffect(() => {
    if (status === "success") {
      setActiveType(pizzaItem.pizzaType[0]);
      setActiveSize(pizzaItem.pizzaSize[0]);
    }
  }, [status]);

  const [quantity, setQuantity] = useState(1);

  const onChange = (value) => {
    setQuantity(value);
  };

  const adedProduct = () => {
    const uniqueId = pizzaItem.name + activeSize + activeType;

    if (allUniqueIds.includes(uniqueId)) {
      console.log("repeat product");
      error();
    } else {
      success();
      dispatch(
        adedBasketProducts({
          ...pizzaItem,
          quantity,
          pizzaSize: activeSize,
          pizzaType: activeType,
          uniqueId,
        })
      );
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

  if (status === "pending") {
    return <FadeLoader color="#FE5F1E" />;
  }

  if (status === "error") {
    return <NotFound />;
  }

  return (
    <div>
      {contextHolder}
      {status === "success" && (
        <div className={classes.wrapper}>
          <img src={pizzaItem.image} alt={pizzaItem.name} />
          <div className={classes.describtion}>
            <h2 className={classes.name}>{pizzaItem.name}</h2>
            <SwitchOptionProduct
              setQuantity={setQuantity}
              avilableOption={pizzaItem.pizzaType}
              allTypes={pizzaTypes}
              activeOption={activeType}
              setActiveOption={setActiveType}
            />
            <SwitchOptionProduct
              setQuantity={setQuantity}
              avilableOption={pizzaItem.pizzaSize}
              allTypes={pizzaSizes}
              activeOption={activeSize}
              setActiveOption={setActiveSize}
            />
            <div className={classes.priceWrapper}>
              <p className={classes.price}>
                Ціна {pizzaItem.price * quantity} ₴
              </p>
              <InputNumber
                className={classes.input}
                min={1}
                max={10}
                value={quantity}
                onChange={onChange}
              />
            </div>

            <OutLibeBtn onClick={adedProduct}>
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
            </OutLibeBtn>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
