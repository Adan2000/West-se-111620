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
        this.props.handleCreateCakes(this.state)
    }

    render(){
        return(
            <div className='form-container'>
            <h1>New Cake</h1>
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}> 
                <label htmlFor="flavor">Flavor</label>
                <input type='text' name="flavor"></input>
                <label htmlFor="description">description</label>
                <input type='text' name="description"></input>
                <label htmlFor="price">Price</label>
                <input type='number' name="price"></input>
                <input type='submit'></input>
            </form>
        </div>
        )
    }
}

export default Form