import React from 'react'
class SelectedCake extends React.Component {
    componentDidMount(){
        console.log('SelectedCake component did Mount!')
    }
    componentWillUnmount(){
        console.log('component will unmount ran!')
    }
  
    render(){
        console.log(this)
        return (
        <div className="cake-card" onClick={() => this.props.handleSelect(this.props.cake)}>
            <h3>{this.props.cake.flavor}</h3>
            <h3>$ {this.props.cake.price}</h3>
            <p>{this.props.cake.description}</p>
        </div>
        )
    }
}

export default SelectedCake