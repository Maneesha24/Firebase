import React, { Component } from 'react';
import Header from './components/header';
import Routes from './routes';
import './App.css';
import SideBar from './components/sideBar';

class App extends Component {

  render() {
    return (
      <div className="App">
       <SideBar />
       <div>
        <Header />
       <Routes />
       </div>
      </div>
    );
  }
}

export default App;
