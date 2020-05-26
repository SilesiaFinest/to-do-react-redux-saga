import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middlewares array
const middlewares = [];

// redux-logger added only for development/disabled in build
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// createStore gets rootReducer and return value of applyMiddlware so it's scalable in future
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
