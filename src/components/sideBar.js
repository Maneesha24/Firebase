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
      {/* <i className="fa fa-star" aria-hidden="true"></i> */}
      <h2>KIDDO</h2>
      {/* </div> */}
      {/* <hr /> */}

      </div>
      <div className = "user">
        <img src = {this.props.profile.logo} alt = "profile" style = {{width:'70px',height:'80px',border:'1px solid #5e6e92',borderRadius: '50%'}} />
        <h4>{this.props.profile.name}</h4>
      </div>

      <nav>
        <ul>
          <Link to = "/landing/dashboard"><li><i className="fa fa-th-large" aria-hidden="true" style = {{color:'yellow'}}></i>Dashboard</li></Link>
          <Link to = "/landing/schools"><li><i className="fas fa-school" style={{color:"#70e2ef"}}></i>Schools</li></Link>
          <Link to = "/landing/profile"><li><i className="fas fa-user-circle" style={{color:"orange"}}></i>Profile</li></Link>
          <Link to = "/landing/notifications"><li><i className="fas fa-bell"></i>Notifications</li></Link>
        </ul>
      </nav>
      {/* <div className="productName logout">
        <button onClick = {this.onLogout}>Logout</button>
      </div> */}

      </div>
    );
  }
}

export default withRouter(SideBar);