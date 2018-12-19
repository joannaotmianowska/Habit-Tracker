import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path="/dashboard/:dashboardId" component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
