import React from 'react'
import Cake from './Cake.js'
import Header from './Header.js'
import Form from './Form.js'

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }

  state = {
    on: true,
    cakes: [
      {flavor:'9LB FISH CHOCOLATE', description:' 9lbs of fish and Chocolate Ganache', price: 20},
      {flavor:'CATNIP Cake', description:'Catnip syrup with Bergamot Mascarpone Cream - Cream Cheese Frosting', price: 30},
      {flavor:'Salted Dry Food', description:'Vanilla Bean cake with chunks of dry cat food and salt', price: 10},
      {flavor:'Carrot Cake', description:'Carrot Pineapple Cake mixed with my owners plants', price: 40},
    ]
  }

  handleClick = () => {
    this.setState(prevState => {
      return{
        on: !prevState.on
      }
    }, () => console.log('after setState resolves', this.state))
  }

  handleUpdateCakes = (cake) => {
    this.setState({cakes:[cake, ...this.state.cakes]})
  }

  render(){
    console.log(this)
    return (
      <div className="App">
        <Form handleUpdateCakes={this.handleUpdateCakes}/>
        <br></br>
        <button onClick={this.handleClick}>Click Me</button>
        <Header />
        <Cake cakes={this.state.cakes} /> 
      </div>
    )
  }
}

export default App;
