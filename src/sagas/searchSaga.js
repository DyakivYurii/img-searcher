import { takeLatest, call, put } from 'redux-saga';
import { SEARCH } from '../actions/types';
import { searchImageInDB } from '../services/searchServices';

function* watcherSearch() {
  yield takeLatest(SEARCH.FIND_REQUEST, searchImages);
}

function* searchImages(action) {
  try {
    const result = yield call(searchImageInDB, action.payload);
    yield put({ type: SEARCH.FIND_SUCCESS, result });
  } catch (error) {
    yield put({ type: SEARCH.FIND_FAILURE, error });
  }
}

export default watcherSearch();
