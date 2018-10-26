import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    return (
      <div className= "header">
      <div>
      <input placeholder = "Search here .."/>
      </div>
      <div className="profile-image">
          <img src = "" alt = "profile" />
      </div>
      </div>
    );
  }
}

export default Header;