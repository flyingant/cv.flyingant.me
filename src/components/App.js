import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
const { pushPath } = require('redux-simple-router');

import styles from '../less/main.less';

// actions
import RootActions from '../actions/RootActions';
// components;
import BusySpinner from '../common/components/BusySpinner';

class App extends React.Component {
    initializeApp() {
        this.props.dispatch(RootActions.Actions.InitializeApp());
    }

    componentDidMount() {
        this.initializeApp();
    }

    render() {
        return (
            <div>
                {this.props.children}
                <BusySpinner/>
            </div>
        );
    }
}

const componentState = (state) => ({
    app: state.app
});

module.exports = connect(componentState)(App);