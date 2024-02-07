import cartReducer from "./reducer/cart-reducer";

import { createStore } from "redux";

let store=createStore(cartReducer)

export default store