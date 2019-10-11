import Immutable from 'immutable';
import { combineReducers } from 'redux'

import UIReducer from './UIReducer'
import CVReducer from './CVReducer'

let combineImmutableReducers = reducers => {
    return (state, action) => Immutable.Map(reducers(
        Immutable.Map.isMap(state) ? state.toObject() : state, action
    ));
};

//combine all your reducers here
let reducers = combineReducers({
    //add reducers here
    ui: UIReducer,
    cv: CVReducer
})

module.exports = combineImmutableReducers(reducers)