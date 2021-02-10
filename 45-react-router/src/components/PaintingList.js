import React from 'react';
import Painting from './Painting';

class PaintingList extends React.Component {


  render() {
   
    const allPaintings = this.props.paintings.map(p => (
      <Painting
        key={p.id}
        painting={p}
        handleVote={this.props.handleVote}
      />
    ));
    return (
      <div>
        <h1>All Paintings</h1>
        <div className="ui items">{allPaintings}</div>
      </div>
    );
  }
}
export default PaintingList;
