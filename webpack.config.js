const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(html)$/, use: [ 'html-loader' ] },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.(png|jpg|gif)$/, use: [ 'url-loader' ] }
		]
	}
};