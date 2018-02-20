import React, { Component } from 'react';
import '../css/gilrs.css';
class gilrs extends Component{
	constructor(){
		super();
		}
		render(){
			return (<div className="gilrs">
				<ul>
					<li>
						<img src={require('../Images/1.jpg')} />
						<p>足球美女</p>
					</li>
					<li>
						<img src={require('../Images/2.jpg')} />
						<p>足球美女</p>
					</li>
					<li>
						<img src={require('../Images/3.jpg')} />
						<p>足球美女</p>
					</li>
					<li>
						<img src={require('../Images/4.jpg')} />
						<p>足球美女</p>
					</li>
					<li>
						<img src={require('../Images/1.jpg')} />
						<p>足球美女</p>
					</li>
					<li>
						<img src={require('../Images/2.jpg')} />
						<p>足球美女</p>
					</li>
				</ul></div>)
		}
}
export default gilrs;