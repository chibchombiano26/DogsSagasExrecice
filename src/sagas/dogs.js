import { takeLatest, call, put } from "redux-saga/effects";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/dogs";

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerDogs);
}

function* workerDogs() {
  try {
    const response = yield call(
      fetch,
      "https://dog.ceo/api/breeds/image/random"
    );
    const dog = yield response.json();

    yield put({ type: API_CALL_SUCCESS, dog: dog });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error: error });
  }
}
