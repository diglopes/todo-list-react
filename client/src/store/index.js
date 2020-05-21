import { combineReducers, createStore } from "redux";
import todo from "./reducers/todo";

const rootReducer = combineReducers({
  todo,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStore(rootReducer, devTools);
