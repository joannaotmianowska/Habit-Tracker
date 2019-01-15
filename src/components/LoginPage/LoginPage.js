import React, { Component } from 'react';
import styles from './LoginPage.module.scss';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  render() {
    return (
      <div className={styles.login}>
        <button
          className={styles.facebook}
          onClick={() => { this.props.authenticate('Facebook')}}
        >
            Log in with Facebook
        </button>
        <button
          className={styles.github}
          onClick={() => { this.props.authenticate('GitHub')}}
        >
            Log in with GitHub
        </button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default LoginPage;
