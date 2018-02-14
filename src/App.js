// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import RechartsSample from './components/RechartsSample';
import VictorySample from './components/VictorySample';
import './App.css';

const routes = [
  { name: 'Recharts', path: '/recharts', component: RechartsSample },
  { name: 'Victory', path: '/victory', component: VictorySample }
]

type State = {
  currentName: string
}

class App extends Component<void, State> {
  state = { currentName: '' }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {routes.map(r => {
              return (
                <NavLink
                  key={r.name}
                  to={r.path}
                  activeClassName="selected"
                >
                  {r.name}
                </NavLink>
              );
            })}
          </header>
          <Route exact path="/">
            <Redirect to="/recharts" />
          </Route>
          {routes.map(r => <Route key={r.name} path={r.path} component={r.component} />)}
        </div>
      </Router>
    );
  }
}

export default App;
