import React from 'react';
import ReactDom from 'react-dom';

class Child2 extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(
			<div>
				<button onClick={this.props.d.bind(this)}>Child2</button>
				<h1>Hello child2 hh, {this.props.message1}</h1>
			</div>
			)
	}
}
export default Child2;
// ReactDom.render(
// 	<MainComponent/>,document.getElementById('mountapp')
// 	);