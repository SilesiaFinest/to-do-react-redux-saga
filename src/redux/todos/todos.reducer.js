import TodosActionTypes from "./todos.types";

const initialState = {
  isPending: false,
  todos: [],
  error: "",
};

const todosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TodosActionTypes.PENDING:
      return { ...state, isPending: true };
    case TodosActionTypes.SUCCESS:
      return { ...state, todos: action.payload, isPending: false };
    case TodosActionTypes.FAILED:
      return { ...state, error: action.payload, isPending: false };
    case TodosActionTypes.ADD_TASK_ASYNC:
      return { ...state, todos: [...state.todos, { ...action.payload }] };
    case TodosActionTypes.TOGGLE_COMPLETED_ASYNC:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case TodosActionTypes.REMOVE_TASK_ASYNC:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todosReducer;
