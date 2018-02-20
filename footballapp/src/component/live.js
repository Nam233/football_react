import React, { Component } from 'react';
import '../css/live.css';
class Live extends Component{
	constructor(){
		super();
		}
		render(){
			return (
			<div className="con">
				<ul>
					<li>
						<img src={require('../Images/1.png')} />
						<p>小丸子啊小丸子</p>
					</li>
					<li>
						<img src={require('../Images/2.png')} />
						<p>小丸子萌萌哒</p>
					</li>
					<li>
						<img src={require('../Images/3.png')} />
						<p>小丸子啊小丸子</p>
					</li>
					<li>
						<img src={require('../Images/4.png')} />
						<p>小丸子萌萌哒</p>
					</li>
					<li>
						<img src={require('../Images/1.png')} />
						<p>小丸子萌萌哒</p>
					</li>
					<li>
						<img src={require('../Images/2.png')} />
						<p>小丸子萌萌哒</p>
					</li>
				</ul>
		
	</div>)
		}
}
export default Live;