import React from 'react';
import { connect } from 'react-redux'

import styles from '../../less/common.less'

class BusySpinner extends React.Component {
    render() {
        if (this.props.busy) {
            return (
                <div className={styles.spinner}>
                    <div className={styles.icon}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

module.exports = connect((state) => ({busy: state.app.getIn(["ui", "busy"])}))(BusySpinner);