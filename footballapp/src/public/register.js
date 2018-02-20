import React, { Component } from 'react';
import axios from 'axios';
import '../css/register.css';
class Register extends Component{
	constructor(){
		super();
		this.state={
			userId:"",
			pwd:"",
			username:""
		};
		this.submit=this.submit.bind(this);
	}

	 render() {
	 	  return (
	 	  	<div>
	 	  		<header className="form_header">
	 	  		  		足球圈——注册		
	 	  	    </header>
	 	  		<div className="container">
				  <div className="form-group" >
				    
				    <input type="text" value={this.state.userId} onChange={(e)=>{this.handleUserId(e)}}  className="form-control" id="exampleInputEmail1"  placeholder="手机号" />
				  </div>
				  <div className="form-group">
				   
				    <input type="password" value={this.state.pwd} onChange={(e)=>{this.handlePwd(e)}}  className="form-control" id="exampleInputPassword1" placeholder="密码" />
				  </div>
				  <div className="form-group">
				   
				    <input type="text" value={this.state.username} onChange={(e)=>{this.handleUserName(e)}}  className="form-control" id="exampleInputPassword1" placeholder="昵称" />
				  </div>
				  <button onClick={this.submit} className="btn btn-lg btn-block btn-success">提交</button>

            </div>
           </div>
	 	  	)
	}
	handleUserId(e){
		this.setState({
			userId:e.target.value
		})
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	handleUserName(e){
		this.setState({
			username:e.target.value
		})
	}
	submit(e){
		var _this=this;
		var {userId,pwd,username}=this.state;
		if(!userId || !pwd ||!username){
			alert("不能为空！");
			return
		};
		//console.log(this.state);
		//axios异步
		axios.post('/api/register',{
			userId,
			pwd,
			username
		}).then(function(res){
			if(!res.code){
				//页面跳转，路由的切换user
				alert("注册成功！");
				_this.props.history.replace(`/login?um=${userId}`)
			}
		})
		
	}
	
  
}
export default Register;