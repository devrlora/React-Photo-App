import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        {/* Will route user to login page, then after authenticating,to the navbar */}
        <Switch>
            <Route exact path ={'/'} render={...props} loggedIn={this.state.loggedIn}/>
            <Route exact path ={'/navbar'} component={Navbar} />
          </Switch>
        </BrowserRouter>
  </div>
    );
  }
}

export default App;
