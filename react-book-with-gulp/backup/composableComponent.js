/*** @jsx React.DOM */

var PersonTable = React.createClass({
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
			val:this.refs.red.refs.range.getDOMNode().value
			// green:this.refs.green.refs.range.getDOMNode().value,
			// blue:this.refs.blue.refs.range.getDOMNode().value,

		})

	},
	render:function(){
		return (
			<div>
				<p>{this.props.text}</p>
				<InputNum
					ref='red'
					min={0}
					max={255}
					step={1}
					type="range"
					label="this is text num"
					val={+this.state.red}
					update={this.update}
				>
				</InputNum>

				<InputNum
					ref='red'
					min={0}
					max={255}
					step={1}
					type="number"
					label="this is text num"
					val={+this.state.red}
					update={this.update}
				>
				</InputNum>
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

var InputNum = React.createClass({
	PropTypes:{
		min:React.PropTypes.number,
		max:React.PropTypes.number,
		step:React.PropTypes.number,
		val:React.PropTypes.number,
		label:React.PropTypes.string,
		update:React.PropTypes.func.isRequired,
		type:React.PropTypes.oneOf(['number','range'])
	},
	getDefaultsProps:{
		min:null,
		max:null,
		step:1,
		val:0,
		label:'',
		type:'range'
	},
	render:function(){
		var label = this.props.label!=='' ? <label> { this.props.label} : {this.props.val} </label> : ''
		return (<div>
				<input ref="range"
					   type={this.props.type}
					   min={this.props.min}
					   max={this.props.max}
					   defaultValue={this.props.val}
					   onChange={this.props.update}/>
					{label}
			</div>);
	}
});

React.render(<APP num={1} text="Hello world"/>,document.body);
