import { combineReducers, createStore } from "redux";
import { creditReducer, rootReducer, transactionsReducer, treasureReducer } from "./reduceres";

export const store = createStore(rootReducer)