import {
  all,
  call, put, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

import { push } from 'react-router-redux';
import { apiUrl } from '../../config/api';

function* signIn({ values }) {
  try {
    const user = yield call(axios.post, `${apiUrl}/users/login`, values);
    yield put({ type: 'SIGN_IN_SUCCESS', user });
    yield put(push('/products'));
  } catch (e) {
    yield put({ type: 'SIGN_IN_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery('SIGN_IN', signIn),
  ]);
}
