const express = require('express');
const path = require('path');
const app = express();
	const bodyParser = require('body-parser')


app.use(bodyParser());

app.post('/insert', function(req, res, next){
	var item = {
		name: req.body.name,
		age: req.body.age
	};

})