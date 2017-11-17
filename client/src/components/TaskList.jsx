import React from 'react';
import Task from './Task.jsx'

const taskList = (props) => {
	return (
		<div>
			{props.taskList.map((task) => {
				return <Task task={task} />
			})}
		</div>
	)
}

export default taskList;