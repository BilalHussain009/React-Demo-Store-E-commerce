import React from 'react';
import { Router, Route, Switch, Link, NavLink ,withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Cart from '../components/Cart';
import Description from '../components/ItemDescription';
import SearchResult from '../components/SearchResult';
import Merch from '../components/Merch';
import  NavbarClickPage from '../components/NavbarClickPage';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>

        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/cart" component={Cart} />
        <Route path='/description' component={Description}/>
        <Route path='/search' component={SearchResult}/>
        <Route path='/merch' component={Merch}/>
        <Route path='/socks' component={NavbarClickPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>

);

export default AppRouter;
