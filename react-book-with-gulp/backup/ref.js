/*** @jsx React.DOM */

var APP = React.createClass({
	getInitialState:function(){
		return {
			red:0,
			green:0,
			blue:0
		}
	},
	update:function(){
		this.setState({
			red:this.refs.red.refs.range.getDOMNode().value,
			green:this.refs.green.refs.range.getDOMNode().value,
			blue:this.refs.blue.refs.range.getDOMNode().value,

		})

	},
	render:function(){
		return (
			<div>
				<p>{this.props.text}</p>
				<Slider ref='red' update={this.update}></Slider>
				<label>{this.state.red}</label>
				<Slider ref='green' update={this.update}></Slider>
				<label>{this.state.green}</label>

				<Slider ref='blue' update={this.update}></Slider>
				<label>{this.state.blue}</label>
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

var Slider = React.createClass({
	render:function(){
		return (<div>
				<input ref="range" type="range" min="0" max="255" onChange={this.props.update}/>
			</div>);
	}
});

React.render(<APP num={1} text="Hello world"/>,document.body);
