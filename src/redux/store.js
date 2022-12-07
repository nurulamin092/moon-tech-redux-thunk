import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
// import productReducer from "./reducers/productReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
