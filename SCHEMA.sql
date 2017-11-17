DROP DATABASE IF EXISTS tasks;

CREATE DATABASE tasks;

USE tasks;

CREATE TABLE tasks (
	id INT NOT NULL AUTO_INCREMENT,
	tasks VARCHAR(100),
	state BOOLEAN,
	PRIMARY KEY (id)
)

INSERT INTO tasks (tasks, state) VALUES (mop, false);
INSERT INTO tasks (tasks, state) VALUES (sweep, false);
INSERT INTO tasks (tasks, state) VALUES (laundry, false)
