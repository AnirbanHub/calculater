import React, {Component} from 'react';
import ResultsDisplay from './components/ResultsDisplay';
import KeyPad from './components/KeyPad';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: ""
    }
  }

  onClick = (button) => {
    if (button === '=') {
      this.calculate()
    } else if (button === 'CE') {
      this.backspace()
    } else if (button === 'C') {
      this.clear()
    } else {
      // eslint-disable-next-line no-unused-expressions
      this.state.results;
    }
  }

  //callback for calculate results
  calculate = () => {
    let checkResults = this.state.results;
    try {
      this.setState({
        // eslint-disable-next-line no-eval
        results: (eval(checkResults) || "") + ""
      })
    } catch (e) {
      // eslint-disable-next-line no-unused-expressions
      "error"
    }
  }

  //callback for clear results screen
  clear = () => {
    this.setState({
      results: ""
    })
  }

  // callback for delete an item
  backspace = () => {
    this.setState({
      results: this.state.results.slice(0,-1)
    })
  }

  // render the parent component that wraps the child components
  render (){
    return(
        <div className= "calculator-body">
          <h1>Basic Calculator</h1>
          <ResultsDisplay results = {this.state.results}/>
          <KeyPad onClick = {this.onClick}/>
        </div>
    )
  }
}

export default App;
