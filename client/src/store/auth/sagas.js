import {
  all,
  call, put, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { apiUrl, config } from '../../config/api';
import { ActionTypes } from './actions';

export function* signIn({ values }) {
  try {
    const user = yield call(axios.post, `${apiUrl}/users/login`, values, config);
    yield put({ type: ActionTypes.SIGN_IN_SUCCESS, values: user.data });
    yield put(push('/products'));
  } catch (e) {
    yield put({ type: ActionTypes.SIGN_IN_FAILED, message: e.message });
  }
}

export function* signUp({ values }) {
  try {
    yield call(axios.post, `${apiUrl}/users/register`, values);
    yield put({ type: ActionTypes.SIGN_UP_SUCCESS });
    yield put(push('/SignIn'));
  } catch (e) {
    yield put({ type: ActionTypes.SIGN_UP_FAILED, message: e.message });
  }
}

export function* logout() {
  try {
    yield call(axios.get, `${apiUrl}/users/logout`, config);
    yield put({ type: ActionTypes.LOGOUT_SUCCESS });
    yield put(push('/'));
  } catch (e) {
    yield put({ type: ActionTypes.LOGOUT_FAILED, message: e.message });
  }
}

export function* authSaga() {
  yield all([
    takeEvery(ActionTypes.SIGN_IN, signIn),
    takeEvery(ActionTypes.SIGN_UP, signUp),
    takeEvery(ActionTypes.LOGOUT, logout),
  ]);
}
