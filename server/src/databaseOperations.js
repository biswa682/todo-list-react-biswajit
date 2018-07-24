// const Mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/todo-list";
// const collectionName = "items"
// const data = {
// 	status: true,
// 	text: "This is a new text",
// 	id: 1
// }
async function storeData(Mongoose, url, collectionName, data){
	Mongoose.connect(url, { useNewUrlParser: true });
	const Schema = new Mongoose.Schema({
		status: Boolean,
		text: String,
		_id: Number
	});
	const storeData = await Mongoose.model(collectionName, Schema);
	var inputData = new storeData({
		status: data.status,
		text: data.text,
		_id: data.id
	}).save().then(function(err, d){
		if(err)
			return err
		else
			d
	});
	return inputData;
}

// storeData(Mongoose, url, collectionName, data).then(function(d){
// 	console.log(d);
// })