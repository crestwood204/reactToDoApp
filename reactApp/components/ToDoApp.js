import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';
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
    var newTodos = this.state.todos.concat(task);
    this.setState({todos: newTodos});
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