import { Component } from 'react';

class PracticeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  handleText = () => {
    this.setState({ text: 'Goodbye World!' });
  };

  render() {
    return (
      <>
        <h3>{this.state.text}</h3>
        <button onClick={this.handleText}>누르세요</button>
      </>
    );
  }
}

export default PracticeClass;
