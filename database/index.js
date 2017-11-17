var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "tasks"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var addTask = (task, cb) => con.query(`INSERT INTO tasks (tasks, state) VALUES ('${task}', false)`, (err, result) => {
	if(err){
		cb(err, null);
	} else {
		cb(null, result);
	}
});

var getTasks = (cb) => con.query(`SELECT * FROM tasks`, (err, result) => {
	if(err){
		cb(err, null);
	} else {
		cb(null, result);
	}
});

module.exports.addTask = addTask;
module.exports.getTasks = getTasks