

/*** @jsx React.DOM */


var ReactMix = {

	componentWillMount:function(){
		console.warn("mount");;
	},
	getInitialState:function(){
		return {count:0}
	},
	increatingCount:function(){
		this.setState({count:this.state.count+1});
	}

}

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
	render:function(){
		console.log("Hello");
		return (
			<div>
				<ButtonComponent txt="Button"></ButtonComponent>
				<InputComponent txt="type"></InputComponent>
			</div>
			);
	}
});


var ButtonComponent = React.createClass({
	mixins:[ReactMix],
	render:function(){
		return <button class="btn btn-primary" onClick={this.increatingCount} >{this.props.txt + " = " + this.state.count}</button>
	}
});

var InputComponent = React.createClass({
	mixins:[ReactMix],
	componentWillMount:function(){
		setInterval(this.increatingCount,1000);
	},
	render:function(){
		return <input class="form-control" type="text" value={this.props.txt + " = " + this.state.count} />
	}
})

React.render(<APP />,document.getElementById('app'));
