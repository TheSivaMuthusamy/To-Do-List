const path = require('path');

module.exports = {
	entry: './index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
	},
	module: {
		loaders: [
	{
		test: /\.jsx*$/,
		exclude: /(node_modules)/,
		loader: 'babel-loader', 
	  	query: {
			presets: ['es2015','stage-2', 'react']
	  	}
	}
	  	]
	}
};