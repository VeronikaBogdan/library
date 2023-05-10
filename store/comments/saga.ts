import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import SyncStorage from 'sync-storage';

import { HOST } from '../../app-constants';

import { COMMENT_REQUEST, commentSuccess, commentFailure } from './actions';
import { CommentData } from './types';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (res) => {
    res.headers['Authorization'] = `Bearer ${SyncStorage.get('jwtToken')}`;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const comment = (commentData: CommentData) => instance.post('/api/comments', commentData);

export function* commentSaga(action: any) {
  try {
    const response: { data: any } = yield call(comment, action.commentData);
    const { data } = response;
    yield put(commentSuccess(data));
  } catch (error: any) {
    console.log(error);

    yield put(commentFailure(error));
  }
}

export function* watcherSagaForComment() {
  yield takeLatest(COMMENT_REQUEST, commentSaga);
}
