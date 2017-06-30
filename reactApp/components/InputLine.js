import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit({taskText: this.state.taskValue, completed: false});
    this.setState({taskValue: ''});
  }

  handleTyping(event) {
    this.setState({taskValue: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="task" value={this.state.taskValue} onChange={(event) => this.handleTyping(event)}/>
        <input type="submit" value="Add todo" onClick={(event) => this.handleSubmit(event)}/>
      </form>
    )
  }
}

export default InputLine;