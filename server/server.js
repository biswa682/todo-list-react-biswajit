const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const url = "mongodb://localhost:27017/todo-list";
const collectionName = "items";
Mongoose.connect(url, { useNewUrlParser: true });
const Schema = new Mongoose.Schema({
	_id: Number,
	status: Boolean,
	text: String
});
const Todo = Mongoose.model(collectionName, Schema);

const app = express();
app.use(express.static('../dist'));
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, "./index.html"))
});

app.post('/api/todos', async function(req, res){
	Todo.create(req.body, function(err, d){
		if(err)
			res.status(500).send(err)
		else
			res.status(200).send(d)
	});
});

app.get('/api/todos', async function(req, res){
	Todo.find(function(err, d){
		if(err)
			res.status(500).send(err)
		else
			res.status(200).send(d)
	});
});
app.put('/api/todos/:id', async function(req, res){
	let thisId = Number(req.params.id);
	Todo.findByIdAndUpdate({_id: thisId}, req.body, function(err,d){
		if(err)
			res.status(500).send(err)
		else
			res.send(req.body)
	});
});
app.delete('/api/todos/:id', async function(req, res){
	let thisId = Number(req.params.id);
	Todo.findByIdAndRemove({_id: thisId}, function(err, d){
		const deltedItem = thisId+" id is deleted"
		if(err)
			res.status(500).send(err)
		else
			res.status(200).send(deltedItem)
	});
});
app.listen(3000, function(){
	console.log("Server is running .......");
});