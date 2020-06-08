import { takeLatest, call, put } from "redux-saga/effects";

import TodosActionTypes from "../redux/todos/todos.types";

import fetchData from "../api/api";

// Saga for fetching data from the API - function stored in api.js

// Worker Saga
function* requestTodosAsync() {
  try {
    const todoList = yield call(fetchData);
    yield put({ type: TodosActionTypes.SUCCESS, payload: todoList });
  } catch (error) {
    yield put({ type: TodosActionTypes.FAILED, payload: error });
  }
}

// Watcher Saga
export default function* watchRequestTodos() {
  yield takeLatest(TodosActionTypes.PENDING, requestTodosAsync);
}
