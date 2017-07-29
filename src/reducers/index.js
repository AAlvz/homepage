import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import applicationAppState from "./application";
import translationsAppState from "./translations";

const rootReducer = combineReducers({
  applicationAppState,
  translationsAppState,
  routing: routerReducer
});

export default rootReducer;
