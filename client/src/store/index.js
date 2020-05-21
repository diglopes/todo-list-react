import { combineReducers, createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import todo from "./reducers/todo";

const rootReducer = combineReducers({
  todo,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise)(createStore)(rootReducer, devTools);
export default store;
