import React, { Component } from 'react';
import styles from './WelcomePage.module.scss';
import WelcomeSectionComponent from './WelcomeSection/WelcomeSection';
import entrySectionImage from '../../images/undraw_High_five.svg';
import processSectionImage from '../../images/habit_loop.png';
import writingSectionImage from '../../images/undraw_to_do_list.svg';
import prioritySectionImage from '../../images/undraw_country_side.svg';
import {
  entrySectionHeader,
  entrySectionText,
  processSectionHeader,
  processSectionText,
  writingSectionHeader,
  writingSectionText,
  prioritySectionHeader,
  prioritySectionText,
} from './SectionsDetails';

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.grayBackground}>
          <WelcomeSectionComponent
            header={entrySectionHeader}
            text={entrySectionText}
            image={entrySectionImage}
            textPlacement="left"
          />
        </div>
        <div className={styles.violetBackground}>
          <WelcomeSectionComponent
            header={processSectionHeader}
            text={processSectionText}
            image={processSectionImage}
            textPlacement="right"
          />
        </div>
        <div className={styles.whiteBackground}>
          <WelcomeSectionComponent
            header={writingSectionHeader}
            text={writingSectionText}
            image={writingSectionImage}
            textPlacement="left"
          />
        </div>
        <div className={styles.grayBackground}>
          <WelcomeSectionComponent
            header={prioritySectionHeader}
            text={prioritySectionText}
            image={prioritySectionImage}
            textPlacement="right"
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
