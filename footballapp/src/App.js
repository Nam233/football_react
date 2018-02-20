import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import appIndex from './App_index';
import Login from './public/login';
import Register from './public/register';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
              
                         <Switch>
                             <Route path="/login" component={Login}></Route>
                             <Route path="/register" component={Register}></Route>
                            <Route path="/app" component={appIndex}></Route>
                             <Redirect exact path="/" to="/login" />
                                               
                          </Switch> 
              
          </Router>
    </div>
    );
  }
}

export default App;
