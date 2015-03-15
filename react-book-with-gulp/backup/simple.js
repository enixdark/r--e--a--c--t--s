/*** @jsx React.DOM */

var APP = React.createClass({
	getInitialState:function(){
		return {
			text:'hello Quan'
		}
	},
	getDefaultsProps:function(){
		return {
			text:'dasdds',
			num:0
		}
	},
	updateText:function(e){
		this.setState({text:e.target.value})

	},
	propTypes:{
		text:React.PropTypes.string,
		num:React.PropTypes.number.isRequired
	},
	render:function(){
		return (
			<div>
				<p>{this.props.text}</p>
				<Widget text={this.state.text} update={this.updateText}></Widget>

				<strong>{this.props.num}</strong>
			</div>
		);
	}
});

// var Widget = React.createClass({
// 	render:function(){
// 		<div>
// 				<input type="text" onChange={this.updateText}/>
// 				<p>{this.state.text}</p>
// 			</div>
// 	}
// });

var Widget = React.createClass({
	render:function(){
		return (<div>
				<input type="text" onChange={this.props.update}/>
				<p>{this.props.text}</p>
			</div>);
	}
});

React.render(<APP num={5} text="Hello world"/>,document.body);
