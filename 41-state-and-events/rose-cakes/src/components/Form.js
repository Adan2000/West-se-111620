import React from 'react'

class Form extends React.Component{
    state = {}

    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleUpdateCakes(this.state)
    }

    render(){
        console.log(this)
        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label htmlFor='flavor'>Flavor</label>
                <input type='text' name='flavor'></input>
                <br></br>
                <label htmlFor='description'>Description</label>
                <input type='text' name='description'></input>
                <br></br>
                <label htmlFor='price'>Price</label>
                <input type='number' name='price'></input>
                <br></br>
                <input type='submit' />
            </form>
        )
    }
}

export default Form