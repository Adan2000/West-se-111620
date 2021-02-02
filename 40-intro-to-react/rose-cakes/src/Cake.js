import React from 'react'

class Cake extends React.Component{
  render(){
    console.log(this)
    return(
      <div className="cake">
        
        <h1>{this.props.propsCake.flavor}</h1>
        <h2>{this.props.propsCake.price}</h2>
        <p>{this.props.propsCake.description}</p>
      </div>
    )
  }
}


export default Cake
