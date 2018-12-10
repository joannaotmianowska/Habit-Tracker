import React, { Component } from 'react';
import logo from '../../images/HT_logo.png';

class Header extends Component {
  render() {
    return (
        <header className="header">
            <div className="logo-container">
              <img src={ logo } className="logo" alt="logo" />
            </div>
            <button className="login-btn">Log in</button>
        </header>
    );
  }
}

export default Header;
