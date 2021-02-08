import React from "react"

class PizzaForm extends React.Component{
  // state = {
  //   topping:'',
  //   size:''
  // }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     [e.target.name]:e.target.value
  //   })
  // }

  render(){
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={this.props.handleChange} type="text" name="topping" className="form-control" placeholder="Pizza Topping" defaultValue={
                this.props.selectedPizza.topping
              }/>
        </div>
        <div className="col">
          <select name="size" onChange={this.props.handleChange}  value={this.props.selectedPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
  }
}

export default PizzaForm
