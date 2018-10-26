import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Landing from '../pages/landing';
import Schools from '../pages/schools';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
             <Route path = "/dashboard/schools" component = {Schools} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Landing} />

            </Switch>
      </div>
    );
  }
}

export default Routes;
