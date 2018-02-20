import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import '../css/login.css';

class Login extends Component{
	constructor(){
		super();
		this.state={
			userId:"",
			pwd:""
		};
		this.submit=this.submit.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
		
	}
	componentWillMount(){
	 	var id=window.location.search.slice(1);
	 	console.log(id.split("=")[1]);
	 	
	 		this.setState({
	 			userId:id.split("=")[1]
	 		})
	 	
	 }
	 render() {
	 	  return (
	 	  	<div>
	 	  	<header className="form_header">
	 	  		  		足球圈——登录		
	 	  	</header>
	 	  	<div className="container"> 
				  <div className="form-group" >	    
				    <input type="text" value={this.state.userId} onChange={(e)=>{this.handleUserId(e)}} className="form-control" id="exampleInputEmail1"  placeholder="手机号" />
				  </div>
				  <div className="form-group">
				    <input type="password" value={this.state.pwd} onChange={(e)=>{this.handlePwd(e)}} className="form-control" id="exampleInputPassword1" placeholder="密码" />
				  </div>
				  <p>还没有账号?点击此处立即<span onClick={this.handleRegister}>注册</span></p>
				  <button onClick={this.submit} className="btn btn-lg btn-block btn-success">提交</button>
            </div>
            </div>
	 	  	)
	}
	handleUserId(e){
		var id=window.location.search.slice(1).slice(0,8);
	 	console.log(id);
		this.setState({
			userId:e.target.value
		})

	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	handleRegister(){
		this.props.history.replace("/register")
	}
	submit(e){
		var _this=this;
		var {userId,pwd}=this.state;
		if(!userId || !pwd){
			alert("不能为空！");
			return
		};
		axios.post('/api/login',{
			userId,
			pwd
		}).then(function(res){
			if(!res.code){
				//页面跳转，路由的切换user
				alert("登录成功");
				_this.props.history.replace(`/app/index/hot/live?username=${userId}`)
			}
		})
		
	}
	
  
}
export default Login;