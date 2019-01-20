import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { firebaseApp } from '../../base';
import firebase from 'firebase';
import HabitsList from './HabitsList/HabitsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {}
    }
  }

  componentDidUpdate() {

  }

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

  addHabit = habit => {
    const habits = { ...this.state.habits };
    habits[`habit${Date.now()}`] = habit;
    this.setState({ habits });
  }

  render() {

    // return <LoginPage authenticate={ this.authenticate }/>
    // TO DO - when user is logged in - show dashboard
    // if not - show login page
    return (
      <div>
        <HabitsList
          addHabit={ this.addHabit }
          habits={ this.state.habits }
        />
      </div>
    );
  }
}

export default Dashboard;
