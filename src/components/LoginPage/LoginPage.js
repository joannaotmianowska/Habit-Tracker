import React, { Component } from 'react';
import styles from './LoginPage.module.scss';

class LoginPage extends Component {
  render() {
    return (
      <div className={styles.login}>
        <button className={styles.facebook}>
            Log in with Facebook
        </button>
        <button className={styles.github}>
            Log in with GitHub
        </button>
      </div>
    );
  }
}

export default LoginPage;
