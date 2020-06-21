import { all } from "redux-saga/effects";
import { settings } from "./settings";

export default function* rootSaga() {
  yield all([...settings]);
}
