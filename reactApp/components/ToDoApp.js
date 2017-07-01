import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';
import axios from 'axios';
const dbUrl = "http://localhost:3000/db/add";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({todos: [
        {taskText: 'play lol', completed: false},
        {taskText: 'update servers', completed: true},
        {taskText: 'code all day', completed: false},
        {taskText: 'talk to court', completed: false},
        {taskText: 'call home', completed: true}
      ]})
  }

  addTodo(task) {
    var self = this;
    axios.post(dbUrl, {task: task})
      .then(function (response) {
        // Do whatever you want with the request's response in here
        self.setState({ todos: self.state.todos.concat({taskText: response.data.task, completed: response.data.completed})});
      })
      .catch(function (error) {
        // Do whatever you want in the event of an error in here
        console.log('error', error);
      })
  }

  removeTodo(index) {
    var newTodos = this.state.todos.slice(0, index).concat(this.state.todos.slice(index + 1));
    this.setState({todos: newTodos});
  }

  toggleCompleted(index) {
    var newTodos = this.state.todos.slice();
    var todo = newTodos[index];
    newTodos.splice(index, 1, {taskText: todo.taskText, completed: !todo.completed});
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <InputLine 
          submit={(todo) => this.addTodo(todo)}
        />
        <ToDoList 
          toggleCompleted={(index) => this.toggleCompleted(index)} 
          removeTodo={(index) => this.removeTodo(index)} 
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default ToDoApp;