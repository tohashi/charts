// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component<void> {
  render() {
    return (
      <Router>
        <Route excact path="/" component={Home} />
      </Router>
    );
  }
}

function Home() {
  return (
    <div>home</div>
  );
}

export default App;
