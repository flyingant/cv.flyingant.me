import React, { PropTypes } from 'react';
import styles from '../less/main.less';
import _ from 'lodash';

export default function DescriptionPanel(props) {
    let paragraphElement = _.map( props.summary,
        (text, index) => (<p key={index} dangerouslySetInnerHTML={{__html: text}} />)
    );
    return (
        <div className={styles.description}>
            {paragraphElement}
        </div>
    );
}

DescriptionPanel.propTypes = {
    summary: PropTypes.array
};