import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  
  render() {
    return (
      <div className= "sideBar">
      <div className = "productName">
      <i className="fa fa-star" aria-hidden="true"></i><h2>KIDDO</h2>
      <hr />

      </div>
      <nav>
        <ul>
          <Link to = "/landing/dashboard"><li><i className="fas fa-tachometer-alt" style={{color:"skyblue"}}></i>Dashboard</li></Link>
          <Link to = "/landing/schools"><li><i className="fas fa-school" style={{color:"yellowgreen"}}></i>Schools</li></Link>
          <li><i className="fas fa-user-circle"></i>Profile</li>
          <li><i className="fas fa-bell"></i>Notifications</li>
        </ul>
      </nav>
      <div className="productName">
        <h2>LOGOUT</h2>
      </div>

      </div>
    );
  }
}

export default SideBar;