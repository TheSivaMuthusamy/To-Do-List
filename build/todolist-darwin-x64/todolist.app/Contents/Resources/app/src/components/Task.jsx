import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from 'material-ui/List/ListItem';
import Checkbox from 'material-ui/Checkbox';

var styles = {
	opacity:1,
	WebkitTransition: 'all', 
	msTransition: 'all', 
	transitionDuration: '1s'
}

export default class Task extends React.Component {
	
	constructor() {
		super();
		this.state = {
			style: Object.assign({}, styles)
		}
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		let nextState = this.state;
		nextState.style.opacity = 0;
		this.setState(nextState)

		setTimeout(() => {
			this.props.onRemove(this.props.data.id);
		}, 1000);
	}

	render() {
		return (
			<ListItem style={this.state.style} primaryText={this.props.data.content} leftCheckbox={<Checkbox onCheck={this.handleDelete} />} />
		)
	}
}