import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './screens/login';
import Cotacao from './screens/cotacao';
import logo from './logo.svg';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/cotacao' component={Cotacao} />
      </Switch>
    );
  }
}

export default App;
