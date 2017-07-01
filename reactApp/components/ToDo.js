import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemoveClick() {
    this.props.removeTodo();
  }

  handleToggle() {
    this.props.toggleCompleted();
  }

  render() {
    return (
      <div>
        <li>
          
          <button onClick={() => this.handleRemoveClick()}>
            X
          </button>
          <span onClick={() => this.handleToggle()}> {(this.props.todo.completed) ? (<strike>{this.props.todo.taskText}</strike>): (<span> {this.props.todo.taskText}</span>)} </span>
        </li>
      </div>
    )
  }
}

export default ToDo;