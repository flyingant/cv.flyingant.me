/**
 * Created by FlyingAnt on 12/17/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHashHistory, useQueries} from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import {createRouter} from './routes/Routes'
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import createLogger from 'redux-logger';

import reducers from './reducers/Reducers'

const TARGET_EL = document.getElementById('main');

//init a immutable reducers and store
const reducer = combineReducers({
    app: reducers,
    routing: routeReducer
});

const logger = createLogger({
    transformer(state) {
        //log the all state to JSON
        return {
            app: state.app.toJS(),
            routing: state.routing,
        };
    }
});

const store = applyMiddleware(thunk, logger)(createStore)(reducer);

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