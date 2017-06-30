import React from 'react';
import ToDo from './ToDo';

const dummyData = [
  {taskText: 'play lol', completed: false},
  {taskText: 'update servers', completed: true},
  {taskText: 'code all day', completed: false},
  {taskText: 'talk to court', completed: false},
  {taskText: 'call home', completed: true}
  ];
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {dummyData.map((todo) => (<ToDo key={todo.taskText} todo={todo} />))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;