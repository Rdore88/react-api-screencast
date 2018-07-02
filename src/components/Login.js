import React, { Component } from 'react';
import Home from './Home';

class Login extends Component {
  state = { loggedIn: false }

  handleLogin = event => {
    this.setState({ loggedIn: true })
  }

  handleLogout = event => {
    this.setState({ loggedIn: false })
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <button onClick={this.handleLogin}>Log In!</button>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleLogout}>Log Out</button>
          <Home />
        </div>
      )
    }
  }
}

export default Login;
