import Cake from './Cake.js'
import Header from './Header.js'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Cake dog={data[0]}/>
      {/* <Cake cake={data[1]}/>
      <Cake cake={data[2]}/>
      <Cake cake={data[3]}/> */}

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
