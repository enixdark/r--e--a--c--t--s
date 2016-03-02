import React from 'react';
import ReactDOM from 'react-dom';

const Application =  require('./components/Application.react');
// import ReactDOMServer from 'react-dom/server';
// var h1 = React.createElement('h1',{ className: 'header', key:
// 'header' },'This is React');
// var p = React.createElement('p', { className: 'content', key:
// 'content' }, "And that's how it works.");
// var reactFragment = [h1, p];
// var section = React.createElement('section', { className: 'container'
// }, reactFragment);

// var createListItemElement = React.createFactory('li');

// var list_item = ['item-1','item-2','item-3'].map( item => {
// 	return createListItemElement({ className: item, key: item}, item);
// });

// var listOfItem = React.createElement('ul', { className: 'list-of-item', 
// 	key: 'list-of-item'},list_item);
// var listOfItem = React.DOM.ul({ className: 'list-of-item', 
// 	key: 'list-of-item'},list_item);


// ReactDom.render(section, 
// 	document.getElementById('react-application'));

// ReactDom.render(listOfItem, 
// 	document.getElementById('react-application'));

// ReactDOMServer.renderToString(listOfItem,document.getElementById('react-application'));



// var ReactClass = React.createClass({

// 	getInitialState: function(){
// 		return {
// 			isHeaderHidden: false,
// 			title: 'Stateful React Component'
// 		}
// 	},
// 	render: function(){
// 		var title = this.state.title;
// 		var headerElement = React.createElement('h1',
// 			{ className: 'header', key: 'header' }, title);
// 		var buttonElement = (<button className='btn btn-primary'
// 			key='button' onClick={this.handleClick}>Request</button>);
// 		if(this.state.isHeaderHidden){
// 			return React.createElement('div', null, [buttonElement]);
// 		}
// 		return React.createElement('div',null, [buttonElement, headerElement]);
// 	},
// 	handleClick: function(){
// 		console.log(this.state)
// 		var _state = !this.state.isHeaderHidden;
// 		this.setState({
// 			isHeaderHidden: _state
// 		})
// 	}
// });


var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.
getElementById('react-application'));

ReactDOM.render(<Application />,document.getElementById('react-application'));

