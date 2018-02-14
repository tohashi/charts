// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import RechartsSample from './components/RechartsSample';
import './App.css';

const routes = [
  { name: 'Recharts', path: '/recharts', component: RechartsSample }
]

class App extends Component<void> {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{routes.find(r => r.path === window.location.pathname).name}</h1>
          </header>
          <Route path="/">
            <Redirect to={{ pathname: '/recharts' }} />
          </Route>
          <Route path="/recharts" component={RechartsSample} />
        </div>
      </Router>
    );
  }
}

export default App;
