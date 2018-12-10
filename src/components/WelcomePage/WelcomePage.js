import React, { Component } from 'react';
import firstImage from '../../images/undraw_High_five_u364.svg';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page-section">
        <div className="welcome-page-row">
            <div className="details">
              <h4>Build Habits That Stick</h4>
              <p>
                Habit Tracker helps you learn the most effective process, <br></br>
                increase self-awareness and set priorities <br></br>
                so achieving your goals is easier than ever.
              </p>
              <div className="login-section">
                <button className="fb-login">Login with Facebook</button>
                <button className="gh-login">Login with GitHub</button>
              </div>
            </div>
            <div className="image-section">
              <img src= { firstImage }/>
            </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
