import React from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';

const StreamTweet = require('./StreamTweet.react');
const header = require('./Header.react');

var Stream = React.createClass({
	getInitialState: function(){
		return {
			tweet: null
		};
	},
	componentDidMount: function(){
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	},
	componentWillUnmount: function () {
		SnapkiteStreamClient.destroyStream();
	},
	handleNewTweet: function(tweet){
		this.setState({
			tweet: tweet
		});
	},
	render: function(){
		if(this.state.tweet){
			return (<StreamTweet tweet={this.state.tweet}
				onAddTweetToCollection={this.props.onAddTweetToCollection} />);
		}
		return (<Header text="Waiting ................." />);
	}

});

module.exports = Stream;
