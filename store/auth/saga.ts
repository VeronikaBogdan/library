import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { SIGNIN_REQUEST, signInSuccess, signInFailure } from './actions';
import { SignInUserData } from './types';

export const getAllAuthUsers = () => axios.get(`${HOST}/auth.json`);

export function* signInSaga(action: any) {
  try {
    const allUsers: { data: SignInUserData } = yield call(getAllAuthUsers);

    if (
      Object.values(allUsers.data).some(
        (user) => user.password === action.signInUserData.password && user.username === action.signInUserData.username
      )
    ) {
      const token = Object.values(allUsers.data).filter(
        (user) => user.password === action.signInUserData.password && user.username === action.signInUserData.username
      )[0].token;

      yield put(signInSuccess(token));
    } else {
      yield put(signInFailure('400'));
      yield put(signInSuccess(''));
    }
  } catch (error) {
    yield put(signInFailure('error'));
  }
}

export function* watcherSagaForSignIn() {
  yield takeLatest(SIGNIN_REQUEST, signInSaga);
}
