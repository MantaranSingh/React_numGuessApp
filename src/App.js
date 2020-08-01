import React, { Component } from 'react';
import Form from './components/Form';
import './Styles.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

      answer: Math.floor(Math.random() * 100) + 1,
      input: undefined,
      attempt: 0,
      responseText: 'Enter a number between 1 - 100',
      responseBgColor: undefined
    }
  }


  updateState = (input) => {

    const difference = Math.abs(input - this.state.answer);
    const { responseText, responseBgColor } = this.response(difference);

    this.setState(prevState => ({
      input: input,
      attempt: prevState.attempt + 1,
      responseText: responseText,
      responseBgColor: responseBgColor,
    }));
  }
  response = (difference) => {
    let responseText;
    let responseBgColor;

    if (difference === 0) {
      responseText = 'Correct!';
      responseBgColor = 'green';
    } else if (difference > 0 && difference < 5) {
      responseText = 'Hot!!';
      responseBgColor = 'red';
    } else if (difference > 4 && difference < 16) {
      responseText = 'Warm';
      responseBgColor = 'yellow';
    } else {
      responseText = 'Cold';
      responseBgColor = 'blue';
    }

    return {
      responseText,
      responseBgColor,
    }
  }
  componentDidMount() {
     console.log('Value of generated random number', this.state.answer) 
  }
  render() {

    const background = {
      backgroundColor: this.state.responseBgColor
    }

    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Number Guessing Web App</h1>
        <div className='feed'>
          <h2 className='feedback' style={background}>{this.state.responseText}</h2>
        </div>
        <Form userInput={value => this.updateState(value)} />
        {/* {console.log('Value of generated random number',this.state.answer)} */}
      </div>
    );
  }
}
export default App;