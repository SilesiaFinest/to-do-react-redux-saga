import ToDoActionTypes from "./todo.types";

const INITIAL_STATE = {
  taskList: [],
  completed: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
