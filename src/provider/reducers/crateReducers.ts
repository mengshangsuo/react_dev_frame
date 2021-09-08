import { combineReducers } from "redux";
import calcStrReduce from "./calcStrReduce";
import calcNumReducer from "./calcNumReducer";
import asyncReducer from "./asyncReducer";

export default function createReducers() {
  return combineReducers({
    num: calcNumReducer,
    str: calcStrReduce,
    asyncNum: asyncReducer,
  });
}
