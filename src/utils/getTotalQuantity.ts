import { BasketItemType } from "../redux/types";

const getTotalQuantity = (data: BasketItemType[]): number => {
  return data.reduce((acc, cur) => acc + cur.quantity, 0);
};

export default getTotalQuantity;
