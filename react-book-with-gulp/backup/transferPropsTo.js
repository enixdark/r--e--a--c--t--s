/*** @jsx React.DOM */

var APP = React.createClass({
	render:function(){
		return (
		<div>
		<BButton href="javascript:alert('hello')" className="btn-default">I <Icon/> Name</BButton>
		<BButton href="javascript:alert('hello')" className="btn-success">I <Icon/> Name</BButton>
		<BButton href="javascript:alert('hello')" className="btn-danger">I <Icon/> Name</BButton>
		</div>
		);
	}
});


var BButton = React.createClass({
	render:function(){
		return (<a {...this.props} className="btn">{this.props.children}</a>);
	}
});

var Icon = React.createClass({
	render:function(){
		return (<span {...this.props} className="glyphicon"></span>);
	}
});

React.render(<APP num={1} text="Hello world"/>,document.body);
