import React from 'react'

 function CakeCard(props){
    return(
      <div className="cake-card" id={props.cake.name}>
        <h3 onClick={() => props.handleSelect(props.cake)} >{props.cake.flavor}</h3>
        {props.cake.selected == true? <h2>{props.cake.price}</h2>: null}
      </div>
    )
}


export default CakeCard
