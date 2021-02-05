import React, {Component} from 'react'

class HogTile extends Component{

    
    render(){
        return(
            <div className="ui card" onClick={() => this.props.handleClickHog(this.props.hog)}>
                <h1>{this.props.hog.name}</h1>
                <img src={this.props.formatImage(this.props.hog.name)}></img>
            </div>
        )
    }
}

export default HogTile