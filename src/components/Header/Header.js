import React, { Component } from 'react';
import logo from '../../images/HT_logo.png';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/">
            <img src={logo} className={styles.image} alt="logo" />
          </a>
        </div>
        <a href="/login" className={styles.button}>Log in</a>
      </header>
    );
  }
}

export default Header;
