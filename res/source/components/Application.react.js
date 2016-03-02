import React from 'react';

const Stream = require('./Stream.react');
const Collection = require('./Collection.react');

var Application = React.createClass({
	getInitialState: function(){
		return {
			collectionTweets: {}
		}
	},
	addTweetToCollection: function(tweet){
		var tweets = this.state.collectionTweets;
		tweets[tweet.id] = tweet;
		this.setState({
			collectionTweets: tweets
		});
	},
	removeFromCollection: function(tweet){
		var tweets = this.state.collectionTweets;
		delete tweets[tweet.id]
		this.setState({
			collectionTweets: tweets
		});
	},
	removeAllTweetsFromCollection: function () {
		this.setState({
			collectionTweets: {}
		});
	},
	render: function(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 text-center">
						<Stream onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className="col-md-8">
						<Collection tweets={this.state.collectionTweets}
									onRemoveTweetFromCollection={this.removeFromCollection}
									onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
					</div>		
				</div>
			</div>
			);
	}
});

module.exports = Application;