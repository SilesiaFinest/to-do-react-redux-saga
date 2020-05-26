import ToDoActionTypes from "./todo.types";

export const addTask = (task) => ({
  type: ToDoActionTypes.ADD_TASK,
  payload: task,
});

export const removeTask = (task) => ({
  type: ToDoActionTypes.REMOVE_TASK,
  payload: task,
});

export const toggleCompleted = (task) => ({
  type: ToDoActionTypes.TOGGLE_COMPLETED,
});
