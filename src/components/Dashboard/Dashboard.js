import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { firebaseApp } from '../../base';
import firebase from 'firebase';

class Dashboard extends Component {
  authenticate = provider => {
    console.log('auth', provider);

    const authProvider = new firebase.auth();
    firebaseApp
      .auth()
    console.log(authProvider)
  }

  render() {

    return <LoginPage authenticate={ this.authenticate }/>
    // return (
    //   <h1>This is Dashboard</h1>
    // );
  }
}

export default Dashboard;
