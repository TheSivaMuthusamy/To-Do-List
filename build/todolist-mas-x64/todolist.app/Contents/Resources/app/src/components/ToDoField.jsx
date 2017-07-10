import React from 'react';
import ToDoList from './ToDoList.jsx';
import TaskForm from './TaskForm.jsx';
import ListDone from'./ListDone.jsx';

export default class ToDoField extends React.Component {

	constructor() {
		super();
		this.state = {
			tasks: this.getFromStorage()
		}
		this.getFromStorage = this.getFromStorage.bind(this);
		this.writeToStorage = this.writeToStorage.bind(this);
		this.handleTaskDelete = this.handleTaskDelete.bind(this);
		this.handleTaskAdd = this.handleTaskAdd.bind(this);
	}

	getFromStorage() {
		return localStorage.hasOwnProperty("tasks")?JSON.parse(localStorage.tasks):[];
	}

	writeToStorage() {
		localStorage.tasks=JSON.stringify(this.state.tasks);
	}

	handleTaskDelete(id) {
		let nextTasks = this.state.tasks.filter((el) => {
			return el.id!=id
		});
		
		this.setState({tasks : nextTasks})
		this.writeToStorage();
	}

	handleTaskAdd() {
		if (!this.refs.form.handleValidate())
			return;

		let task = Object.assign({}, this.refs.form.state);
		let nextTasks = this.state.tasks
		
		if (nextTasks.length === 0) {
			task.id=0;
		}
		else {
			task.id=nextTasks[nextTasks.length-1].id+1;
		}

		nextTasks.push(task);

		this.setState({tasks: nextTasks})
		this.writeToStorage();

		this.refs.form.handleClear();
	}

	render() {
		var Tasks;
    	if (this.state.tasks.length>0){
      		Tasks=<ToDoList onRemove={this.handleTaskDelete} tasks={this.state.tasks}/>
    	}else{
      		Tasks=<ListDone />
    	}

    	return (
    		<div className="ToDoField">
    			<TaskForm ref="form" onTaskAdd={this.handleTaskAdd}/>
    			{Tasks}
    		</div>
    	)
	}
}

