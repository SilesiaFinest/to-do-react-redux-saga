import TodosActionTypes from "./todos.types";

// Generating unique IDs
const uid = () => Date.now() + Math.floor(Math.random() * 100);

// Request Todo List Actions
export const requestTodosAction = () => ({
  type: TodosActionTypes.PENDING,
});

export const setTodosAction = (data) => ({
  type: TodosActionTypes.SUCCESS,
  data,
});

export const setErrorAction = (error) => ({
  type: TodosActionTypes.FAILED,
  error,
});

// Add, Remove, ToggleCompleted on tasks
// Assgning unique ID
export const addTask = (title) => ({
  type: TodosActionTypes.ADD_TASK,
  payload: {
    userId: 1,
    id: uid(),
    title: title,
    completed: false,
  },
});

export const removeTask = (id) => ({
  type: TodosActionTypes.REMOVE_TASK,
  id,
});

export const toggleCompleted = (id) => ({
  type: TodosActionTypes.TOGGLE_COMPLETED,
  id,
});
