import { combineReducers } from "redux";
import starredReducer from "./starred/starred.reducer";
import outboxReducer from "./outbox/outbox.reducer";

export default combineReducers({
  starred: starredReducer,
  outbox: outboxReducer,
});
