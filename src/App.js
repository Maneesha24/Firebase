import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import { Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
       <Routes />
       </Switch>
       </div>
    );
  }
}

export default App;
