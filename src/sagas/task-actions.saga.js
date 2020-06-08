import { takeEvery, put, fork } from "redux-saga/effects";
import TodosActionTypes from "../redux/todos/todos.types";

// Worker Sagas
function* addTaskAsync(action) {
  yield put({ type: TodosActionTypes.ADD_TASK_ASYNC, payload: action.payload });
}

function* toggleCompletedAsync(action) {
  yield put({ type: TodosActionTypes.TOGGLE_COMPLETED_ASYNC, id: action.id });
}

function* removeTaskAsync(action) {
  yield put({ type: TodosActionTypes.REMOVE_TASK_ASYNC, id: action.id });
}

// Watcher Sagas
function* watchAddTask() {
  yield takeEvery(TodosActionTypes.ADD_TASK, addTaskAsync);
}

function* watchToggleCompleted() {
  yield takeEvery(TodosActionTypes.TOGGLE_COMPLETED, toggleCompletedAsync);
}

function* watchRemoveTask() {
  yield takeEvery(TodosActionTypes.REMOVE_TASK, removeTaskAsync);
}

export const taskSagas = [
  fork(watchAddTask),
  fork(watchToggleCompleted),
  fork(watchRemoveTask),
];
