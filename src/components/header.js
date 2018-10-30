import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (
      <div className= "header">
      <i className="fa fa-bars" aria-hidden="true"></i>
      {/* <ul className = "menu-dropdown"> */}
      <button>
        {this.props.profile.name}<i className="fa fa-arrow-down" aria-hidden="true">
        </i>
        </button>
        {/* </ul> */}
      </div>
    );
  }
}

export default Header;