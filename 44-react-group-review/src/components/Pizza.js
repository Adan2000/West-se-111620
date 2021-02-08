import React from "react"

const Pizza = ({pizza,editPizza}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      {/* <td>{String(props.pizza.vegetarian)}</td> */}
      <td>{pizza.vegetarian.toString()}</td>

      <td><button onClick={()=> editPizza(pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza


// class Pizza extends React.Component{
// let pizza = props.pizza
// render(){
//   return(
//     <tr>
//       <td>{this.props.pizza.topping}</td>
//       <td>{this.props.pizza.size}</td>
//       {/* <td>{String(props.pizza.vegetarian)}</td> */}
//       <td>{this.props.pizza.vegetarian.toString()}</td>

//       <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
//     </tr>
//   )
//    }
// }