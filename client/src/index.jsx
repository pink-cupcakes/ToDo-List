import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	tasks: []
    };
  }

  addTask(newTodo){
    $.ajax({
      url: '/addTasks',
      method: 'POST',
      data: {task: newTodo},
      success: (data) => {
        this.getTasks();
        console.log(`Sent the ${data} to the server`);
      },
      error: (err) => {
        console.log(`Error while sending to server: ${err}`);
      }
    })
  }

  getTasks(){
    $.ajax({
      url: '/getTasks',
      method: 'GET',
      success: (data) => {
        this.setState({tasks: data});
      },
      error: (err) => {
        console.log(`Error on initialize ${err}`);
      }
    })
  }

  componentDidMount(){
    this.getTasks();
  }

  render() {
	  return (
	    <div>
	      <h1>To-do List</h1>
	      <AddTask addTask={this.addTask.bind(this)} />
        <ul>
	       <TaskList taskList={this.state.tasks} />
        </ul>
	    </div>
	  );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))