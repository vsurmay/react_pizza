import React, { useEffect, useRef } from "react";
import classes from "./Home.module.scss";
import qs from "qs";
import { useSelector } from "react-redux/es/exports";
import {
  changePagination,
  setInnitialValue,
} from "../../redux/slices/filterSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import Category from "../../components/Category/Category";
import Select from "../../components/Select/Select";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import PizzaCardSkeleton from "../../components/PizzaCard/PizzaCardSkeleton";
import PizzaEmpty from "../../components/PizzaEmpty/PizzaEmpty";
import { Pagination } from "antd";
import { getPizza } from "../../redux/slices/pizzaSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { PizzaItem } from "../../redux/types";

const Home: React.FC = () => {
  const itsFirstRenderPage = useRef(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const QUANTITY_ELEMENT: number = 8;
  const {
    search: searchValue,
    category: activeCategory,
    select: activeSelect,
    currentPageNum,
  } = useSelector((state: RootState) => state.filter);

  const [serchParams] = useSearchParams();

  useEffect(() => {
    if (serchParams.toString()) {
      const urlParams = qs.parse(serchParams.toString());
      dispatch(
        setInnitialValue({
          ...urlParams,
        })
      );
    }
  }, []);

  useEffect(() => {
    dispatch(getPizza({ ...activeSelect, ...activeCategory }));
  }, [activeSelect, activeCategory]);

  useEffect(() => {
    if (!itsFirstRenderPage.current) {
      const queryString = qs.stringify({
        sort: activeSelect.value,
        category: activeCategory.key,
        page: currentPageNum,
      });

      navigate(`?${queryString}`);
    }

    itsFirstRenderPage.current = false;
  }, [activeCategory, activeSelect, currentPageNum]);

  const { data: pizza, status } = useSelector(
    (state: RootState) => state.pizza
  );

  const indexLastElement = currentPageNum * QUANTITY_ELEMENT;
  const indexFirstElement = indexLastElement - QUANTITY_ELEMENT;

  const searchPizza = (pizza: PizzaItem[], val: string): PizzaItem[] | [] => {
    const filteredPizza = pizza.filter((el) =>
      el.name.toLowerCase().includes(val)
    );
    return filteredPizza;
  };

  return (
    <>
      <div className={classes.mainTop}>
        <Category />
        <Select />
      </div>

      <h2 className={classes.mainTitle}>Всі піци</h2>
      <>
        {!searchPizza(pizza, searchValue).length && status === "success" && (
          <PizzaEmpty
            category={activeCategory.label}
            serchValue={searchValue}
          />
        )}
      </>
      <div className={classes.pizzaWrapper}>
        {status !== "success"
          ? [...new Array(8)].map((el, index) => (
              <PizzaCardSkeleton key={index} />
            ))
          : searchPizza(pizza, searchValue)
              .filter(
                (_, index: number) =>
                  index >= indexFirstElement && index < indexLastElement
              )
              .map((pizza: PizzaItem) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
      </div>
      <Pagination
        className={classes.pagination}
        current={currentPageNum}
        total={
          Math.ceil(searchPizza(pizza, searchValue).length / QUANTITY_ELEMENT) *
          10
        }
        showSizeChanger={false}
        onChange={(pageVal) => {
          dispatch(changePagination(pageVal));
        }}
      />
    </>
  );
};

export default Home;
