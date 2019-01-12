import React, { Component } from 'react';
import logo from '../../images/HT_logo.png';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logo} className={styles.image} alt="logo" />
        </div>
        <button className={styles.button}>Log in</button>
      </header>
    );
  }
}

export default Header;
