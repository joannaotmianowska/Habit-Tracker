import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import base, { firebaseApp } from '../../base';
import firebase from 'firebase';
import HabitsList from './HabitsList/HabitsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {}
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    this.ref = base.syncState(`${params.dashboardId}/habits`, {
      context: this,
      state: 'habits'
    });
  }

  componentDidUpdate() {
    Object.keys(this.state.habits).map(key => this.checkIfCompleted(key));
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

  updateHabit = (key, updatedHabit) => {
    const habits = { ...this.state.habits };
    habits[key] = updatedHabit;
    this.setState({ habits });
}

  checkIfCompleted = key => {
    // TO DO - mark habit as completed
    const habitToUpdate = this.state.habits[key];

    if (this.state.habits[key].progress === this.state.habits[key].duration) {
      console.log('habit completed');
      habitToUpdate.completed = true;
    } else {
      habitToUpdate.completed = false;
    }
  }

  changeHabitProgress = (key, direction) => {
    const habitToUpdate = this.state.habits[key];

    direction === "up" ? habitToUpdate.progress++ : habitToUpdate.progress--;

    this.updateHabit(key, habitToUpdate);
  }

  render() {

    // return <LoginPage authenticate={ this.authenticate }/>
    // TO DO - when user is logged in - show dashboard
    // if not - show login page
    return (
      <div>
        <HabitsList
          addHabit={ this.addHabit }
          changeHabitProgress={ this.changeHabitProgress }
          habits={ this.state.habits }
        />
      </div>
    );
  }
}

export default Dashboard;
