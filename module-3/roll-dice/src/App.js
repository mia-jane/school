import React from 'react';
import './App.css';
// import DiceBox from "./DiceBox"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  clearData() {
    this.setState({number : []})
  }

  handleClick() {
    this.clearData()
    for (let i = 1; i<= 5; i++){
      let randomNum = Math.ceil(Math.random() * 6 )
      this.setState(prevState => {
        return{
          number: prevState.number.concat(randomNum)
        }
      })
    }
  }


  render () {
      return (
        <div className="App">
          <h1>Rolling Dice with React State</h1>
          <div className="dice">
            <span>{this.state.number[0]}</span>
            <span>{this.state.number[1]}</span>
            <span>{this.state.number[2]}</span>
            <span>{this.state.number[3]}</span>
            <span>{this.state.number[4]}</span>
          </div>
          <button onClick={this.handleClick}>Click</button>
        </div>
      )
  }
   
}

export default App;
