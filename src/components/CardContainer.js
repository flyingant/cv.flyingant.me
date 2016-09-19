import React, { PropTypes } from 'react';
import styles from '../less/main.less';
import _ from 'lodash';
import Card from './Card';

export default function CardContainer(props) {
    let cardsElement = _.map(props.cards,
        (card, index) => (
            <Card
                key={index}
                style={card.style}
                title={card.title}
                contents={card.contents}
                />
        )
    );
    return (
        <div className={styles.card_container}>
            <div className={styles.separate_line}></div>
            <div className={styles.card_box}>
                {cardsElement}
            </div>
        </div>
    );
}

CardContainer.propTypes = {
    cards: PropTypes.array
};