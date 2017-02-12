import React from 'react';
import { connect } from 'react-redux';
import styles from '../less/main.less';
// components
import NamePanel from './NamePanel';
import DescriptionPanel from './DescriptionPanel';
import ContactPanel from './ContactPanel';
import CardContainer from './CardContainer';

class AppContainer extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <NamePanel
                    title={this.props.cv.title}
                    name={this.props.cv.name}
                    role={this.props.cv.role}
                    tag={this.props.cv.tag}
                    />
                <DescriptionPanel
                    summary={this.props.cv.summary}
                    />
                <CardContainer
                    cards={this.props.cv.cards}
                    />
                <ContactPanel
                    email={this.props.cv.email}
                    phone={this.props.cv.phone}
                    github={this.props.cv.github}
                    />
            </div>
        );
    }
}

const componentState = ({app}) => ({
    cv: app.toJS().cv
});

module.exports = connect(componentState)(AppContainer);