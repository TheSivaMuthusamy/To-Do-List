import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';

export default class TaskForm extends React.Component {

	constructor() {
		super();
		this.state = {
			content: "",
			error: "",
		}
		this.handleClear = this.handleClear.bind(this);
		this.handleValidate = this.handleValidate.bind(this);
		this.handlePress = this.handlePress.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClear() {
		
		this.setState({
			content: "",
			error: "",
		})
	}

	handleValidate() {

		if(this.state.content === "") {
			this.setState({error:"Please enter task"});
			return false;
		}

		this.setState({error:""});
		return true
	}

	handlePress(e) {

		if (e.charCode===13 && this.handleValidate()) {
			this.props.onTaskAdd();
		}
	}

	handleChange(e) {
		this.handleValidate();
		this.setState({content:e.target.value})
	}

	style = {
		width: "100%",
	}

	render() {
		return (
			<TextField
				multiLine={false}
				onKeyPress={this.handlePress}
				value={this.state.content}
				onChange={this.handleChange}
				hintText="Enter task"
				errorText={this.state.error}
				style = {this.style}
			/>
		);
	}
}