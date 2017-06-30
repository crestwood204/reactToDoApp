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
          {this.props.todo}
        </li>
      </div>
    )
  }
}

export default ToDo;