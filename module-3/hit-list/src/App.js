import React from 'react';
import './App.css';
import HitTarget from './HitTarget';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      targets: []
    }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      // .then(data => console.log(data))
      .then((data) => {
          this.setState({
              targets: data
            }
          )
      })
  }
  render(){
    const mappedTargets = this.state.targets.map(target => <HitTarget key={target.name} name={target.name} image={target.image}/>)
    return (
      <div className="App">
        {mappedTargets}
      </div>
    )
  }
}

export default App;
