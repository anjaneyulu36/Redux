import TodoReducer from "./todoReducer";

import{createStore} from "redux";

let store= createStore(TodoReducer);

export default store;