import React from 'react'
import configureStore from './store/configure-store'
import App from "./containers/App";
import {Provider} from 'react-redux';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;