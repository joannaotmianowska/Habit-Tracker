import React, { Component } from 'react';
import '../../Main.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Footer />
      </div>
    );
  }
}

export default App;
