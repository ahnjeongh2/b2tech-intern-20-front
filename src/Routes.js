import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyle';
import Main from './pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
