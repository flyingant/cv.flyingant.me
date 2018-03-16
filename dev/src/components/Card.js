import React, { PropTypes } from 'react';
import styles from '../less/main.less';
import _ from 'lodash';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMore: false,
            contents: this.props.contents
        };
    }
    _displayMore() {
        this.setState({ displayMore: !this.state.displayMore});
    }

    render() {
        let contents = [];
        if (this.state.displayMore) {
            contents = this.state.contents;
        } else {
            contents = this.state.contents.slice(0, 4);
        }
        let contentElement = _.map(contents,
            (content, index) => (
                <div key={index} className={styles.column}>
                    <p
                        className={styles.column_title}
                        dangerouslySetInnerHTML={{__html: content.title}}
                        />
                    <p
                        className={styles.column_content}
                        dangerouslySetInnerHTML={{__html: content.description}}
                        />
                </div>)
        );
        let styleClassName = null;
        switch (this.props.style) {
            case 'experiences': styleClassName = styles.experiences; break;
            case 'skills': styleClassName = styles.skills; break;
            case 'career': styleClassName = styles.career; break;
            case 'education': styleClassName = styles.education; break;
            default : styleClassName = null;
        }
        return (
            <div className={styles.card}>
                <div className={styles.title}>
                    {this.props.title}
                    <div className={styleClassName} />
                </div>
                {contentElement}
                {
                    this.state.displayMore === false && this.state.contents.length > 4 ?
                        <div
                            className={styles.operator}
                            onClick={this._displayMore.bind(this)}
                            > Show More </div>
                        : null
                }
                {
                    this.state.displayMore === true ?
                        <div
                            className={styles.operator}
                            onClick={this._displayMore.bind(this)}
                            > Hide </div>
                        : null
                }
            </div>
        );
    }
}

Card.propTypes = {
    style: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.array
};