import React from 'react'

export default class Showname extends React.Component {

    state = {
        inputField: ""
    }

    changeInput = (e) => {
        this.setState({
            inputField: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div>Change the name?</div>
                <form onSubmit={(e) => this.props.nameChanger(e, this.state.inputField)}>
                    <input onChange={this.changeInput} type="text" />
                    <input type="submit" />
                </form>
                {this.props.name}
            </div>
        )
    }
}
