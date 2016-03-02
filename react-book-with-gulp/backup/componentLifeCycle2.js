/*** @jsx React.DOM */

var APP = React.createClass({
	getDefaultsProps:function(){
		return {
			val:0
		};
	},
	update:function(){
		var n = this.props.val+1;
		this.setProps({val:n});
	},
	componentWillMount:function(){
		console.log("Mount");
		this.setState({
			m:2
		});
		if(this.props.val === 0){
			this.btnStyle = {'color':'red'};
		}
	},
	componentDidMount:function(rootNode){
		console.log("Did Mount");
		console.log(this.getDOMNode());
		this.inc = setInterval(this.update,500);
	},
	componentWillUnMount:function(){
		console.log("UnMount");
		clearInterval(this.inc);
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
