var express = require('express');
var app = express();
var db = require('../database/index.js');
app.use(express.static(__dirname + '/../client/dist'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getTasks', (req, res) => {
	db.addTask((err, result) => {
		if(err){
			res.status(500).json({ error: 'message' });
		} else {
			res.status(200).json(result);
		}
	});
	res.status(200).send(staticData);
});

app.post('/addTasks', (req, res) => {
	db.addTask(req.body.task, (err, result) => {
		if(err){
			res.status(500).json({ error: 'message' });
		} else {
			res.status(200).send();
		}
	})
})

app.listen(3000);