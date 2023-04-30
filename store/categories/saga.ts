import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { HOST } from '../../app-constants';

import { CATEGORIES_REQUEST, categoriesSuccess, categoriesFailure } from './actions';
import { Category } from './types';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (res) => {
    //   res.headers['Authorization'] = `Bearer ${localStorage.getItem('jwtToken')}`;
    // res.headers[
    //   'Authorization'
    // ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyMSwiaWF0IjoxNjgwMjI1OTA3LCJleHAiOjE2ODI4MTc5MDd9.icXXUYIAvmpu_-qemPBdsoyO2-ER4fS3kSYI2ph7V0Q`;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export const categories = () => instance.get('/api/categories');
export const categories = () => instance.get('/categories/categories.json');

export function* categoriesSaga() {
  try {
    const response: { data: Category[] } = yield call(categories);
    const { data } = response;
    yield put(categoriesSuccess(data));
  } catch (error: any) {
    yield put(categoriesFailure(error));
  }
}

export function* watcherSagaForCategories() {
  yield takeLatest(CATEGORIES_REQUEST, categoriesSaga);
}
