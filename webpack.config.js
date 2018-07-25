module.exports = {
	entry: './components/App.js',
	output: {
		filename: 'bundle.js'
	},
	mode: "development",
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				exclude: /node_modules/,
				use:[
					"babel-loader"
				]
			}
		]
	},
	jest: {
	    "testPathIgnorePatterns": [
	      "/node_modules/",
	      "/build/"
	    ]
	 }
	// resolve: {
	// 	extensions: ['.js', '.jsx']
	// },
	devServer:{
		contentBase: './'
	}
}

// <button onClick={(name2)=>{this.setState({person: [
// 				{name:name2, hobby:"cricket"},{name:"matwar", hobby:"coding"},
// 				{name:"anmol", hobby:"bawarchi"}
// 			]})}}>Click me</button>


// "server": "webpack-dev-server --mode development --open",
//     "dev": "webpack --mode development"