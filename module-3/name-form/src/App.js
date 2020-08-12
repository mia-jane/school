import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      namesList: ["James", "Oliver", "Elouise"]
    }
    this.showName = this.showName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  showName(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState(prevState => {
      return {
        namesList: prevState.namesList.concat(prevState.name),
        name: ""
      }
    })
  }

  render(){
    const nameComponents = this.state.namesList.map(name => <li>{name}</li>)
    return (
        <div className="App">
          <h1>Name Entry</h1>
          <form>
            <input type="text" value={this.state.name} name="name" placeholder="name" onChange={this.showName} />
            <button onClick={this.handleSubmit}>Enter</button>
            <h1>{this.state.name}</h1>
            <ol>
              {nameComponents}
            </ol>
          </form>
        </div>
    )
  } 
}

export default App;
