function Cake(props){
    console.log(props)
  return(
    <div className="cake">
      <h1>{props.cake.flavor}</h1>
      <h2>{props.cake.price}</h2>
      <p>{props.cake.description}</p>
    </div>
  )
}

export default Cake
