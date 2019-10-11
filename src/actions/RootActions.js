import {createActions} from '../utils/ActionBuilder'
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
