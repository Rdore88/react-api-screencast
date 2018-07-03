import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { loggedIn: false }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Link to='/home'>
          <button>Log In! </button>
        </Link>
      )
    } else {
      return (
        <div>
          <button>Log Out</button>
        </div>
      )
    }
  }
}

export default Login;
