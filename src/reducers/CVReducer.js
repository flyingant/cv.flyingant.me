import Immutable from 'immutable';
//actions
import RootActions from '../actions/RootActions'

const DEFAULT_CV_STATE = {

};

function cv(state, action) {
    state = state || Immutable.Map(DEFAULT_CV_STATE);
    switch (action.type) {
        case RootActions.Keys.InitializeAppCompleted:
            return state.merge(action.args);
        default:
            return state;
    }
}

module.exports = cv;