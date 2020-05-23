import { put, take } from 'redux-saga/effects';
import { ActionTypes } from './actions';

export function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    if (action.type.includes('_FAILED')) {
      yield put({ type: ActionTypes.HANDLE_ERROR, message: action.message });
      yield put({ type: ActionTypes.HANDLE_ERROR, message: null });
    }
  }
}
