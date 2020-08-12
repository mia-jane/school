import React from 'react';
import './App.css';
import Badge from "./Badge"

//components needed: form, input(x6), textarea, submit button, complete badge
//values of state needed: firstName, lastName, email, phone, place of birth, fave food, array of badges

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthPlace: "",
      faveFood: "",
      blurb: "",
      // badges: []
    }
    this.fillBadge = this.fillBadge.bind(this)
  }
  //idea: map array of badges to display badge after filling out

  fillBadge(event){
    event.preventDefault()
    const {name, value}= event.target
    this.setState({
      [name]: value
    })
  }

  //write methods here

  render() {
    return (
      <div className="App">
        <form>
          <div className="input-boxes">
            <input 
              type="text" 
              name="firstName" 
              value={this.state.firstName} 
              placeholder="First Name" 
              onChange={this.fillBadge} />
            <input 
              type="text" 
              name="lastName" 
              value={this.state.lastName} 
              placeholder="Last Name" 
              onChange={this.fillBadge} />
            <input 
              type="text" 
              name="email" 
              value={this.state.email} 
              placeholder="Email" 
              onChange={this.fillBadge} />
            <input 
              type="text"
              name="birthPlace"
              value={this.state.birthPlace}
              placeholder="Place of Birth"
              onChange={this.fillBadge}
            />
            <input 
              type="text" 
              name="faveFood" 
              value={this.state.faveFood} 
              placeholder="Favorite Food" 
              onChange={this.fillBadge}/>
            <input 
              type="tel" 
              name="phone" 
              value={this.state.phone} 
              placeholder="phone" 
              onChange={this.fillBadge}/>
            <textarea 
              name="blurb" 
              value={this.state.blurb} 
              placeholder="tell us about yourself" 
              onChange={this.fillBadge}/>
          </div>
          <button>Submit</button>
        </form>
        <Badge  
          firstName={this.state.firstName} 
          lastName={this.state.lastName}
          phone={this.state.phone}
          email={this.state.email}
          faveFood={this.state.faveFood}
          blurb={this.state.blurb}
          />
    </div>
    )
  }
}

export default App;
