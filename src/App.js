import React, { Component } from 'react';
import Header from './components/header';
import Routes from './routes';
import './App.css';
import SideBar from './components/sideBar';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import PrivateRoute from './routes/privateRoutes';
import Landing from './pages/landing';


class App extends Component {

  render() {
    return (
      <div className="App">
       {/* <SideBar />
       <div>
        <Header /> */}
       <Routes />
       </div>
      //  </div>
    );
  }
}

export default App;
