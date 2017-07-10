import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToDoField from './ToDoField.jsx'

export default class App extends React.Component {
	
	render() {
		return (
			<MuiThemeProvider>
				<ToDoField />
			</MuiThemeProvider>
		)
	};
}
