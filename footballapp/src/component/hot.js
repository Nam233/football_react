import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Live from './live';
import life from './life';
import gilrs from './gilrs';
import '../css/hot.css';
class hot extends Component{
	constructor(){
		super();
		}
		render(){
			return (
				<div>  
					    <nav>
		                    <ul>
		                        <li><NavLink to="/app/index/hot/live" activeClassName="hot_active">足球现场</NavLink></li>
		                        <li><NavLink to="/app/index/hot/life"  activeClassName="hot_active">足球生活</NavLink></li>
		                        <li><NavLink to="/app/index/hot/gilrs"  activeClassName="hot_active">足球美女</NavLink></li>
		                    </ul>
		                </nav>
		                <Switch>
		                   <Route path="/app/index/hot/live" component={Live}></Route>
		                    <Route path="/app/index/hot/life" component={life}></Route>
		                    <Route path="/app/index/hot/gilrs" component={gilrs}></Route>
		                     <Redirect path="/app/index/hot" to={{pathname: '/app/index/hot/live'}} />
				        </Switch> 
				</div>)
		}
}
export default hot;