import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Landing from '../pages/landing';
import Schools from '../pages/schools';
import PrivateRoute from './privateRoutes';
import Home from '../pages/home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
              {/* <PrivateRoute path = "/landing/schools" component = {Schools} />
              <PrivateRoute path="/landing/dashboard" component={Dashboard} /> */}
              <PrivateRoute path = "/landing" component = {Landing} />
              <Route exact path="/" component={Home} />

            </Switch>
      </div>
    );
  }
}

export default Routes;
