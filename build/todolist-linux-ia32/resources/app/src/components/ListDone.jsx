import React from 'react';
import Paper from 'material-ui/Paper';
import Done from 'material-ui/svg-icons/action/done';

export default class ListDone extends React.Component {

	style = {

		padding: "20px",
		textAlign:"center"
	};

	render() {
		return (
			<Paper zDepth={1} style={this.style} >
				<Done color="green" />
				<p>Congratulations! To Do List checked off.</p>
			</Paper>
		);
	}

}