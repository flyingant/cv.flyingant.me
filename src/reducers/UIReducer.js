import Immutable from 'immutable';
import { UPDATE_PATH } from 'redux-simple-router'

//actions
import RootActions from '../actions/RootActions'
import CommonActions from '../common/actions/CommonActions'

const DEFAULT_UI_STATE = {
    "busy": false,
    "hashedURL": "/"
};

function ui(state, action) {
    state = state || Immutable.Map(DEFAULT_UI_STATE);
    switch (action.type) {
        //listen to the URL changed action
        case UPDATE_PATH:
            return state.merge({hashedURL: action.payload.path});
        case CommonActions.Keys.Busy:
            return state.merge({"busy": true});
        case CommonActions.Keys.BusyCompleted:
            return state.merge({"busy": false});
        default:
            return state;
    }
}

module.exports = ui;
