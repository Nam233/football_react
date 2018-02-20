import React, { Component } from 'react';
import '../css/Focus.css';
class care extends Component{
	constructor(){
		super();
		}
		render(){
			return (<div className="focus">
				<ul>
					<li>
						<div className="t">
							<div className="left"></div>
							<div className="right">
								<div className="top">
									<p className="na">我叫小萌</p>
									<i className="nl">382344</i>
								</div>
								<div className="under">我是小萌我怕谁！哈哈哈哈！</div>
							</div>
						</div>
						<img src={require('../Images/7.png')} />
						<p className="x">小丸子啊小丸子!</p>
					</li>
					<li>
						<div className="t">
						<div className="left"></div>
						<div className="right">
							<div className="top">
								<p className="na">我叫小萌</p>
								<i className="nl">382344</i>
							</div>
							<div className="under">我是小萌我怕谁！哈哈哈哈！</div>
						</div>
						</div>
						<img src={require('../Images/7.png')} />
						<p className="x">小丸子啊小丸子!</p>
					</li>
				</ul>
				</div>)
		}
}
export default care;