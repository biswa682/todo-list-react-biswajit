const express = require("express");
const path = require("path");

const app = express();
app.use(express.static('../dist'));
app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, "./index.html"))
	// res.send("OK")
})

app.listen(3000, function(){
	console.log("Server is running .......");
});