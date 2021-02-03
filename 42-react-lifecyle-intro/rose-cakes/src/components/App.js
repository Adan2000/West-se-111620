import React from 'react'
import Cake from './Cake.js'
import Header from './Header.js'
import Form from './Form.js'
import banner from '../assets/background.png'
import '../App.css'
class App extends React.Component {

  state = {
    on: true,
    cakes: []
  }
//Fetch
postCake = (cake) => {
  fetch('http://localhost:3000/cakes',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cake)
  })
  .then(res => res.json())
  .then(console.log)
}

//Lifecycle Methods
componentDidMount(){
  console.log('Component Did Mount Ran!')
  fetch('http://localhost:3000/cakes')
  .then(res => res.json())
  .then(json => this.setState({cakes:json.reverse()}))
}

componentDidUpdate(){
  console.log('component did update ran!')
}


//Handlers 
  handleCreateCakes = cake => {
    this.postCake(cake)
    this.setState({cakes:[cake, ...this.state.cakes]})
  }

  handleSelect = cake => {
    this.setState(prevState => {
      let oldCake = prevState.cakes.find(stateCake => cake == stateCake)
      oldCake.selected = !oldCake.selected
      return{
        cakes:prevState.cakes
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <img className='banner' src={banner}/>
        <Form handleCreateCakes={this.handleCreateCakes}/>
        <Cake cakes={this.state.cakes} handleSelect={this.handleSelect}  /> 
      </div>
    )
  }
}

export default App;
