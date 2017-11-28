import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index'
import createSagaMiddleware, {END} from 'redux-saga';
import {logger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);

if (__DEV__) {
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    store.close = () => store.dispatch(END);
    return store;
}