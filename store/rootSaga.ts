import { all, fork } from 'redux-saga/effects';

import { watcherSagaForCategories } from './categories/saga';

export function* rootSaga() {
  yield all([fork(watcherSagaForCategories)]);
}
