import Immutable from 'immutable';
//actions
import CommonActions from '../common/actions/CommonActions'

const DEFAULT_UI_STATE = {
    "busy": false,
};

function ui(state, action) {
    state = state || Immutable.Map(DEFAULT_UI_STATE);
    switch (action.type) {
        case CommonActions.Keys.Busy:
            return state.merge({"busy": true});
        case CommonActions.Keys.BusyCompleted:
            return state.merge({"busy": false});
        default:
            return state;
    }
}

module.exports = ui;
