import React from 'react'
import CakeCard from './CakeCard.js'

class Cake extends React.Component{
    renderCakes = (cakes) => cakes.map(cake =>  <CakeCard cake={cake} key={Math.random()}/>)
    
    render(){
        return (
            <div>
                {this.renderCakes(this.props.cakes)}
            </div>
        )
    }
}

export default Cake