import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import Routes from '../routes';
import PrivateRoute from '../routes/privateRoutes';
import Dashboard from './dashboard';
import School from './schools';


class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div>
      <SideBar />
      </div>
       <div>
        <Header /> 
        <PrivateRoute path = "/landing/schools" component = {School}/>
        <PrivateRoute path = "/landing/dashboard" component = {Dashboard}/>
       </div>
      </div>
    );
  }
}

export default Landing;
