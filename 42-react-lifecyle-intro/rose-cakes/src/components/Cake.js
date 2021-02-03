import React, {Component} from 'react'
import CakeCard from './CakeCard.js'
import SelectedCake from './SelectedCake'

class Cake extends Component{
  
    render(){
        return (
         <div className="cake">
             {
               this.props.cakes.map(cakeFromProps => cakeFromProps.selected?<SelectedCake cake={cakeFromProps} key={Math.random()} handleSelect={this.props.handleSelect}/>: <CakeCard cake={cakeFromProps} key={Math.random()} handleSelect={this.props.handleSelect}/>)  
             }
         </div>
        )
      }
}

export default Cake