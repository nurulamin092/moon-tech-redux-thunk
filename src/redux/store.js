import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
 import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
// import productReducer from "./reducers/productReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter )));

export default store;
