import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import PrivateRoute from '../routes/privateRoutes';
import Dashboard from './dashboard';
import School from './schools';
import { Switch } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div>
      <SideBar />
      </div>
       <div>
        <Header /> 
        <Switch>
        <PrivateRoute path = "/landing/schools" component = {School}/>
        <PrivateRoute path = "/landing/dashboard" component = {Dashboard}/>
        </Switch>
       </div>
      </div>
    );
  }
}

export default Landing;
