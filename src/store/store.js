import { createStore, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const initialState = {};

const sagaMiddelware = createSagaMiddelware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddelware)
);

sagaMiddelware.run(rootSaga);

export default store;
