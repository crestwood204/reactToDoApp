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

  addToDo(task) {
    var newTodos = this.state.todos.concat(task);
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <InputLine submit={(todo) => this.addToDo(todo)}/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default ToDoApp;