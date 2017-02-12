import React, { PropTypes } from 'react';
import styles from '../less/main.less';

export default function NamePanel(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.profile_box}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <hr/>
                <div className={styles.role}>
                    {props.role}
                </div>
                <div className={styles.year}>
                    {new Date().getFullYear()}
                </div>
                <div className={styles.tag}>
                    {props.tag}
                </div>
            </div>
        </div>
    );
}

NamePanel.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    tag: PropTypes.string
};