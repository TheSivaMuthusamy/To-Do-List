import React from 'react';
import ReactDOM from 'react-dom';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Task from "./Task.jsx";

export default class ToDoList extends React.Component {

	render() {
		return (
			<Paper zDepth={1} >
				<List>
					{
						this.props.tasks.map((task)=>{
							return <Task onRemove={this.props.onRemove} key={task.id} data={task} />
						})
					}
				</List>
			</Paper>
		)
	}
}