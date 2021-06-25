import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
// import Permissions from './pages/Main/Permissions';
import Page from './pages/Page/Page';
import Request from './pages/Main/Request/Request';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/permissions" component={Permissions} /> */}
          <Route exact path="/page" component={Page} />
          <Route exact path="/request" component={Request} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
