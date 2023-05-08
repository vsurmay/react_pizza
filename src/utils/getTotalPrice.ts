import { BasketItemType } from "../redux/types";

const getTotalPrice = (data: BasketItemType[]): number => {
  return data.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
};

export default getTotalPrice;
