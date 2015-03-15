/*** @jsx React.DOM */

var APP = React.createClass({
	getDefaultsProps:function(){
		return {
			val:0
		};
	},
	update:function(){
		this.setProps({val:this.props.val+1});
	},
	componentWillMount:function(){
		console.log("Mount");
	},
	componentDidMount:function(){
		console.log("Did Mount");
	},
	componentWillUnMount:function(){
		console.log("UnMount");
	},
	render:function(){
		console.log("Hello");
		return (
			<div>
				<button class="btn btn-primary" onClick={this.update}>{this.props.val}</button>
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
