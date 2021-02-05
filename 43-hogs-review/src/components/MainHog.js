import React, {Component} from 'react'

class MainHog extends Component{
    render(){
       let {selectedHog, formatImage} = this.props
        return(
            <div>
                <h3>{selectedHog.name}</h3> 
                <img src={formatImage(selectedHog.name)}></img>
                <ul>
                    <li>Highest Medal Achieved: {selectedHog['highest medal achieved']}</li>
                    <li>Specialty: {selectedHog.specialty}</li>
                    <li>Weight: {selectedHog.weight}</li>
                </ul>
            </div>
        )
    }
}

export default MainHog