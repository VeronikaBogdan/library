import { all, fork } from 'redux-saga/effects';

import { watcherSagaForCategories } from './categories/saga';
import { watcherSagaForBooks } from './books/saga';
import { watcherSagaForBookById } from './bookById/saga';
import { watcherSagaForSignUp } from './registration/saga';
import { watcherSagaForSignIn } from './auth/saga';
import { watcherSagaForComment } from './comments/saga';

export function* rootSaga() {
  yield all([
    fork(watcherSagaForCategories),
    fork(watcherSagaForBooks),
    fork(watcherSagaForBookById),
    fork(watcherSagaForSignUp),
    fork(watcherSagaForSignIn),
    fork(watcherSagaForComment),
  ]);
}
