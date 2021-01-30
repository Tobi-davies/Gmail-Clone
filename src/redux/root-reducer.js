import { combineReducers } from "redux";
import starredReducer from "./starred/starred.reducer";

export default combineReducers({
  starred: starredReducer,
});
