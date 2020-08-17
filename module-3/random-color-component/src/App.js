import React from 'react';
import './App.css';
import axios from "axios"
import RandomComponent from "./RandomComponent"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      color: ""
    }
  }

  componentDidMount(){
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then((response) => {
        const colorCode = response.data.colors[0].hex
        const randomColor = "#".concat(colorCode)
        this.setState({
          color: randomColor
        })
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  
  render(){
    return (
      <div className="App">
        <RandomComponent color={this.state.color}/>
      </div>
    )
  }
}

export default App;
