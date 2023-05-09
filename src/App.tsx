import "./scss/all.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { RootState, useAppDispatch } from "./redux/store";
import { getBasketProducts } from "./redux/slices/basketSlice";
import { useSelector } from "react-redux";
import { BasketItemType } from "./redux/types";

function App() {
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const basketData = useSelector((state: RootState) => state.basket.data);

  useEffect(() => {
    if (!isMounted.current) {
      const basketFromStorage = localStorage.getItem("basket");
      const basketItems: BasketItemType[] = basketFromStorage
        ? JSON.parse(basketFromStorage)
        : [];
      dispatch(getBasketProducts(basketItems));
    }
    isMounted.current = true;
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketData));
  }, [basketData]);

  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
