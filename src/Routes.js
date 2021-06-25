import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
// import Permissions from './pages/Main/Permissions';
import MyPage from './pages/Page/MyPage/MyPage';
import Request from './pages/Main/Request/Request';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/permissions" component={Permissions} /> */}
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/request" component={Request} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
