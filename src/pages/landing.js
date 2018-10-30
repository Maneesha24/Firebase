import React, { Component } from 'react';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import PrivateRoute from '../routes/privateRoutes';
import Dashboard from './dashboard';
import Profile from './profile';
import School from './schools';
import { Switch } from 'react-router-dom';
import Notifications from './notifications';
import SchoolInfo from './schoolInfo';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

class Landing extends Component {

  state = {
    profile: [],
    isLoading: true
  }

  componentDidMount = async() => {
    const res = await fetch('/api/super-admin/profile',{
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Authorization' : cookie,
        'Content-Type' : 'application/json',
      }
    });
    const data = await res.json();
    if(data.success){
      this.setState({ profile: data.user, isLoading: false })
    }
  }
  render() {
    if(this.state.isLoading){
      return <div>Loading ...</div>
    }
    return (
      <div className="landing">
      <div>
      <SideBar profile = {this.state.profile[0]} />
      </div>
       <div>
        <Header profile = {this.state.profile[0]} /> 
        <Switch>
        <PrivateRoute path = "/landing/notifications" component = {Notifications}/>
        <PrivateRoute path = "/landing/profile" component = {Profile}/>
        <PrivateRoute path = "/landing/schools/:id" component = {SchoolInfo}/>
        <PrivateRoute path = "/landing/schools" component = {School}/>
        <PrivateRoute path = "/landing/dashboard" component = {Dashboard}/>
        </Switch>
       </div>
      </div>
    );
  }
}

export default Landing;
