import { CategoriesType } from "../assets/categories";
import { OptionsType } from "../assets/options";

export type BasketSliceState = {
  data: BasketItemType[];
  totalQuantity: number;
  totalPrice: number;
  test: string;
};

export type BasketItemType = {
  name: string;
  image: string;
  pizzaSize: number;
  pizzaType: number;
  category: string[];
  price: number;
  rating: number;
  id: string;
  quantity: number;
  uniqueId: string;
};

export type FilterSliceState = {
  select: OptionsType;
  currentPageNum: number;
  category: CategoriesType;
  search: string;
};

export type GetPizzaParams = {
  sortBy: any;
  sortValue: string;
  key: string;
};

export type PizzaItem = {
  image: string;
  name: string;
  category: string[];
  price: number;
  rating: number;
  pizzaSize: number[];
  pizzaType: number[];
  id: string;
};

export type PizzaSliceState = {
  data: PizzaItem[];
  status: "pending" | "success" | "error";
  item: PizzaItem;
  itemStatus: "pending" | "success" | "error";
};
