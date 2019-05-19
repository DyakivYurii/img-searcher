import { fork } from 'redux-saga/effects';
import searchSaga from './searchSaga';

export default function* rootSaga() {
  yield [fork(searchSaga)];
}
