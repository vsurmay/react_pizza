import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { GetPizzaParams, PizzaItem, PizzaSliceState } from "../types";

const defaultItem = {
  category: [],
  id: "",
  image: "",
  name: "",
  pizzaSize: [],
  pizzaType: [],
  price: 0,
  rating: 0,
};

export const getPizza = createAsyncThunk(
  "pizza/getPizza",
  async (params: GetPizzaParams) => {
    const { sortBy, sortValue, key: activeCategoty } = params;
    const db = getFirestore();
    const pizzaRef = collection(db, "pizza");
    const q = query(
      pizzaRef,
      where("category", "array-contains", activeCategoty),
      orderBy(sortValue, sortBy)
    );
    const snapshot = await getDocs(q);
    let pizza: any[] = [];
    snapshot.forEach((doc) => {
      pizza.push({ ...doc.data(), id: doc.id });
    });
    return pizza as PizzaItem[];
  }
);

export const getPizzaProduct = createAsyncThunk(
  "pizza/getPizzaProduct",
  async (productId: string) => {
    const db = getFirestore();
    const pizzaRef = doc(db, "pizza", productId);
    const snapshot = await getDoc(pizzaRef);

    return { ...snapshot.data(), id: productId } as PizzaItem;
  }
);

export const adedPizza = createAsyncThunk(
  "pizza/adedPizza",
  async (newPizza: PizzaItem) => {
    const db = getFirestore();
    const pizzaRef = collection(db, "pizza");

    const test = await addDoc(pizzaRef, newPizza);

    return newPizza;
  }
);

const initialState: PizzaSliceState = {
  data: [],
  status: "pending",
  item: defaultItem,
  itemStatus: "pending",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      console.log(action, state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPizza.pending, (state) => {
        state.status = "pending";
        state.data = [];
      })
      .addCase(getPizza.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(getPizza.rejected, (state) => {
        state.status = "error";
        state.data = [];
      })
      .addCase(adedPizza.pending, (state) => {
        console.log("pending aded");
      })
      .addCase(adedPizza.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(adedPizza.rejected, (state) => {
        console.log("rejected aded");
      })
      .addCase(getPizzaProduct.fulfilled, (state, action) => {
        state.itemStatus = "success";
        state.item = action.payload;
      })
      .addCase(getPizzaProduct.rejected, (state) => {
        state.itemStatus = "error";
        state.item = defaultItem;
      })
      .addCase(getPizzaProduct.pending, (state) => {
        state.itemStatus = "pending";
        state.item = defaultItem;
      });
  },
});

export default pizzaSlice.reducer;
