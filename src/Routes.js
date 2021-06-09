import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Permissions from './pages/Main/Permissions';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/permissions" component={Permissions} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
