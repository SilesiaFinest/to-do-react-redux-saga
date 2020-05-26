import { combineReducers } from "redux";

import todoReducer from "./todo/todo.reducer";

// using combineReducers for easier scalability
const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
