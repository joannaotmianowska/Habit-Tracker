import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { firebaseApp } from '../../base';
import firebase from 'firebase';

class Dashboard extends Component {

  authHandler = async (authData) => {
    // TO DO - when dashboard is ready
    // 1. Look up current dashboard in database
    // 2. Claim the owner if there is no
    // 3. Set the state of dashboard component to reflect current user
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider).then(this.authHandler);
  };

  render() {

    return <LoginPage authenticate={ this.authenticate }/>
    // TO DO - when user is logged in - show dashboard
    // if not - show login page
    // return (
    //   <h1>This is Dashboard</h1>
    // );
  }
}

export default Dashboard;
