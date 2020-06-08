import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import rootSaga from "../sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

// setting up middlewares array
const middlewares = [sagaMiddleware];

// redux-logger added only for development/disabled in build
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// createStore gets rootReducer and return value of applyMiddlware so it's scalable in future
// using compose to add Redux_DevTools
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
