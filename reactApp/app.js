import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['play lol', 'update servers', 'code all day', 'talk to court', 'call home'];
// ReactDOM.render(<p>I'm Changing!</p>,
//    document.getElementById('root'));
//app.use(express.static(path.join(__dirname, 'public')));

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
          {this.props.todo}
        </li>
      </div>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(dummyData);
    return (
      <div>
        <ul>
          {dummyData.map((todo) => (<ToDo key={todo} todo={todo} />))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));
