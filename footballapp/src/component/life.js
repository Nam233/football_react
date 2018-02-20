import React, { Component } from 'react';
import '../css/life.css';
class life extends Component{
	constructor(){
		super();
		}
		render(){
			return (<div className="life">
				<ul>
					<li>
						<img src={require('../Images/5.png')} />
						<p>徐云龙争顶</p>
					</li>
					<li>
						<img src={require('../Images/6.png')} />
						<p>马季奇向裁判示意对手拉扯武磊进球后腿抽筋</p>
					</li>
					<li>
						<img src={require('../Images/6.png')} />
						<p>马季奇向裁判示意对手拉扯武磊进球后腿抽筋</p>
					</li>
					<li>
						<img src={require('../Images/6.png')} />
						<p>马季奇向裁判示意对手拉扯武磊进球后腿抽筋</p>
					</li>
					<li>
						<img src={require('../Images/5.png')} />
						<p>徐云龙争顶</p>
					</li>
					<li>
						<img src={require('../Images/6.png')} />
						<p>马季奇向裁判示意对手拉扯武磊进球后腿抽筋</p>
					</li>
				</ul></div>)
		}
}
export default life;