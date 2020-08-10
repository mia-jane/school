import React, { PureComponent } from 'react';
import './App.css';
import Square from "./Square"
import Button from "./Button"

class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      colors: ["white", "black", "purple", "blue"]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.state.colors[0]){
      
    }
    // let color = this.state.colors[0]
    // switch (color){
    //   case this.state.colors[0]:
    //     this.setState(prevState => {
    //       colors: prevState
    //     })
    //     break
    //   case this.state.colors[1]:
    //     this.setState(prevState => {})
    //     break
    //   case this.state.colors[2]:
    //     this.setState(prevState => {})
    //     break
    //   case this.state.colors[3]:
    //     this.setState(prevState => {})
    //     break
    //   default: console.log("I don't know")
    // }
  }

  render(){
    console.log(this.state.colors)
    return (
      <div className="App">
          <h1>DJ React</h1>
          <div className="squares-container">
            <Square style={{backgroundColor:this.state.colors[0]}} />
            <Square style={{backgroundColor:this.state.colors[1]}} />
            <Square style={{backgroundColor:this.state.colors[2]}} />
            <Square style={{backgroundColor:this.state.colors[3]}} />
          </div>
          <div className="buttons-container">
            <Button onClick={this.handleClick} />
          </div>
        </div>
    )
  }
}

export default App;
