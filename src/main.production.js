import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHashHistory, useQueries } from 'history'
import { syncReduxAndRouter, routeReducer, routerStateReducer } from 'redux-simple-router'
import {createRouter} from './routes/Routes'
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import reducers from './reducers/Reducers'

const TARGET_EL = document.getElementById('main');

//init a immutable reducers and store
const reducer = combineReducers({
    app: reducers,
    routing: routeReducer
});

const store = applyMiddleware(thunk)(createStore)(reducer);

// init router settings
const history = useQueries(createHashHistory)({ queryKey: false });
syncReduxAndRouter(history, store);

const router = createRouter(history, store);

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    TARGET_EL
);