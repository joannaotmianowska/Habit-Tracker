import React, { Component } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <span>
          Contact us
          <br />
          office@habittracker.com
        </span>
      </div>
    );
  }
}

export default Footer;
