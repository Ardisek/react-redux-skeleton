import React, { Component } from 'react';
import HeaderTemplate from '../containers/header';
import FooterTemplate from '../containers/footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './notFound';
import Home from '../../home/containers/home';
import Login from '../containers/login';
import Register from '../../user/containers/register';
import RegisterSuccess from '../../user/containers/registerSuccess';
import Contact from './contactPage';
import Announcements from '../../announcement/containers/announcements';
import Users from '../../user/containers/users';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }} />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <PropsRoute path="/" logo="skeletonLogo" component={HeaderTemplate} />

          <div id="wrap">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/zaloguj" component={Login} />
              <Route path="/rejestracja" component={Register} />
              <Route path="/zarejestrowano" component={RegisterSuccess} />
              <Route path="/kontakt" component={Contact} />
              <Route path="/ogloszenia" component={Announcements} />
              <Route path="/uzytkownicy" component={Users} />
              <Route path="*" component={NotFound} />
            </Switch>

          </div>

          <FooterTemplate />

        </div>
      </Router>
    );
  }
}

export default App;
