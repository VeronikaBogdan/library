import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { SIGNUP_REQUEST, signUpSuccess, signUpFailure } from './actions';
import { SignUpUserData } from './types';

export const signUp = (signUpUserData: SignUpUserData) =>
  axios.post('https://library-cleverland-2jfze.ondigitalocean.app/api/auth/local/register', signUpUserData);

export function* signUpSaga(action: any) {
  try {
    const response: { status: number } = yield call(signUp, action.signUpUserData);
    yield put(signUpSuccess(response.status));
  } catch (error: any) {
    yield put(signUpFailure(error.response.status));
  }
}

export function* watcherSagaForSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUpSaga);
}
