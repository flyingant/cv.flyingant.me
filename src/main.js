/**
 * Created by FlyingAnt on 12/17/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers/Reducers'
// components
import App from './components/App';

const TARGET_EL = document.getElementById('main');

//init a immutable reducers and store
const reducer = combineReducers({
    app: reducers
});

const logger = createLogger({
    stateTransformer(state) {
        //log the all state to JSON
        return {
            app: state.app.toJS()
        };
    }
});

const store = applyMiddleware(thunk, logger)(createStore)(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_EL
);
