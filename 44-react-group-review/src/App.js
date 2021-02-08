import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {},
    editedPizza: {}
  }

  editPizza = (pizza) =>{
    this.setState({selectedPizza:pizza})
  }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     selectedPizza: {...this.state.selectedPizza,[e.target.name]:e.target.value}
  //   })
  // }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState((prevState) => {
    prevState.editedPizza.name = value
    console.log(prevState)
      return ({
        editedPizza: prevState.editedPizza
      }
    )
  })
}



  componentDidMount = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({
      pizzas:pizzas
    }))
  }
  render() {
    return (
      <Fragment>  
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} handleChange={this.handleChange} />
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
