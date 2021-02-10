import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import About from './About'
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingNew from './PaintingsNew'
import PaintingShow from './PaintingShow'
import Login from './Login'
import artworks from '../data/artworks'
import NotFound from './NotFound'

class App extends Component {
  state = {
    paintings: artworks,
    onePainting: artworks[0]
  }

  handleVote = (id) => {
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 }
          }
        })
      };
    });
  }
  render(){
    return (
      <div className="App">
        <Navbar icon="paint brush" title="Painterest" description="out app" />
        {/* <PaintingList paintings={this.state.paintings} /> */}
      <Switch>
    
        <Route path="/paintings/new" component={PaintingNew} />
        <Route path="/paintings/:slug" render={(routerProps) =>{
          console.log(routerProps)
          let painting = this.state.paintings.find(painting => painting.slug == routerProps.match.params.slug)
          return <PaintingShow painting={painting} />
        }}

        />
        <Route path="/paintings" render={() => {
          return <PaintingList paintings={this.state.paintings} handleVote={this.handleVote} /> 
          }
         } />
        <Route exact path="/" component={About} />
        <Route component={NotFound} />
      </Switch>
      </div>
    )
  }
}

export default App;
