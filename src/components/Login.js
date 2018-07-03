import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilms, fetchPlanets, fetchStarships } from '../actions/starwarsActions';

class Login extends Component {
  state = { loggedIn: false }

  handleLogin = event => {
    this.props.fetchFilms()
    this.props.fetchPlanets()
    this.props.fetchStarships()
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Link to='/home'>
          <button onClick={this.handleLogin}>Log In! </button>
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

function mapStateToProps(state){
  return {
    
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchFilms,
    fetchPlanets,
    fetchStarships
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
