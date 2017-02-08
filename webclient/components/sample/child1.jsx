import React from 'react';
import ReactDom from 'react-dom';
import Child2 from './child2.jsx';

class Child1 extends React.Component
{
	
	constructor()
	{
		super();
		this.state = {message1: "abc"}
	}
	handle()
	{
		this.props.handleClick("Bangalore");
	}
	d()
	{
		this.setState({message1:"nnnnn"});
	}
	render()
	{
		return(
			<div>
			
			<button onClick={this.handle.bind(this)}>click here</button>
			<h1>Hello1, {this.props.message}</h1>
			<Child2 message1={this.state.message1} d={this.d.bind(this)}/>
			</div>
			)
	}
}
export default Child1;
// ReactDom.render(
// 	<MainComponent/>,document.getElementById('mountapp')
// 	);