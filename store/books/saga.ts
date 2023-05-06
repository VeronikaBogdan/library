import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import SyncStorage from 'sync-storage';

import { HOST } from '../../app-constants';

import { BOOKS_REQUEST, booksSuccess, booksFailure } from './actions';
import { Book } from './types';

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

export const books = () => instance.get('/api/books');
// export const books = () => instance.get('/books/books.json');

export function* booksSaga() {
  try {
    const response: { data: Book[] } = yield call(books);
    const { data } = response;
    yield put(booksSuccess(data));
  } catch (error: any) {
    yield put(booksFailure(error));
  }
}

export function* watcherSagaForBooks() {
  yield takeLatest(BOOKS_REQUEST, booksSaga);
}
