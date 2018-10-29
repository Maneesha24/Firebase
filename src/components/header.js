import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

class Header extends Component {


  state = {
    profile: [],
    isLoading: false
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
      this.setState({ profile: data.user, isLoading: true })
    }
    // console.log(data);
    // console.log(this.state.profile[0]);
  }

  
  render() {

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

    return (
      <div className= "header">
      <div>
      <input placeholder = "Search here .." type = "text" className = "input"/>
      </div>
      <div className="">
      <img alt = "profile" src = {this.state.profile[0].logo} style={{width: '50px',height: '50px',borderRadius : '50%',border : '3px groove #e02a64'}}  height='50' width='100'/>
      </div>
      </div>
    );
  }
}

export default Header;