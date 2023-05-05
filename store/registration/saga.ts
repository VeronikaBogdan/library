import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { SIGNUP_REQUEST, signUpSuccess, signUpFailure } from './actions';
import { SignUpUserData } from './types';

export const getAllAuthUsers = () => axios.get(`${HOST}/auth.json`);

export const signUp = (signUpUserData: SignUpUserData) => axios.post(`${HOST}/auth.json`, signUpUserData);

export function* signUpSaga(action: any) {
  try {
    const allUsers: { data: SignUpUserData } = yield call(getAllAuthUsers);

    if (
      Object.values(allUsers.data).some(
        (user) => user.password === action.signUpUserData.password || user.username === action.signUpUserData.username
      )
    ) {
      yield put(signUpFailure('400'));
    } else {
      const response: { data: SignUpUserData; status: string } = yield call(signUp, action.signUpUserData);
      yield put(signUpSuccess(response.status));
    }
  } catch (error) {
    yield put(signUpFailure('error'));
  }
}

export function* watcherSagaForSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUpSaga);
}
