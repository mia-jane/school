import React from 'react';
import './App.css';
import Badge from "./Badge"


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
      // inputs: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: "",
      //   birthPlace: "",
      //   faveFood: "",
      //   blurb: "",
      // },
      badges: []
    }
  
  }

  handleChange = (event) =>{
    const {name, value}= event.target
    this.setState({[name]:value})
    // this.setState(prevState => {
    //   return {
    //     inputs: {
    //         ...prevState.inputs,
    //         [name]: value
    //     }
    //   }
    // })
  }
  
//  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    if(this.state.firstName.length < 3 || this.state.lastName.length < 3 || this.state.email.length < 3 || this.state.birthPlace.length < 3 || this.state.faveFood.length < 3 || this.state.blurb.length < 3){
      alert("Fill in every field")
    }else {
      if(!Number(this.state.phone) || this.state.phone.length !== 10){
        alert("only numbers or not correct length")
      }else{
        this.setState(prevState => {
          return{
            badges: [...prevState.badges, newBadge]
            // badges: [...prevState.badges, prevState.inputs]
          }
        })
      }
    }
    let {firstName, lastName, email, phone, birthPlace, faveFood, blurb} = this.state
    let newBadge = {
      firstName,
      lastName, 
      email, 
      phone, 
      birthPlace, 
      faveFood, 
      blurb
    }
    // this.setState(prevState => {
    //   return{
    //     badges: [...prevState.badges, newBadge]
        // badges: [...prevState.badges, prevState.inputs],
      // }
    // })
  }

  //write methods here

  render() {
    const mappedBadges = this.state.badges.map(badge => <Badge firstName= {badge.firstName} 
                                                              lastName={badge.lastName}
                                                              phone={badge.phone}
                                                              birthPlace={badge.birthPlace}
                                                              email={badge.email}
                                                              faveFood={badge.faveFood}
                                                              blurb={badge.blurb}
                                                              />)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="input-boxes">
            <input 
              type="text" 
              name="firstName" 
              value={this.state.firstName} 
              placeholder="First Name"
              // minLength="3" 
              onChange={this.handleChange} />
            <input 
              type="text" 
              name="lastName" 
              value={this.state.lastName} 
              placeholder="Last Name"
              // minLength="3" 
              onChange={this.handleChange} />
            <input 
              type="text" 
              name="email" 
              value={this.state.email} 
              placeholder="Email"
              // minLength="3" 
              onChange={this.handleChange} />
            <input 
              type="text"
              name="birthPlace"
              value={this.state.birthPlace}
              placeholder="Place of Birth"
              // minLength="3"
              onChange={this.handleChange}
            />
            <input 
              type="text" 
              name="faveFood" 
              value={this.state.faveFood} 
              placeholder="Favorite Food"
              // minLength="3" 
              onChange={this.handleChange}/>
            <input 
              type="tel"
              // pattern="[0-9]*" 
              name="phone" 
              value={this.state.phone} 
              placeholder="phone"
              // minLength="3" 
              onChange={this.handleChange}/>
            <textarea 
              name="blurb" 
              value={this.state.blurb} 
              placeholder="tell us about yourself"
              // minLength="3" 
              onChange={this.handleChange}/>
          </div>
          <button>Submit</button>
        </form>
        {mappedBadges}
    </div>
    )
  }
}

export default App;
