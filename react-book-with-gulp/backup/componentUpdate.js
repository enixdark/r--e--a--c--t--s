/*** @jsx React.DOM */

var APP = React.createClass({
	getInitialState:function(){
		return {
			increasing:false
		}
	},
	getDefaultsProps:function(){
		return {
			val:0
		};
	},
	update:function(){
		console.log(this.state.increasing);
		var n = this.props.val+1;
		this.setProps({val:n});
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({ increasing : nextProps.val > this.props.val});
	},
	shouldComponentUpdate:function(nextProps,nextState){
		return nextProps.val % 2 == 0;
	},
	componentWillUpdate:function(nextProps,nextState){
		console.log("next === " + JSON.stringify(nextProps))
	},
	componentDidUpdate:function(preProps,preState,rootNode){
		console.log("pre === " + JSON.stringify(preProps))
	},
	render:function(){
		console.log("Hello");
		return (
			<div>
				<button style={this.btnStyle} class="btn btn-primary" onClick={this.update}>{this.props.val}</button>
			</div>
			);
	}
});

window.render = function(){
	React.render(<APP val={0} />,document.getElementById('panel'));
}
window.unrender = function(){
	React.unmountComponentAtNode(document.getElementById('panel'));
}
