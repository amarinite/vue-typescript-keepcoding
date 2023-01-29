import { Product } from "@/models/product";
import { createStore } from "vuex";
import cartModule from "./cart";
import productsModule from "./products";

export interface IState {
  authUser: Product | null;
  greeting: string;
}

export default createStore<IState>({
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,
  },
});
