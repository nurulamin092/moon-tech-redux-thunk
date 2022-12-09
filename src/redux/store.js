import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
 import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";
// import productReducer from "./reducers/productReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter,thunk,logger )));

export default store;
