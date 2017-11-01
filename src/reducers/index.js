import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import applicationAppState from "./application";

const rootReducer = combineReducers({
  applicationAppState,
  routing: routerReducer
});

export default rootReducer;
