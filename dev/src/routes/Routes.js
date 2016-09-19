import { Router, Route, IndexRoute } from 'react-router'
import {createRouteHandler} from './RouteHandler'

//actions
import RootActions from '../actions/RootActions'

import App from '../components/App';
import AppContainer from '../components/AppContainer'

const routes = {
    "^\/$"(dispatch, state) {
        dispatch(RootActions.Actions.InitializeApp());
    }
}

export function createRouter(history, store) {
    createRouteHandler(routes, history, store);
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={AppContainer}/>
            </Route>
        </Router>
    )
}