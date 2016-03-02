/*** @jsx React.DOM */

var PersonTable = React.createClass({
	getInitialState:function(){
		return {
			data:[{
				id:1,
				name:'Cqshinn'
			},{
				id:2,
				name:'ABC'
			},{
				id:3,
				name:'XYT'
			},{
				id:4,
				name:'ADASS'
			},{
				id:5,
				name:'HEEE'
			}
			]
		}
	},
	render:function(){
		return (
			<table>{
				this.state.data.map(function(person,i){
					return <PersonRaw key={i} data={person}/>
				})
			}
			</table>
		);
	}
});

var PersonRaw = React.createClass({
	render:function(){
		return (
			<tr key={0}>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
			</tr>
		)
	}
});

React.render(<PersonTable/>,document.body);
