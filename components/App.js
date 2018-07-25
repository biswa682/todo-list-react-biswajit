import React from 'react';
import ReactDom from 'react-dom';
import TodoContainer from './TodoContainer';
ReactDom.render(<TodoContainer/>, document.getElementById('header'));



// "webpack-server": "webpack-dev-server --mode development --open",
//     "dev": "webpack --mode development",
//     "dev2": "webpack",
//     "dev3": "webpack --bail --progress --profile",
//     "server": "webpack --watch && cd server && nodemon app"