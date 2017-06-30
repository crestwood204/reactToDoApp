import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => (
            <ToDo 
              removeTodo={() => this.props.removeTodo(index)} 
              toggleCompleted={() => this.props.toggleCompleted(index)}
              key={index} 
              todo={todo} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;