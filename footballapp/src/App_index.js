import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Index from './public/Index';
import search from './public/search';
import main from './public/main';
import logout from './public/logout';
class appIndex extends Component {
  render() {
    return (
       <div>
          <Router>
              <div>
                  <Switch>
                     <Route path="/app/index" component={Index}></Route>
                     <Route path="/app/search" component={search}></Route>
                     <Route path="/app/main" component={main}></Route>
                     <Route path="/app/logout" component={logout}></Route>
                     <Route exact path="/app/index" component={Index} />  
                  </Switch>
               <footer className="footerNav selected">
                    <ul>
                        <li><NavLink to="/app/index" >首页</NavLink></li>
                        <li><NavLink to="/app/search">发现</NavLink></li>
                        <li><NavLink to="/app/main">我的</NavLink></li>
                        <li><NavLink to="/app/logout">退出</NavLink></li>
                    </ul>
               </footer>
              </div>
          </Router>
      </div>
    );
  }
}

export default appIndex;