/*** @jsx React.DOM */

var APP = React.createClass({
	render:function(){
		return <BButton>I <Icon/> Name</BButton>
	}
});


var BButton = React.createClass({
	render:function(){
		return <a className="btn btn-primary">{this.props.children}</a>
	}
});

var Icon = React.createClass({
	render:function(){
		return <span className="glyphicon glyphicon-heart"></span>
	}
});

React.render(<APP num={1} text="Hello world"/>,document.body);
