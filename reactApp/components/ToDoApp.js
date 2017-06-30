import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <ToDoList />
      </div>
    )
  }
}

export default ToDoApp;