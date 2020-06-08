import { all } from "redux-saga/effects";

import watchRequestTodos from "./fetch-data.saga";
import { taskSagas } from "./task-actions.saga";

// Combine all Sagas here

export default function* rootSaga() {
  yield all([watchRequestTodos(), ...taskSagas]);
}
