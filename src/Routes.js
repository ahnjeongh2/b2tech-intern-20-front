import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
// import Permissions from './pages/Main/Permissions';
import MyPage from './pages/MyPage/MyPage';
import Request from './pages/Main/Request/Request';
import AdminMyPage from './pages/Admin/AdminMyPage/AdminMyPage';
import Default from './pages/Admin/Default/Default';
import Commute from './pages/Admin/Commute/Commute';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/permissions" component={Permissions} /> */}
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/admin/mypage" component={AdminMyPage} />
          <Route exact path="/admin" component={Default} />
          <Route exact path="/admin/commute" component={Commute} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
