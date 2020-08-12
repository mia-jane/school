import React from 'react';
import './App.css';
import Square from "./Square"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ["white", "black", "black", "black"]
    }
    this.smalltime = this.smalltime.bind(this)
    this.party = this.party.bind(this)
    this.profeshRight = this.profeshRight.bind(this)
    this.profeshLeft = this.profeshLeft.bind(this)
  }

  smalltime() {
    this.setState(prevState => {
      if(prevState.colors[0] !== "white"){
        return {
          colors: ["white", "white", "white", "white"]
        }
      }else if(prevState.colors[0] === "white"){
        return {
          colors: ["black", "black", "black", "black"]
        }
      }
    })
    // this.setState(({colors}) => ({colors: colors.map(color => color === "white" ? "black" : "white")}))
  }

  party() {
    this.setState(prevState => {
      const purpleTop = ["purple","purple"]
      const sameBottom = prevState.colors.slice(2,4)
      return {
        colors: purpleTop.concat(sameBottom)
      }
    })
    // this.setState({colors: ["purple", "purple", "white", "white"]})
  }

  profeshRight = () => {
    this.setState(prevState => {
      const rightBlue = ["blue"]
      const firstHalf = prevState.colors.slice(0,2)
      const last = prevState.colors.slice(3,4)
      // const withBlue = [...firstHalf, leftBlue, last]
      return {
        colors: [...firstHalf, last, rightBlue]
      }
    })
    // this.setState({colors: ["white", "white", "blue", "white"]})
  }

  profeshLeft = () => {
    this.setState(prevState => {
      const blue = ["blue"]
      const beginning = prevState.colors.slice(0,3)
      return {
        colors: beginning.concat(blue)
      }
    })
    // this.setState({colors: ["white", "white", "white", "blue"]})
  }
  render(){
    console.log(this.state.colors)
    const squareComponents = this.state.colors.map(color => <Square color={color} />)
    return (
      <div className="App">
          <h1>DJ React</h1>
          <div className="squares-container">
            {squareComponents}
          </div>
          <button onClick={this.smalltime}>Small Time</button>
          <button onClick={this.party}>partyyy</button>
          <button onClick={this.profeshLeft}>blue left</button>
          <button onClick={this.profeshRight}>blue right</button>
        </div>
    )
  }
}

export default App;
