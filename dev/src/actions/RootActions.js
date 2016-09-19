import React from 'react';
import {createActions} from '../utils/ActionBuilder'
import CommonActions from '../common/actions/CommonActions'
const { pushPath } = require('redux-simple-router');
import NetworkUtility from '../utils/NetworkUtility'

module.exports = createActions({

    InitializeApp(args){
        return this.dispatchMe(args)
            .then(() => NetworkUtility.getAppData()
                .then((data) => {
                        let dataJSON;
                        if (data instanceof Object) {
                            dataJSON = data;
                        } else {
                            dataJSON = JSON.parse(data);
                        }
                        return this.dispatch(this.Actions.InitializeAppCompleted(dataJSON))
                    }
                )
            );
    }
})