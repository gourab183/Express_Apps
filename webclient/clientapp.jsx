import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample/'

class MainComponent extends React.Component {
	constructor () {
		super();
		this.state = {message : "Hel"}		
	}
	handleClick(x)
	{
		this.setState({message : x});
	}
	onclick()
	{
		var i = document.getElementById("text1").value
		this.setState({message : i});
	}
	render () {
		return (
			<div>
					Search:<input type = "text" id = "text1"/>
					<button onClick = {this.onclick.bind(this)}>Chage State</button>
					<h1>Hello From ReactghP</h1>
					<Child.Child1 message = {this.state.message} handleClick = {this.handleClick.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(	
	<MainComponent/>,document.getElementById('mountapp')
);
