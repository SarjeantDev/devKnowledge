import React from 'react';
import ReactDom from 'react-dom';


// initializing redux
// keeping track of the store (global state), this allows us to access store from anywhere in the app
// don't have to be in a child/parent component to access state
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
