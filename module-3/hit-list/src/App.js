import React from 'react';
import './App.css';
import HitTarget from './HitTarget';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      targets: [],
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({isLoading: true})
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      // .then(data => console.log(data))
      .then((data) => {
          this.setState({
              targets: data,
              isLoading: false
            }
          )
      })
  }
  render(){
    const mappedTargets = this.state.targets.map(target => <HitTarget key={target.name} name={target.name} image={target.image}/>)
    const loadingComplete = this.state.isLoading ? "loading.." : mappedTargets
    return (
      <div className="App">
        <h1>Hit List</h1>
        {loadingComplete}
        {/* {mappedTargets} */}
      </div>
    )
  }
}

export default App;
