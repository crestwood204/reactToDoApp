import React from 'react';
import ToDo from './ToDo';

const dummyData = ['play lol', 'update servers', 'code all day', 'talk to court', 'call home'];
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {dummyData.map((todo) => (<ToDo key={todo} todo={todo} />))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;