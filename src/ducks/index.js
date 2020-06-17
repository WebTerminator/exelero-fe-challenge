import { combineReducers } from "redux";

import view from "./view";
import order from "./order";

const rootReducer = combineReducers({
  order,
  view,
});

export default rootReducer;
