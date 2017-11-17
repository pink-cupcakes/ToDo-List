import React from 'react';
import $ from 'jquery';

const AddTask = (props) => {
	return (
		<div>
			<input type='text' id='newTask' name='newTask'></input>
			<button type='button' onClick={() => {props.addTask($('#newTask').val())}}>Add Task</button>
		</div>
	)
}

export default AddTask;