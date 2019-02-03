import React, { Component } from 'react';
import logo from '../../images/HT_logo.png';

import styles from './Header.module.scss';

class Header extends Component {

  renderLoggedUserSection() {
    return <React.Fragment>
      <a
        href={ `/dashboard/${this.props.userId}` }
        className={ `${styles.button} ${styles.ongoingHabits}` }>
        Ongoing habits
      </a>
      <a
        href="/"
        onClick={ this.props.logout }
        className={ `${styles.button} ${styles.logout}` }>
        Log out
      </a>
    </React.Fragment>
  }

  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.logoContainer }>
          <a href="/">
            <img src={ logo } className={ styles.image } alt="logo" />
          </a>
        </div>
        <div className={ styles.loggedUserSection }>
          { !this.props.logged
            ? <a href="/dashboard" className={ `${ styles.button } ${ styles.loginIn }`}>Log in</a>
            : this.renderLoggedUserSection()
          }
        </div>
      </header>
    );
  }
}

export default Header;
