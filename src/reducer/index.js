import { combineReducers } from "redux";
import { reducer } from "./dogs";

const rootReducer = combineReducers({
  dog: reducer
});

export default rootReducer;
