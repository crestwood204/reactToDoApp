import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="task"/>
        <input type="submit" value="Add todo"/>
      </form>
    )
  }
}

export default InputLine;