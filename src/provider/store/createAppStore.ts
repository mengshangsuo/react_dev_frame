import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createReducers from "../reducers/crateReducers";

const store = createStore(
  createReducers(),
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
