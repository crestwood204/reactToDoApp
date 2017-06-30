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
          {this.props.todos.map((todo) => (<ToDo key={todo.taskText} todo={todo} />))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;