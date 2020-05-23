import {
  all, fork,
} from 'redux-saga/effects';
import { authSaga } from './auth';
import { watchAndLog } from './errors/sagas';

export default function* rootSaga() {
  yield all(
    [
      fork(watchAndLog),
      fork(authSaga),
    ],
  );
}
