import React, { Component } from 'react';
import logo from '../../images/HT_logo.png';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
  }
}

export default Header;
