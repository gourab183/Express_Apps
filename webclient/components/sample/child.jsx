import React from 'react';
import ReactDom from 'react-dom';

class Child extends React.Component
{

	constructor()
	{
		super();
	}
	render()
	{
		return(
			<div>
				 <h1>Hello, {this.props.message}</h1>
			</div>
			);
	}
}
export default Child;
// ReactDom.render(
// 	<MainComponent/>,document.getElementById('mountapp')
// 	);