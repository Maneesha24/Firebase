import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  
  render() {
    return (
      <div className= "sideBar">
      <div className = "productName">
      <i class="fa fa-star" aria-hidden="true"></i><h2>KIDDO</h2>
      <hr />

      </div>
      <nav>
        <ul>
          <Link to = "/dashboard"><li><i class="fas fa-tachometer-alt" style={{color:"skyblue"}}></i>Dashboard</li></Link>
          <Link to = "/dashboard/schools"><li><i class="fas fa-school"></i>Schools</li></Link>
          <li><i class="fas fa-user-circle"></i>Profile</li>
          <li><i class="fas fa-bell"></i>Notifications</li>
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