import { createGlobalState } from "react-hooks-global-state";
import { IProduct } from "../types/IntProduct";

export const initialState = {
  products: [],
  favorites: [],
  oneProd: {} as IProduct,
  fav: JSON.parse(localStorage.getItem("fav")!),
};
export const { useGlobalState } = createGlobalState(initialState);
