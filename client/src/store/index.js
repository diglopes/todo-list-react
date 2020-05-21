import { combineReducers, createStore } from "redux";
import todo from "./reducers/todo";

const rootReducer = combineReducers({
  todo,
});

export default createStore(rootReducer);
