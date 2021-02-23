import { combineReducers } from "redux";
import countReducer from "./countReducer";
import puppiesReducer from "./puppiesReducer";

export const rootReducer = combineReducers({ countReducer, puppiesReducer });
