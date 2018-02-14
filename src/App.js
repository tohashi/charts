// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RechartsSample from './components/RechartsSample';
import './App.css';

class App extends Component<void> {
  render() {
    return (
      <Router>
        <div className="App">
          <Route excact path="/" component={Home} />
          <Route path="/recharts" component={RechartsSample} />
        </div>
      </Router>
    );
  }
}

export default App;
