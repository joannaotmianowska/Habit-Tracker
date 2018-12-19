import React, { Component } from 'react';
import firstImage from '../../images/undraw_High_five_u364.svg';

import styles from './WelcomePage.module.scss';

class WelcomePage extends Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.row}>
            <div className={styles.details}>
              <h4>Build Habits That Stick</h4>
              <p>
                Habit Tracker helps you learn the most effective process, <br></br>
                increase self-awareness and set priorities <br></br>
                so achieving your goals is easier than ever.
              </p>
              <div className={styles.loginSection}>
                <button className="fb-login">Login with Facebook</button>
                <button className="gh-login">Login with GitHub</button>
              </div>
            </div>
            <div className={styles.imageSection}>
              <img src= { firstImage }/>
            </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
