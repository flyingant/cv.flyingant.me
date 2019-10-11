import React from 'react';
import { connect } from 'react-redux';
// actions
import RootActions from '../actions/RootActions';
// components;
import AppContainer from './AppContainer';
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
                <AppContainer/>
                <BusySpinner/>
            </div>
        );
    }
}

const componentState = (state) => ({
    app: state.app
});

module.exports = connect(componentState)(App);