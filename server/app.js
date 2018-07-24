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
	var Todo = new storeData(req.body)
		.save()
		.then(item => {
			 res.send("item saved to database");
		 })
		 .catch(err => {
		 	res.status(400).send("unable to save to database");
	});
});
app.get('/api/todos', async function(req, res){
	Todo.find({}, function(err, data){
		if(err)
			res.send("Error")
		else
			res.send(data);
	});
});
app.put('/api/todos/:id', async function(req, res){
	let thisId = Number(req.params.id);
	Todo.findByIdAndUpdate(thisId, {"text":"Updated text"}).then(function(err,d){
		res.send("Updateed")
	});
});
app.delete('/api/todos/:id', async function(req, res){
	
});
app.listen(3000, function(){
	console.log("Server is running .......");
});