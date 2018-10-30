import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

  onLogout = () => {
    cookies.remove('Kiddo');
    window.location.reload();
    this.props.history.push('/landing');

  }
  render() {

    return (
      <div className= "header">
      <i className="fa fa-bars" aria-hidden="true"></i>
      <div className="dropdown">
      <button className="dropbtn">
        {this.props.profile.name}<i className="fa fa-arrow-down" aria-hidden="true">
        </i>
        </button>
        <div className="dropdown-content">
    <Link to = "/landing/profile">My profile</Link>
    <Link to = ""><button onClick = {this.onLogout}>Logout</button></Link>

   
  </div>
        </div>
      </div>
    );
  }
}

export default Header;