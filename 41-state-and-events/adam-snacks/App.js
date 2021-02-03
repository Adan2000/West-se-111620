import React, { Component } from 'react'
import Showname from './Showname'

class App extends Component {

  state = {
    name: "adam"
  }

  changeTheName = (e, input_from_the_form_in_child_component) => {
    e.preventDefault()
    this.setState({ name: input_from_the_form_in_child_component })
  };


  render() {
    return (
      <div className="App">
        <Showname name={this.state.name} nameChanger={this.changeTheName}/>
      </div>
    )
  }
}

export default App;

