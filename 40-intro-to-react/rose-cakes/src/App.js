import Cake from './Cake.js'
import Header from './Header.js'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <Header />
      
      { data.map(cakeFromData => <Cake propsCake={cakeFromData} /> ) }
      {/* {[
        <Cake propsCake={cakeFromData} />,
        <Cake propsCake={cakeFromData} />,
        <Cake propsCake={cakeFromData} />,
        <Cake propsCake={cakeFromData} />

      ]} */}
      {/* {data.map(function(cakeFromData){
        return <Cake propsCake={cakeFromData} /> 
        }
      )} */}

    </div>
  )
}

// function Cake(){
//   return(
//     <div className="cake">
//       Cake
//     </div>
//   )
// }

// function Header(){
//   return(
//     <h1 className="header">
//       Rose Cakes 
//     </h1>
//   )
// }

export default App;
