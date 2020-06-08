import { combineReducers } from "redux";

import todosReducer from "./todos/todos.reducer";

// using combineReducers for easier scalability
// for now ony one reducer used - todos
const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
