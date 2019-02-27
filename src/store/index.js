import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { registerWithMiddleware } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default createStore(reducers, applyMiddleware(...middlewares));

registerWithMiddleware(sagaMiddleware);
