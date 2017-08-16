import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers/index';
import App from '../components/app';
import { AUTH_USER, checkIsLogged } from '../actions/auth';

import '../../../public/stylesheets/base.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem('token');

//check if jwt token already exists
if (token) {
    checkIsLogged().then(response => {
        store.dispatch({
            type: AUTH_USER,
            role: response.role,
            id: response.id
        });
        return Promise.resolve();
    }).catch(e => {
        localStorage.removeItem("token");
        return Promise.reject(e);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.wrapper'));