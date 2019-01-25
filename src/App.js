import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import firebase from 'firebase';
import base, { firebaseApp } from './base';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      userId: null,
      owner: null
    }
  }

  authHandler = async (authData) => {
    const userId = authData.user.uid;
    const dashboard = await base.fetch(userId, { context: this });

    if(!dashboard.owner) {
      await base.post(`${userId}/owner`, {
          data: userId
      });
    }

    this.setState({
      logged: true,
      userId,
      owner: dashboard.owner || userId
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();

    this.setState({
      logged: false,
      userId: null
    });
  }

  render() {

    return (
      <div className="App">
        <Header logged={this.state.logged} logout={this.logout}/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route
              exact
              path="/dashboard"
              render={() =>
                this.state.logged && this.state.userId
                  ? this.state.owner === this.state.userId && (<Redirect to={`/dashboard/${this.state.userId}`}/>)
                  : (<LoginPage authenticate={this.authenticate} />)}
            />
            <Route exact path="/dashboard/:dashboardId" render={(props) =>
              (<Dashboard {...props} {...this.state}/>)}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
