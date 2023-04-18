import { all, fork } from 'redux-saga/effects';

import { watcherSagaForCategories } from './categories/saga';
import { watcherSagaForBooks } from './books/saga';
import { watcherSagaForBookById } from './bookById/saga';

export function* rootSaga() {
  yield all([fork(watcherSagaForCategories), fork(watcherSagaForBooks), fork(watcherSagaForBookById)]);
}
