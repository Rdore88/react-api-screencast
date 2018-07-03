import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
