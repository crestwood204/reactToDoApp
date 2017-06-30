import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <button>
            X
          </button>
          {(this.props.todo.completed) ? (<strike>{this.props.todo.taskText}</strike>): (<span> {this.props.todo.taskText} </span>)}
        </li>
      </div>
    )
  }
}

export default ToDo;