import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { reducer, rootReducer, RootState } from "./reducers";
import { thunk } from "redux-thunk";

// export const makeStore = (context: Context) => createStore(reducer,applyMiddleware(thunk))

// export const wrapper = createWrapper(makeStore, { debug: true })
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));