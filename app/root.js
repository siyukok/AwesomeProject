import React from 'react'
import configureStore from './store/configure-store'
import App from "./containers/App";
import rootSaga from './sagas/index';
import {Provider} from 'react-redux';

const store = configureStore();

// run root saga
store.runSaga(rootSaga);

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;