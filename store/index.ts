import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { legacy_createStore as createStore } from "redux";
import { reducer, rootReducer, RootState } from "./reducers";

const makeStore = (context: Context) => createStore(reducer)

export const wrapper = createWrapper(makeStore, { debug: true })