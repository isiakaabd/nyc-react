import { combineReducers } from "redux";
import reducer from "./contactReducer";

export const rootReducer = combineReducers({
  userReducer: reducer,
});
