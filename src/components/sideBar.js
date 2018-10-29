import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class SideBar extends Component {

  onLogout = () => {

    cookies.remove('Kiddo');
    this.props.history.push('/');
    window.location.reload();
  }
  
  render() {
    return (
      <div className= "sideBar">
      <div className = "productName">
      <div className = "product">
      <i className="fa fa-star" aria-hidden="true"></i><h2>KIDDO</h2>
      </div>
      <hr />

      </div>

      <nav>
        <ul>
          <Link to = "/landing/dashboard"><li><i className="fas fa-tachometer-alt" style={{color:"skyblue"}}></i>Dashboard</li></Link>
          <Link to = "/landing/schools"><li><i className="fas fa-school" style={{color:"yellowgreen"}}></i>Schools</li></Link>
          <Link to = "/landing/profile"><li><i className="fas fa-user-circle" style={{color:"orange"}}></i>Profile</li></Link>
          <Link to = "/landing/notifications"><li><i className="fas fa-bell"></i>Notifications</li></Link>
        </ul>
      </nav>
      <div className="productName logout">
        <button onClick = {this.onLogout}>Logout</button>
      </div>

      </div>
    );
  }
}

export default withRouter(SideBar);