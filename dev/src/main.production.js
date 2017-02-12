import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers/Reducers'
// components
import App from './components/App';

const TARGET_EL = document.getElementById('main');

//init a immutable reducers and store
const reducer = combineReducers({
    app: reducers
});

const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    TARGET_EL
);