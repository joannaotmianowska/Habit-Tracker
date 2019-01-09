import React from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeSection.module.scss';

const renderImage = (image, header) => (
    <div className={styles.imageSection}>
        <img src={ image } alt={ header }/>
    </div>
);

const renderDetails = (header, text) => (
    <div className={styles.details}>
        <h4>{ header }</h4>
        <p>{ text }</p>
    </div>
);

const WelcomeSectionComponent = ({ header, text, image, textPlacement }) => (
    <div className={styles.section}>
        { textPlacement === "left"
            ? <div className={ `${styles.row} ${styles.left}`}>
                { renderDetails(header, text) }
                { renderImage(image, header) }
            </div>
            : <div className={ `${styles.row} ${styles.right}`}>
                { renderImage(image, header) }
                { renderDetails(header, text) }
            </div>
        }
    </div>
);

WelcomeSectionComponent.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    textPlacement: PropTypes.oneOf(['left', 'right']).isRequired,
}

export default WelcomeSectionComponent;