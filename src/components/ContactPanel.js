import React, { PropTypes } from 'react';
import styles from '../less/main.less';

export default function ContactPanel(props) {
    return (
        <div className={styles.contact}>
            <div>
                <a href={'mailto:' +props.email} target="_blank">
                    <i className={styles.email} title={props.email}/>
                    <b>{props.email}</b>
                </a>
            </div>
            <div>
                <i className={styles.phone} title={props.phone}/>
                <b>{props.phone}</b>
            </div>
            <div>
                <a href={props.github} target="_blank">
                    <i className={styles.github} title={props.github}/>
                    <b>{props.github}</b>
                </a>
            </div>
        </div>
    );
}

ContactPanel.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    github: PropTypes.string,
};