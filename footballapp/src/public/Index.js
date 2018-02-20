import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom';
import hot from '../component/hot';
import care from '../component/Focus';
import '../css/Index.css';
class Index extends Component{
	constructor(){
		super();
		this.state={
			style:"block",
			hide:'none'
		}
		}
		render(){
			return (
			<div>
				<header>
						<li><NavLink to="/app/index/hot" activeClassName="index_active">热点</NavLink></li>
						<li><NavLink to="/app/index/focus" activeClassName="index_active">关注</NavLink></li>
				</header> 
				<Switch>
		                   <Route path="/app/index/hot" component={hot}></Route>
		       			   <Route path="/app/index/focus" component={care}></Route>
		       			   <Redirect path="/app/index" to={{pathname: '/app/index/hot/live'}} />
				</Switch>	
     		</div>
				)
		}
}
export default Index;